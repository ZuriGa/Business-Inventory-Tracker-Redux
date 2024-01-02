import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewInventoryForm(props) {

    const handleNewInventoryFormSubmission = (event) => {
        if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
        const quantityValue = parseInt(event.target.quantity.value) || 1;
        props.onNewInventoryCreation({
            name: event.target.name.value,
            origin: event.target.origin.value,
            price: parseInt(event.target.price.value),
            roast: event.target.roast.value,
            flavor: event.target.flavor.value,
            quantity: quantityValue * 130,
            id: v4()
        });
        console.log('Form submitted!');
    }
};
    return(
        <React.Fragment>
            <ReusableForm
            formSubmissionHandler={handleNewInventoryFormSubmission}
            buttonText='Add Inventory' />
        </React.Fragment>
    );
}

NewInventoryForm.propTypes = {
    onNewInventoryCreation: PropTypes.func,
};

export default NewInventoryForm;
