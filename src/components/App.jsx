import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    const keys = Object.keys(this.state);
    const total = countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage();
  
    const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.handeleButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            rating={this.state}
            positivePercentage={positivePercentage}
            total={total}
          />
        )}
      </Section>
    </>
  );

  // handeleButtonClick = value => {
  //   this.setState(prevState => {
  //     return {
  //       [value]: prevState[value] + 1,
  //     };
  //   });
  // };



  // countPositiveFeedbackPercentage = () => {
  //   return Math.round((this.state.good * 100) / this.countTotalFeedback());
  // };




