import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogIn = () => {
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8000/user/" + username)
        .then((res) => res.json())
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error('Please Enter valid username');
          } else {
            if (resp.password === password) {
              toast.success('Login Successful');
              sessionStorage.setItem('username', username);
              sessionStorage.setItem('userrole', resp.role);
              usenavigate('/'); // Navigate to homepage on successful login
            } else {
              toast.error('Please Enter valid credentials');
            }
          }
        })
        .catch((err) => {
          toast.error('Login Failed due to: ' + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Please Enter Username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">User Login</h2>
        <form onSubmit={ProceedLogin} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">User Name <span className="text-red-500">*</span></label>
            <input 
              value={username} 
              onChange={e => usernameupdate(e.target.value)} 
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Password <span className="text-red-500">*</span></label>
            <input 
              type="password" 
              value={password} 
              onChange={e => passwordupdate(e.target.value)} 
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="flex justify-between items-center">
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              Login
            </button>
            <Link 
              to={'/register'} 
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
            >
              New User
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
