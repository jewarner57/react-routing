import React, { Component } from 'react';
import './App.css';
import Photo from './Photo'

export default class MoreAdditionalCats extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
                
                <div className = {this.props.imageStyle}>
                    <img src = {this.props.imageSRC} />
                </div>
            
        )
    }
}