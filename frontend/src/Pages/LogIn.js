import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, loginSuccess, loginFailure } from "../Redux/AuthReducer/authAction";

const LogIn = () => {
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { isLoading, isError, isAuth } = useSelector((state) => state.auth);
  const usenavigate = useNavigate();

  console.log(isLoading, isError, isAuth);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  useEffect(() => {
    if (isAuth) {
      usenavigate('/'); // Navigate to homepage on successful login
    }
  }, [isAuth, usenavigate]);

  const ProceedLogin = async(e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(loginRequest());
      try {
        const response = await fetch('https://reqres.in/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: username,
            password: password,
          }),
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          toast.success('Login Successful');
          sessionStorage.setItem('username', username);
          dispatch(loginSuccess(data.token));
          usenavigate("/dashboard");
          setMessage(`Success! Token: ${data.token}`);
        } else {
          toast.error('Invalid credentials');
          setMessage(`Error: ${data.error}`);
          dispatch(loginFailure('Invalid credentials'));
        }
      } catch (error) {
        toast.error(`Login Failed due to: ${error.message}`);
        setMessage(`Error: ${error.message}`);
        dispatch(loginFailure(error.message));
      }
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
            <label className="mb-1 font-semibold">Email <span className="text-red-500">*</span></label>
            <input 
              type="email"
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
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
