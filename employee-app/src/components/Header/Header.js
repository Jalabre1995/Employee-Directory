import React, {Component} from 'react';
import "../Header/style.css";

//////Creating a subclass for header to render a title and and paragraph for the user////
export default class Header extends Component{
    render(){
        return (
            <div className="header">
                <h1> Employee-Directory</h1>
                <p>Choose an employee you want to find</p>
            </div>
        )
    }
} 
