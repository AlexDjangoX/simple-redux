import React from 'react';

const DateDisplay = () => {
  const date = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className="pb-[32px] font-sans text-[16px] font-medium text-natural6 ">
      {formattedDate}
    </div>
  );
};

export default DateDisplay;
