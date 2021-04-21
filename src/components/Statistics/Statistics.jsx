import React from 'react';
import PropTypes from "prop-types";

import styles from './Statistics.module.css'

function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
        <>
        <p className={styles.statistic}>Good: {good}</p>
        <p className={styles.statistic}>Neutral: {neutral}</p>
        <p className={styles.statistic}>Bad: {bad}</p>
        <p className={styles.statistic}>Total: {total}</p>
        <p className={styles.statistic}>Positive feedback: {positivePercentage} %</p>
        </>

    )
};

export default Statistics;

Statistics.propTypes ={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,

}



