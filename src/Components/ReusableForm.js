import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function ReusableForm(props) {
    const formSubmissionHandler = (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.elements.name.value,
            origin: event.target.elements.origin.value,
            price: parseFloat(event.target.elements.price.value),
            roast: event.target.elements.roast.value,
            quantity: parseInt(event.target.elements.quantity.value),
            flavor: event.target.elements.flavor.value,
            id: v4(),
        };

        if (props.formSubmissionHandler) {
            props.formSubmissionHandler(formData);
        }
    };

    return (
        <React.Fragment>
            <form onSubmit={formSubmissionHandler}>
                <label htmlFor='name'>Name: </label>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'/>
                <label htmlFor="origin">Origin: </label>
                <input
                    type='text'
                    name='origin'
                    placeholder='Origin'/>
                <label htmlFor="price">Price: </label>
                <input
                    type='number'
                    name='price'
                    placeholder='$0.00'/>
                <label htmlFor="roast">Roast: </label>
                <input
                    type='text'
                    name='roast'
                    placeholder='Roast level'/>
                <label htmlFor='quantity'>Quantity: </label>
                <input
                    type='number'
                    name='quantity'
                    placeholder='How many burlap sacks?'/> 
                <label htmlFor='flavor'>Flavor: </label>
                <textarea
                    name='flavor'
                    placeholder='Enter flavor notes' /> 
                <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;