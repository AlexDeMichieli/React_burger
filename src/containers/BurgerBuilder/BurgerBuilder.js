import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 2,
            bacon: 2,
            cheese: 2,
            meat: 0
        }
    }

    render () {
        return (
            // <Aux>
                <Burger ingredients={this.state.ingredients} />
                /* <div>Build Controls</div> */
            // </Aux>
        );
    }
}

export default BurgerBuilder;