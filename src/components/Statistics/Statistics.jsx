import { RatingList } from './Statistics.styled';

export const Statistics = ({ rating, total, positivePercentage }) => {
  return (
    <RatingList>
      <li>
        <p>Good: {rating.good}</p>
      </li>
      <li>
        <p>Neutral: {rating.neutral}</p>
      </li>
      <li>
        <p>Bad: {rating.bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive feedback: {positivePercentage}%</p>
      </li>
    </RatingList>
  );
};
