// src/Rating.js
import React from 'react';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = Math.floor(5 - rating);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={`full-${index}`}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.528 4.713a1 1 0 00.95.69h4.958c.969 0 1.371 1.24.588 1.81l-4.016 2.92a1 1 0 00-.364 1.118l1.527 4.713c.3.921-.755 1.688-1.538 1.118l-4.016-2.92a1 1 0 00-1.175 0l-4.016 2.92c-.783.57-1.838-.197-1.538-1.118l1.527-4.713a1 1 0 00-.364-1.118L2.57 9.14c-.783-.57-.38-1.81.588-1.81h4.958a1 1 0 00.95-.69l1.528-4.713z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg
          key="half"
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15.273L14.09 17.85c.333.216.722-.098.61-.482l-1.462-4.511L17.18 9.14c.305-.224.149-.684-.248-.684h-4.827l-1.482-4.57a.375.375 0 00-.71 0l-1.482 4.57H2.9c-.397 0-.553.46-.248.684l3.94 2.71-1.462 4.511c-.111.384.277.698.61.482L10 15.273z" />
          <path fill="#FFF" d="M10 13.856V5.832L8.456 10.344H4.34l3.416 2.352L6.294 17.208 10 15.28v-1.424z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={`empty-${index}`}
          className="w-4 h-4 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.528 4.713a1 1 0 00.95.69h4.958c.969 0 1.371 1.24.588 1.81l-4.016 2.92a1 1 0 00-.364 1.118l1.527 4.713c.3.921-.755 1.688-1.538 1.118l-4.016-2.92a1 1 0 00-1.175 0l-4.016 2.92c-.783.57-1.838-.197-1.538-1.118l1.527-4.713a1 1 0 00-.364-1.118L2.57 9.14c-.783-.57-.38-1.81.588-1.81h4.958a1 1 0 00.95-.69l1.528-4.713z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
