import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilters } from '../Redux/Reducer/action'; // Assuming you have this action defined

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  const handleRatingChange = (rating) => {
    const newSelectedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating];
    setSelectedRatings(newSelectedRatings);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
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
    <div className="sidebar">
      <h2>Filter by Rating</h2>
      {[1, 2, 3, 4, 5].map((rating) => (
        <div key={rating}>
          <input
            type="checkbox"
            id={`rating-${rating}`}
            checked={selectedRatings.includes(rating)}
            onChange={() => handleRatingChange(rating)}
          />
          <label htmlFor={`rating-${rating}`}>
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </label>
        </div>
      ))}

      <h2>Sort By Year</h2>
      <div>
        <input
          type="radio"
          id="ascending"
          name="sortOrder"
          value="asc"
          checked={sortOrder === 'asc'}
          onChange={() => handleSortChange('asc')}
        />
        <label htmlFor="ascending">Ascending</label>
      </div>
      <div>
        <input
          type="radio"
          id="descending"
          name="sortOrder"
          value="desc"
          checked={sortOrder === 'desc'}
          onChange={() => handleSortChange('desc')}
        />
        <label htmlFor="descending">Descending</label>
      </div>
    </div>
  );
};

export default Sidebar;
