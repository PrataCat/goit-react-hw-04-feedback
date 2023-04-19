import { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';
import cssApp from './App.module.css';

function App() {
  const [good, setGoodRating] = useState(0);
  const [neutral, setNeutralRating] = useState(0);
  const [bad, setBadRating] = useState(0);
  const [total, setTotalFeedback] = useState(0);

  function handleLeaveFeedback(variant) {
    switch (variant) {
      case 'good':
        setGoodRating(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutralRating(prevState => prevState + 1);
        break;

      case 'bad':
        setBadRating(prevState => prevState + 1);
        break;

      default:
        break;
    }

    setTotalFeedback(prevState => prevState + 1);
  }

  function countPositiveFeedbackPercentage() {
    let positiveFeedback = ((good + neutral) * 100) / total;
    return Math.round(positiveFeedback) + '%';
  }

  return (
    <div className={cssApp['container']}>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
