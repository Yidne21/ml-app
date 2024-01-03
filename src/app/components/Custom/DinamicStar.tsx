import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const renderStars = (rating: number, component: string) => {
  const numberOfStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Create an array of star elements using Array.from and map
  const stars = Array.from({ length: numberOfStars }, (_, index) =>
    component === 'reviewItem' ? (
      <FontAwesome key={index} name="star" size={15} color="#FFD700" />
    ) : (
      <FontAwesome key={index} name="star" size={20} color="#FFD700" />
    ),
  );

  // Add half star if necessary
  if (hasHalfStar) {
    component === 'reviewItem'
      ? stars.push(<FontAwesome key="half" name="star-half" size={15} color="#FFD700" />)
      : stars.push(<FontAwesome key="half" name="star-half" size={20} color="#FFD700" />);
  }

  // Fill the remaining stars with empty star outlines
  const remainingStars = 5 - Math.ceil(rating);
  stars.push(
    ...Array.from({ length: remainingStars }, (_, index) =>
      component === 'reviewItem' ? (
        <FontAwesome key={`empty-${index}`} name="star-o" size={15} color="#FFD700" />
      ) : (
        <FontAwesome key={`empty-${index}`} name="star-o" size={20} color="#FFD700" />
      ),
    ),
  );

  return stars;
};

export default renderStars;
