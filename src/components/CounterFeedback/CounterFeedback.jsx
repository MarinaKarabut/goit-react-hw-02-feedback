import React, {Component} from 'react';

import Notification from '../Notification/Notification'
import Section from '../Section/Section'
import Statistics from '../Statistics/Statistics'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'

import styles from './CounterFeedback.module.css'

class CounterFeedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    increaseCount = (stateName)=> {
        this.setState(state => {
            const prevNumber = state[stateName];
            return {
                [stateName]: prevNumber + 1
            }
        })
    }

    countTotalFeedback = () => {
        const arrayValue = Object.values(this.state)
        const totalValue = arrayValue.reduce((acc, value)=>  acc + value)
        return totalValue
    }

    countPositiveFeedbackPercentage = () =>{
        const {good} = this.state
        const totalValue = this.countTotalFeedback()
        if(!totalValue) {
            return 0
        }
        const percent = (good * 100 / totalValue).toFixed(0)
        return percent 
    }


    render() {

        const {increaseCount, countPositiveFeedbackPercentage, countTotalFeedback} = this;
        const totalValue = countTotalFeedback()

        return (
        <div className={styles.counter}>
            {<>
                <Section title="Please leave feedback">
                <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={increaseCount} />
            </Section>

            
            <Section title="Statistics">
                {totalValue ? (<Statistics 
                    {...this.state}
                    total={totalValue} 
                    positivePercentage={countPositiveFeedbackPercentage()} 
                />) : (<Notification message="No feedback given" />
                )
                }
            </Section>
            </>}
        </div>);
    }
};

export default CounterFeedback;
