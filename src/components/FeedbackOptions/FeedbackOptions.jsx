import React from 'react';
import {v4} from 'uuid'
import PropTypes from "prop-types";

import styles from './FeedbackOptions.module.css'

function FeedbackOptions({options,onLeaveFeedback}) {
    const elemBtn = options.map(option => (
        <button key={v4()} className={styles.button} onClick={()=> onLeaveFeedback(option)}>
            {option}
        </button>
    ))
    return (
    <div className={styles.wrapperBtn}>
        {elemBtn}
    </div>
    )
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
    options: [],
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])), // obOf
    onLeaveFeedback: PropTypes.func.isRequired,
}