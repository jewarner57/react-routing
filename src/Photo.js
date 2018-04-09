import React, { Component } from 'react';
import './App.css';

export default class Photo extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
                
                <div>
                    <img src={this.props.source} className = 'image' />
                </div>
            
        )
    }
}