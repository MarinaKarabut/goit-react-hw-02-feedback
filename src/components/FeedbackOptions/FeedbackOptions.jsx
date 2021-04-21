import React from 'react';
import {v4} from 'uuid'

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
