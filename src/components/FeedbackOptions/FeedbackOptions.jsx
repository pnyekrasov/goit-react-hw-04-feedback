import { ListStyled } from './FeedbackOptions.stayled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListStyled>
      {options.map(option => (
        <li key={option}>
          <button onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
    </ListStyled>
  );
};
