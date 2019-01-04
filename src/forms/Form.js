import './Form.css';
import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div className='FormWrap'>
            <div>
                <div class='label'>Let's Connect</div>
                <p>
                Jelly-o biscuit carrot cake sesame snaps tiramisu candy canes. Bear claw lemon drops gummi bears. Cotton candy lollipop macaroon toffee fruitcake topping marzipan. Gingerbread caramels danish lollipop sweet cupcake chocolate cake apple pie. Lollipop gummies candy canes brownie. Cupcake liquorice croissant cake jelly-o dessert. Jelly-o chocolate bar pastry cheesecake tootsie roll. Carrot cake pastry sweet wafer fruitcake. Cookie candy marzipan cheesecake. Gummi bears oat cake sweet roll cake oat cake. Macaroon marzipan apple pie. Tootsie roll bonbon bonbon. Cake cake powder halvah brownie candy. Apple pie marzipan biscuit cookie lollipop.
                </p>
            </div>
                <form>
                <div>
                    <label for=''>Full Name</label>
                    <input type='text' placeholder=''/>
                </div><div>
                    <label for=''>Contact Number</label>
                    <input type='text' placeholder=''/>
                </div><div>
                    <label>Message</label>
                    <textarea></textarea>
                </div>
                <div>
                <button>SUBMIT</button>
                </div>
                </form>
            </div>
        )
    }
}

export default Form;