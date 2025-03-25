import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '../utils/isTokenExpired ';

const useTokenExpiryHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem('token');
      if (isTokenExpired(token)) {
        localStorage.removeItem('token'); 
        clearInterval(interval);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [navigate]);
};

export default useTokenExpiryHandler;
