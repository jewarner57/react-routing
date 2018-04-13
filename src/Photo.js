import React, { Component } from 'react';
import './App.css';
import EnlargedImage from './EnlargedImage';

export default class Photo extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.imageClicked = this.imageClicked.bind(this);
        this.state = {enlargedImageSRC: {}, imageEnlarged: "hideImage"};
    }
    
    imageClicked() {
        
        if(this.state.enlargedImageSRC == this.props.source) {
            this.setState({enlargedImageSRC: {}, imageEnlarged: "hideImage"});
            console.log(this.state.imageEnlarged)
        }
        else {
            this.setState({enlargedImageSRC: this.props.source, imageEnlarged: "enlargedImage"});
        }
        
    }
    
    render() {
        
        return (
                
            <div>
            
                <a onClick = {this.imageClicked}><EnlargedImage imageStyle = {this.state.imageEnlarged} imageSRC={this.state.enlargedImageSRC}></EnlargedImage></a>
            
                <a onClick = {this.imageClicked} ><img src={this.props.source} className = 'image' /></a>
            
            </div>
            
        )
    }
}