import React, { Component } from 'react';
import './App.css';
import Photo from './Photo'
import cat1 from './Cat01.jpg'
import cat2 from './Cat02.jpeg'

export default class Cats extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
                
                <div class="imageWrapper">
                    <Photo source={cat1} />
                    <Photo source={cat2} />
                </div>
            
        )
    }
}