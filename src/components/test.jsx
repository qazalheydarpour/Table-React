import React, { Component } from 'react';
class Test extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : props.name
        }
    }
    render() { 
        return <div>
            hello i am {this.state.name}
            <button onClick={ ()=> {
            this.setState({name : 'qazal'})
            }}>click to change name</button>
        </div>;
    }
}
 
export default Test;