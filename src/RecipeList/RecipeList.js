import './RecipeList.css';
import React, {Component} from 'react';
import Recipe from '../Recipe';
import PropTypes from 'prop-types';

class RecipeList extends Component{

    static defaultProps = {
        recipe: [
            {
                title:'Pasta', 
                img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                ingredients: ['Potato', 'Curry Powder', 'Garlic', '2 cups of water'], 
                instructions: 'Bonbon cupcake bear claw. Chupa chups cheesecake macaroon. Marzipan chocolate bar candy canes bear claw topping biscuit sesame snaps.'
            },
            {
                title:'Cake', 
                img: 'https://images.pexels.com/photos/53110/cake-cream-strawberry-dessert-53110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                ingredients: ['Flour', 'Baking Powder', 'Sugar', '2 cups of water', 'Strawberry'],
                instructions: 'Bonbon cupcake bear claw. Chupa chups cheesecake macaroon. Marzipan chocolate bar candy canes bear claw topping biscuit sesame snaps.'
            },
            {
                title: 'Pancake', 
                img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                ingredients: ['Flour', 'Eggs', 'Sugar', '2 cups of water', 'Peanuts'], 
                instructions: 'Bonbon cupcake bear claw. Chupa chups cheesecake macaroon. Marzipan chocolate bar candy canes bear claw topping biscuit sesame snaps.'
            }
        ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }

    render(){
        const recipes = this.props.recipe.map((item, i) => (
            <Recipe key={i} {...item} />
        ))
        return(
            <div className='RecipeWrapper'>
                {recipes}
            </div>
        )
    }
}

export default RecipeList