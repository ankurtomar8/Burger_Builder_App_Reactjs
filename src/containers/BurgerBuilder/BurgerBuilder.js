import  React , {Component} from  'react' ;

import Aux from '../../hoc/Auxiliary' ;
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {

    salad : 7 ,
    cheese : 20 ,
    aloo : 15 ,
    bacon : 25,
}



class BurgerBuilder extends Component {
    /* 
    constructor (props){
        super(props);
        this.state = {...}
    } 
    
    */

    state = {
        ingredients : {
            salad : 0 ,
            bacon : 0 ,
            cheese : 0 ,
            aloo : 0
        },
        totalPrice: 30
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1 ;
        const updatedIngredients = {
                ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice  = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice ,
            ingredients:updatedIngredients
        })



    }

    removeIngredientHandler = (type) =>{

    }

    render(){
    return (
        <Aux>
            <Burger
            ingredients ={this.state.ingredients} />              
            
            <BuildControls 
            ingredientsAdded={this.addIngredientHandler}/>
        </Aux>

    );
}
}

export default BurgerBuilder;