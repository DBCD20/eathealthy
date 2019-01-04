import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return (
            <div style={{background: 'white', lineHeight: '5.5em', margin: '0', padding: '0 2em', display: 'flex',justifyContent: 'space-between', position: 'fixed', width: '100%', zIndex: '100'}}>
            <div style={{display: 'flex'}}>
                <p style={{fontSize: '3rem', marginRight: '1em', color: '#FCCC3A'}}><i class="fas fa-utensils"></i></p>
                <ul style={{display: 'flex', listStyle: 'none', color: '#a21616',margin: '0'}}>
                    <li style={{marginRight: '2em'}}><a href='#'>Home</a></li>
                    <li style={{marginRight: '2em'}}><a href='#'>Recipes</a></li>
                    <li style={{marginRight: '2em'}}><a href='#'>Diets</a></li>
                    <li style={{marginRight: '2em'}}><a href='#'>About Us</a></li>
                </ul>
            </div>
            <div>
                <ul style={{display: 'flex', listStyle: 'none', color: '#a21616',margin: '0', fontSize: '1.2rem'}}>
                    <li style={{marginRight: '2em'}}><a href='#'><i class="fab fa-twitter"></i></a></li>
                    <li style={{marginRight: '2em'}}><a href='#'><i class="fab fa-facebook-square"></i></a></li>
                    <li style={{marginRight: '2em'}}><a href='#'><i class="fab fa-instagram"></i></a></li>
                    <li style={{marginRight: '2em'}}><a href='#'><i class="fab fa-google-plus"></i></a></li>
                </ul>
            </div>
            </div>
        )
    }
}
export default Navbar;