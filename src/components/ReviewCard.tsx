import type { FC } from 'react';
import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

interface ReviewCardProps {
  name: string;
  occupation: string;
  review: string;
}

const ReviewCard: FC<ReviewCardProps> = ({ name, occupation, review }) => {
  return (
    <div className="space-y-5">
      <p>{review}</p>
      <p className="text-xl font-medium">
        {name} | <span className="text-sm">{occupation}</span>
      </p>
      <div className="flex items-center gap-1 text-yellow-400">
        {[1, 2, 3, 4, 5].map((key) => {
          return <BsFillStarFill key={key} className="size-4" />;
        })}
      </div>
    </div>
  );
};

export default ReviewCard;
