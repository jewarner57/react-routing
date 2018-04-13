import React, { Component } from 'react';
import './App.css';
import Photo from './Photo'
import Cat05 from './assets/Cat05.jpg'
import Cat06 from './assets/Cat06.jpg'

export default class MoreAdditionalCats extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
                
                <div className='imageWrapper'>
                    <Photo source={Cat05}></Photo>
                    <Photo source={Cat06}></Photo>
                </div>
            
        )
    }
}