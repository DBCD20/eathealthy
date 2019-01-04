import React, {Component} from 'react';
import HeaderText from './header-text';
import './header.css';


class Header extends Component {
    render(){
        return(
            <div className='header'>  
                <HeaderText />
            </div>
        )
    }
}
export default Header;