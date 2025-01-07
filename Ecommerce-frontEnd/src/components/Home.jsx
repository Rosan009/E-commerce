import React from 'react';
import { useNavigate } from 'react-router-dom';
import{Nav} from '../components/nav/Nav'
import { ProductNav } from './nav/ProductNav';
export const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/'); 
  };
  
  return (
    <div>
     <Nav/>
     <ProductNav/>
    </div>
  );
};
