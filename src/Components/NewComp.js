import React, { Component } from 'react'
import white from "./white.jpg";
import blackbell from "./blackbell.jpg";

class NewComp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             message: "Subscribe to my channel",
             sub: "Subscribe",
             imageURL: white
        };
    }

    styles= {
        fontStyle: "italic",
        color: "purple"
      };
   Buttonchange= ()=> {
       this.setState({
           message: "Hit the bell to never miss an update",
           sub: "Subscribed"
       });
   };
   imageChange=()=>{
       this.setState({
            imageURL: blackbell,
            message: "Thank you! Happy learning."
       });
   };
      
    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>
                    {this.state.sub}</button>
                <p/>
                <img 
                style={{width: "30px", height: "30px"}} 
                src = {this.state.imageURL} 
                onClick={this.imageChange}
                alt=""/>
            </div>
        );
    }
}

export default NewComp;

