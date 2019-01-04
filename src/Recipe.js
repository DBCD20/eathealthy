import React, { Component } from 'react';

class Recipe extends Component {

    render() {
        const   { title, img, instructions } = this.props;
        let   ingredients = this.props.ingredients.map((ing, keys) => (
                <li key={keys}>{ing}</li>
                ));
        return(
            <div className='recipe'>
                <h2 style={{textAlign: 'center', fontSize: '3em', fontWeight: '100'}}>{title}</h2>
                <div style={{ position: 'relative', boxSizing: 'border-box', maxHeight: '400px', oveflow: 'hidden'}}>
                    <img class='card-thumbnail' src={img} alt='food' style={{height: 'auto'}}/>
                </div>
                
                <ul>
                    {ingredients}
                </ul>
                <p>{instructions}</p>
            </div>
            

        )
    }
}

export default Recipe;