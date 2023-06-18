import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h2>Landing Page</h2>
      <Link to="/seller">I'm a Seller</Link>
      <Link to="/customer">I'm a Customer</Link>
    </div>
  );
};

export default Landing;
