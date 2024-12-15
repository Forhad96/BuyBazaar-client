import React, { useState } from 'react';
import { Flex, Rate } from 'antd';

const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

interface RatingProps {
  value?: number;
  isDisabled?: boolean;
}

const Rating: React.FC<RatingProps> = ({ value = 0, isDisabled = false }) => {
    const [ratingValue, setRatingValue] = useState(3);
  return (
    <Flex gap="middle" vertical>
      <Rate disabled={isDisabled} className='text-pink-600' tooltips={desc} onChange={setRatingValue} value={value} />
      {ratingValue ? <span className="text-xs">{desc[value - 1]}</span> : null}
    </Flex>
  );
};

export default Rating;