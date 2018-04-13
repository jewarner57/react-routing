import React, { Component } from 'react';
import './App.css';
import Photo from './Photo'
import Cat03 from './assets/Cat03.jpg'
import Cat04 from './assets/Cat04.jpg'

export default class MoreCats extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
                
                <div className='imageWrapper'>
                    <Photo source={Cat03}></Photo>
                    <Photo source={Cat04}></Photo>
                </div>
            
        )
    }
}