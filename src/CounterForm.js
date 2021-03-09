import { useFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux'

const { uuid } = require('uuidv4');


const CounterForm = ({ onAddNewCounter }) => {
    const handleSubmit = () => {
        console.log('work')
        onAddNewCounter(0, parseInt(formik.values.incrementBy), formik.values.description,  uuid())

        formik.resetForm()
    }
    const formik = useFormik({
        initialValues: {
            incrementBy: 1,
            description: ''
        },
        onSubmit: handleSubmit
    })
    return (<nav>
        <form onSubmit={formik.handleSubmit} >
            <div className="inputContainer">
                <label htmlFor="incrementBy">
                    incrementBy:
                </label><input id='incrementBy' type="number"
                    name='incrementBy'
                    onChange={formik.handleChange}
                    value={formik.values.incrementBy}
                />
                <label htmlFor="addDescription">
                    description
                </label><input id='addDescription' type="text"
                    name='description'
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />

                <button type='submit'>add</button>
            </div>

        </form>
    </nav>);
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewCounter: (value, incrementBy, description,id) => {
            dispatch({ type: 'ADD_COUNTER', payload: { value, incrementBy, description, id } })
        }
    }
}

export default connect(null, mapDispatchToProps)(CounterForm);