import React from 'react';

const ProgressBar = ({ progress, total }) => {
  const widthPercentage = (progress / total) * 100;

  return (
    <div className="w-full h-2 relative rounded-2xl border border-purple-500">
      <div
        className="absolute rounded-2xl left-0 top-0 bg-purple-500 min-h-full"
        style={{ width: `${widthPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
