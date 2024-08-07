import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilters } from '../Redux/Reducer/action'; // Assuming you have this action defined

const Sidebar = ({order,setOrder,setStarRatings}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  const handleRatingChange = (rating) => {
    const newSelectedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating];
      console.log(newSelectedRatings)
      setStarRatings(newSelectedRatings);
    setSelectedRatings(newSelectedRatings);
  };

  const handleSortChange = (order) => {
     setOrder(order)
    // setSortOrder(order);
    

  };

  useEffect(() => {
    // Parse the URL and set the state accordingly
    const queryParams = new URLSearchParams(location.search);
    const ratings = queryParams.getAll('rating').map(Number);
    const order = queryParams.get('order');
    
    setSelectedRatings(ratings);
    setSortOrder(order || '');
    
    dispatch(updateFilters({ ratings, order }));
  }, [location.search, dispatch]);

  useEffect(() => {
    // Update the URL whenever the filters or sort order changes
    const queryParams = new URLSearchParams();

    selectedRatings.forEach((rating) => queryParams.append('rating', rating));
    if (sortOrder) {
      queryParams.set('order', sortOrder);
    }

    navigate(`?${queryParams.toString()}`, { replace: true });
    dispatch(updateFilters({ ratings: selectedRatings, order: sortOrder }));
  }, [selectedRatings, sortOrder, navigate, dispatch]);

  return (
    <div className="sidebar p-4 bg-gray-200">
      <h2 className="font-bold mb-2">Filter by Rating</h2>
      {[1, 2, 3, 4, 5].map((rating) => (
        <div key={rating} className="mb-2">
          <input
            type="checkbox"
            id={`rating-${rating}`}
            checked={selectedRatings.includes(rating)}
            onChange={() => handleRatingChange(rating)}
          />
          <label htmlFor={`rating-${rating}`} className="ml-2">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </label>
        </div>
      ))}

      <h2 className="font-bold mb-2">Sort By Year</h2>
      <div className="mb-2">
        <input
          type="radio"
          id="ascending"
          name="sortOrder"
          value="asc"
          checked={order === 'asc'}
          onChange={() => handleSortChange('asc')}
        />
        <label htmlFor="ascending" className="ml-2">Ascending</label>
      </div>
      <div>
        <input
          type="radio"
          id="descending"
          name="sortOrder"
          value="desc"
          checked={order==="desc"}
          onChange={() => handleSortChange('desc')}
        />
        <label htmlFor="descending" className="ml-2">Descending</label>
      </div>
    </div>
  );
};

export default Sidebar;
