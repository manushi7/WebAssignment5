import React, { useState } from 'react';

const CalculatorWidget = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [isOperand, setIsOperand] = useState(false);

    // Function to handle number button clicks
    const onNumberButtonClick = (value) => {
        if (isOperand) {
            setDisplayValue(value);
            setIsOperand(false);
        } else {
            // Append the value to the current display value
            const result = displayValue === '0' ? value : displayValue + value;
            setDisplayValue(result);
        }
    };

    // Function to handle operator button clicks
    const onOperatorButtonClick = (value) => {
        if (operator && !isOperand) {
             // calculate the result of the previous operation
            const result = eval(`${previousValue} ${operator} ${displayValue}`);
            setDisplayValue(String(result));
            setPreviousValue(null);
        } else {
            setPreviousValue(displayValue);
        }

        // Set the operator to the selected value
        setOperator(value);
        setIsOperand(true);
    };

   // Function to handle equals button click
    const onEqualsButtonClick = () => {
        try {
            // Calculate the result of the operation
            const result = eval(`${previousValue} ${operator} ${displayValue}`);
            // Update the display value with the result
            setDisplayValue(String(result));

            // Reset the previous value, operator, and flag
            setPreviousValue(null);
            setOperator(null);
            setIsOperand(true);
        } catch(error) {
            console.log("error onHandleEqualsClick: ", error)
        }
    };

    // Function to clear the calculator
    const onClearButtonClick = () => {
        setDisplayValue('0');
        setPreviousValue(null);
        setOperator(null);
        setIsOperand(false);
    };

    return (
        <div className="calculator-widget">
            <input type="text" value={displayValue} readOnly />
            <div className="buttons">
                <button onClick={() => onNumberButtonClick('7')}>7</button>
                <button onClick={() => onNumberButtonClick('8')}>8</button>
                <button onClick={() => onNumberButtonClick('9')}>9</button>
                <button className="button-operand-text" onClick={() => onOperatorButtonClick('+')}>+</button>
                <button onClick={() => onNumberButtonClick('4')}>4</button>
                <button onClick={() => onNumberButtonClick('5')}>5</button>
                <button onClick={() => onNumberButtonClick('6')}>6</button>
                <button className="button-operand-text" onClick={() => onOperatorButtonClick('-')}>-</button>
                <button onClick={() => onNumberButtonClick('1')}>1</button>
                <button onClick={() => onNumberButtonClick('2')}>2</button>
                <button onClick={() => onNumberButtonClick('3')}>3</button>
                <button className="button-operand-text" onClick={() => onOperatorButtonClick('*')}>*</button>
                <button onClick={() => onNumberButtonClick('0')}>0</button>
                <button className="button-operand" onClick={onClearButtonClick}>C</button>
                <button onClick={onEqualsButtonClick}>=</button>
                <button className="button-operand-text" onClick={() => onOperatorButtonClick('/')}>/</button>
            </div>
        </div>
    );
};

export default CalculatorWidget;