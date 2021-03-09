import React from 'react';

import { connect } from 'react-redux'
const Counter = ({ onDeleteCounter, onDecrement, onIncrement, onChangeIncrementedValue, counter }) => {
    const handleIncrement = () => {
        onIncrement(counter.id)
    }
    const handleDecrement = () => {
        onDecrement(counter.id)
    }
    const handleInput = (e) => {
        onChangeIncrementedValue(counter.id, parseInt(e.target.value))
    }
    const handleRemove = () => {
        onDeleteCounter(counter.id)
    }

    return (
        <div className='counter'>
            <p>{counter.description}</p>
            <p>{counter.value}</p>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <div className="inputWrap">
                <label htmlFor="inputInCounter">
                    set Incrementation
        </label>
                <input
                    id='inputInCounter'
                    type='number'
                    value={counter.incrementBy}
                    onChange={handleInput} />
                <button className='remove' onClick={handleRemove}> remove</button>
            </div>

        </div>);
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (id) => {
            dispatch({ type: 'INCREMENT_COUNTER', payload: { id } })
        },
        onDecrement: (id) => {
            dispatch({ type: 'DECREMENT_COUNTER', payload: { id } })
        },
        onChangeIncrementedValue: (id, incrementBy) => {
            dispatch({ type: 'CHANGE_INCREMENTED_VALUE', payload: { id, incrementBy } })
        },
        onDeleteCounter: (id) => {
            dispatch({ type: 'DELETE_COUNTER', payload: { id } })
        }
    }
}

export default connect(null, mapDispatchToProps)(Counter);