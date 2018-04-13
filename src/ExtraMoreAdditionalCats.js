import React, { Component } from 'react';
import './App.css';
import Photo from './Photo'
import Cat07 from './assets/Cat07.jpg'
import Cat08 from './assets/Cat08.jpg'

export default class ExtraMoreAdditionalCats extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
                
                <div className='imageWrapper'>
                    <Photo source={Cat07}></Photo>
                    <Photo source={Cat08}></Photo>
                </div>
            
        )
    }
}