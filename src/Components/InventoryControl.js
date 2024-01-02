import React from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetails from './InventoryDetails';
import EditInventoryForm from './EditInventoryForm';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';


const coffeeInventory = [
    {
        name: 'Light City',
        origin: 'Costa Rica',
        price: '$17.00',
        roast: 'Light roast',
        flavor: 'Our Costa Rica coffee is a delicate showing with bright notes of bergamot and lemongrass.' ,
        poundsLeft: 130,
        id: '0'

    },
    {
        name: 'American Roast',
        origin: 'Guatemala',
        price: '$19.00',
        roast: 'Medium roast',
        flavor: 'Our Organic House blend balances mild acidity, medium body, and walnut flavor notes in perfect harmony.',
        poundsLeft: 130,
        id: '1'
    },
    {
        name: 'Espresso Roast',
        origin: 'Colombia',
        price: '$18.00',
        roast: 'Dark roast',
        flavor: 'Our Espresso Roast blend has a big, heavy body that acts as a foundation for its earthy, sweet flavors and complex finish.',
        poundsLeft: 130,
        id: '2'
    },
];

class InventoryControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedInventoryItem: null,
            editing: false,
        };
    }

    handleAddingNewInventoryToList = (newCoffee) => {
        const { dispatch } = this.props;
        
        const { name, origin, price, roast, flavor, poundsLeft, id } = newCoffee;
        const action = {
            type: 'ADD_INVENTORY',
            name: name,
            origin: origin,
            price: price,
            roast: roast,
            flavor: flavor,
            poundsLeft: newCoffee.quantity,
            id: v4()
        }
        dispatch(action);
        const action2 = {
            type: 'TOGGLE_FORM'
        }
        dispatch(action2);
        console.log('New inventory added:', newCoffee);
    };

    handleClick = () => {
        if (this.state.selectedInventoryItem != null) {
            this.setState({
                selectedInventoryItem: null,
                editing: false,
            });
        } else {
            const { dispatch } = this.props;
            const action = a.toggleForm();
            dispatch(action);
        }
    };

    handleUpdatingCoffeeList = (updatedCoffee) => {
        const {dispatch} = this.props;
        const action = a.editInventory(updatedCoffee.id, updatedCoffee);
        dispatch(action);

        this.setState({
            editing: false, 
            selectedInventoryItem: null,
        });
    };

    handleChangingSelectedCoffee = (id) => {
        const selectedCoffee = this.props.mainCoffeeList.find((coffee) => coffee.id === id);
        console.log('Selected Coffee:', selectedCoffee);

        if (selectedCoffee) {
            this.setState({ selectedInventoryItem: selectedCoffee, editing: true }, () => {
                const action = a.toggleForm();
                this.props.dispatch(action);
            });
        }
        
    };

    handleSellCoffee = () => {
        const { selectedInventoryItem } = this.state;

        if ( selectedInventoryItem && selectedInventoryItem.poundsLeft > 0) {
            const updatedCoffee = { ...selectedInventoryItem, poundsLeft: selectedInventoryItem.poundsLeft - 1 };
            const action = a.addInventory(updatedCoffee);
            this.props.dispatch(action);

            this.setState({
                selectedInventoryItem: updatedCoffee,
            });
        }
    }

    handleDeletingCoffee = () => {
        const { selectedInventoryItem } = this.state;

        if (selectedInventoryItem) {
            const action = a.deleteInventory(selectedInventoryItem.id);
            this.props.dispatch(action);

            this.setState({
                selectedInventoryItem: null,
                editing: false,
            });
        }
    };

    handleEditingCoffeeInList = () => {
        const { selectedInventoryItem } = this.state;

        if (selectedInventoryItem) {
            const action = a.editInventory(selectedInventoryItem.id, selectedInventoryItem);
            this.props.dispatch(action);

            const toggleFormAction = a.toggleForm();
            this.props.dispatch(toggleFormAction);
        }
    };


    render() {
        const { formVisibleOnPage, mainCoffeeList } = this.props;
        const { selectedInventoryItem, editing } = this.state;

        let currentlyVisibleState = null;
        let buttonText = null;

        if (editing) {
            currentlyVisibleState = <EditInventoryForm coffee = {selectedInventoryItem} 
            onEditCoffee = {this.handleUpdatingCoffeeList} />
            buttonText = 'Return to List';
        } else if (selectedInventoryItem !== null) {
            currentlyVisibleState = <InventoryDetails coffee = {selectedInventoryItem}
            onSellPound = {this.handleSellCoffee}
            onClickingDelete = {this.handleDeletingCoffee} 
            onClickingEdit = {this.handleEditingCoffeeInList}/>
            buttonText = 'Return to List';
        } else if (formVisibleOnPage) {
            currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />
            buttonText = 'Return to List';
        } else {
            currentlyVisibleState =
                <InventoryList
                    inventoryList={this.props.mainCoffeeList}
                    onCoffeeSelection={this.handleChangingSelectedCoffee} />
                    buttonText = 'Add New Coffee';
        }

        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}

InventoryControl.propTypes = {
    mainCoffeeList: PropTypes.array,
    formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        mainCoffeeList: state.mainCoffeeList,
        formVisibleOnPage: state.formVisibleOnPage,
        
    };
};


export default connect(mapStateToProps)(InventoryControl);
