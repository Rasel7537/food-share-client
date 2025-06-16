
import React from 'react';
import { Link } from 'react-router';

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-6">
      {/* Spinner */}
      <div className="mb-6">
        <span className="loading loading-spinner text-error w-16 h-16"></span>
      </div>

      {/* 404 Message */}
      <h1 className="text-5xl font-bold text-error mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-6 text-gray-600">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* Back to home button */}
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default Errorpage;
