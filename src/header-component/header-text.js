import React, {Component} from 'react';

class HeaderText extends Component {
    render(){
        return(
            <div style={{maxWidth: '400px', padding: '0.5em 1em'}}>
                <h1>Eat<br /><span style={{fontWeight: '900', fontSize: '1.4em', color: '#FCCC3A', letterSpacing: '0.18em'}}>HEALTHY</span><br /><span style={{color: '#82CC00', fontSize: '2.2em'}}>Now!</span></h1>
                <p>
                    Caramels muffin croissant pastry chocolate cake soufflé jelly beans. Gummi bears marzipan muffin halvah dragée chupa chups liquorice lollipop. Cupcake liquorice powder tart cake jelly dragée bear claw sweet roll. Chocolate bar pudding halvah cotton candy jelly-o liquorice. Gummi bears cheesecake gingerbread sugar plum toffee tiramisu soufflé. &rarr;
                </p>
            </div>
        )
    }
}

export default HeaderText;