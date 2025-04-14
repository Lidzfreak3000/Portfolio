import React from 'react';

export const Alert = ({ message, type = 'info', onClose }) => {
  const alertClasses = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
  };

  return (
    <div role="alert" className={`alert ${alertClasses[type]} alert-vertical sm:alert-horizontal transition-opacity duration-500 ease-in-out`}>
      <span>{message}</span>
      <button className="btn btn-sm btn-ghost" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};