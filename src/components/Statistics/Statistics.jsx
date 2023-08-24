import { RatingList } from './Statistics.styled';

export const Statistics = ({
  ratingGood,
  ratingNeutral,
  ratingBad,
  total,
  positivePercentage,
}) => {
  return (
    <RatingList>
      <li>
        <p>Good: {ratingGood}</p>
      </li>
      <li>
        <p>Neutral: {ratingNeutral}</p>
      </li>
      <li>
        <p>Bad: {ratingBad}</p>
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
