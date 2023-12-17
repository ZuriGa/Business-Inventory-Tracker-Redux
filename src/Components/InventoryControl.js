import React from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetails from './InventoryDetails';
import EditInventoryForm from './EditInventoryForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const coffeeInventory = [
    {
        name: 'Light City',
        origin: 'Costa Rica',
        price: '$17.00',
        roast: 'Light roast',
        size: '1 lb',
        flavor: 'Our Costa Rica coffee is a delicate showing with bright notes of bergamot and lemongrass.',
        poundsLeft: 130,
        id: '1'

    },
    {
        name: 'American Roast',
        origin: 'Guatemala',
        price: '$19.00',
        roast: 'Medium roast',
        size: '1 lb',
        flavor: 'Our Organic House blend balances mild acidity, medium body, and walnut flavor notes in perfect harmony.',
        poundsLeft: 130,
        id: '2'
    },
    {
        name: 'Espresso Roast',
        origin: 'Colombia',
        price: '$18.00',
        roast: 'Dark roast',
        size: '1 lb',
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
        const { name, origin, price, roast, size, flavor, poundsLeft, id } = newCoffee;
        const action = {
            type: 'ADD_INVENTORY',
            name: name,
            origin: origin,
            price: price,
            roast: roast,
            size: size,
            flavor: flavor,
            poundsLeft: poundsLeft,
        }
        dispatch(action);
        const action2 = {
            type: 'TOGGLE_FORM'
        }
        dispatch(action2);
    }

    handleClick = () => {
        if (this.state.selectedInventoryItem !== null) {
            this.setState({
                selectedInventoryItem: null,
                editing: false,
            });
        } else {
            const { dispatch } = this.props;
            const action = {
                type: 'TOGGLE_FORM'
            }
            dispatch(action);
        }
    }

    handleEditingCoffeeInList = (coffeeToEdit) => {
        const { dispatch } = this.props;
        const { name, origin, price, roast, size, flavor, poundsLeft, id } = coffeeToEdit;
        const action = {
            type: 'ADD_INVENTORY',
            name: name,
            origin: origin,
            price: price,
            roast: roast,
            size: size,
            flavor: flavor,
            poundsLeft: poundsLeft,
        }
        dispatch(action);
        this.setState({
            editing: false,
            selectedCoffee: null
        });
    }


    handleUpdatingCoffeeList = (updatedCoffee) => {
        const updatedMainCoffeeList = this.state.mainCoffeeList.map((coffee) =>
            coffee.id === updatedCoffee.id ? updatedCoffee : coffee
        );
        this.setState({
            mainCoffeeList: updatedMainCoffeeList,
            editing: false,
            selectedInventoryItem: null,
        });
    }

    handleChangingSelectedCoffee = (id) => {
        const selectedCoffee = this.props.mainCoffeeList[id];
        this.setState({ selectedInventoryItem: selectedCoffee });
    }

    handleSellCoffee = () => {
        const { selectedInventoryItem, mainCoffeeList } = this.state;
        const updatedInventory = mainCoffeeList.map((coffee) => {
            if (coffee.id === selectedInventoryItem.id) {
                return { ...coffee, poundsLeft: Math.max(0, coffee.poundsLeft - 1) };
            } else {
                return coffee;
            }
        });
        const updatedPoundsLeft = Math.max(0, selectedInventoryItem.poundsLeft - 1);

        this.setState({
            mainCoffeeList: updatedInventory,
            selectedInventoryItem: { ...selectedInventoryItem, poundsLeft: updatedPoundsLeft },
        });
    }

    handleDeletingCoffee = (id) => {
        const { dispatch } = this.props;
        const action = {
            type: 'DELETE_INVENTORY',
            id: id
        }
        dispatch(action);
        this.setState({selectedCoffee: null});
    }


    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.editing) {
            currentlyVisibleState = <EditInventoryForm coffee={this.state.selectedInventoryItem}
                onEditCoffee={this.handleUpdatingCoffeeList} />
            buttonText = 'Return to List';
        } else if (this.state.selectedInventoryItem !== null) {
            currentlyVisibleState = <InventoryDetails coffee={this.state.selectedInventoryItem}
                onSellPound={this.handleSellCoffee}
                onClickingDelete={this.handleDeletingCoffee}
                onClickingEdit={this.handleEditingCoffeeInList} />
            buttonText = 'Return to List';
        } else if (this.props.formVisibleOnPage) {
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

const mapStateToProps = state => {
    return {
        mainCoffeeList: state.mainCoffeeList,
        formVisibleOnPage: state.formVisibleOnPage
    }
}

InventoryControl = connect(mapStateToProps)(InventoryControl);


export default InventoryControl;