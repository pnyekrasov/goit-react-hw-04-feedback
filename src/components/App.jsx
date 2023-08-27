import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const reviews = ['good', 'neutral', 'bad'];

  const handeleButtonClick = value => {
    switch (value) {
      case 'good':
        setGood(ps => ps + 1);
        break;
      case 'neutral':
        setNeutral(ps => ps + 1);
        break;
      case 'bad':
        setBad(ps => ps + 1);
        break;
      default:
        console.log('Invalid reviews type');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={reviews}
          onLeaveFeedback={handeleButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            ratingGood={good}
            ratingNeutral={neutral}
            ratingBad={bad}
            positivePercentage={positivePercentage}
            total={total}
          />
        )}
      </Section>
    </>
  );
};
