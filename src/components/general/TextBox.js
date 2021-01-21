import React from 'react'
import { pipe, remove } from '../../utils/fp'

const customInputName = pipe(remove([' ', ':']), ele => `${ele}-input`)
const TextBox = ({ label = 'label', styles = { label: '', input: '' }}) => {
    const name = customInputName(label)
    return (
        <React.Fragment>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input type="text"  id={name} className={styles.input}></input>
        </React.Fragment>
    )
}

export default TextBox
