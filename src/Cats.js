import React from 'react';
import './App.css';
import Photo from './Photo'
import cat1 from './assets/Cat01.jpg'
import cat2 from './assets/Cat02.jpeg'

export default class Cats extends React.Component {
    
    constructor(props) {
        super(props);

    }
    
    render() {
        
        return (
                
                <div className="imageWrapper">
                    <Photo source={cat1} />
                    <Photo source={cat2} />
                </div>
            
        )
    }
}