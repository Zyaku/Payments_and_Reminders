import React, {Component} from 'react';
import {menuItems} from './MenuItems';
import './NavBar.css';


class NavBar extends Component{


    render(){
        return(
            <nav className="navBar-items">
              
                <h1 className ="navBar-logo">  <i className="fas fa-money-check-alt logo"></i> P & R</h1>
                
                    <ul className="navBar-Choices">   
                        {
                            menuItems.map((item,index) => { 
                                return(
                                    <li key={index}>
                                        <a className={item.containerName} href={item.url}> {item.title} </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
            </nav>
        )
    }



}




export default NavBar