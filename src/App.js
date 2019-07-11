import React, { Component } from 'react'
import axios from 'axios';
import Out from './components/out';
export default class App extends Component {
  constructor(props){
  super(props);  
  this.state = {
    text: ''
  }
}

  componentDidMount(){
    this.getText();
  }

  getText = (paras, html) => {
    let format = html ? 'html' : 'text';
    axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${format}`)
    .then((res) => {
      this.setState({text: res.data}, function(){
        console.log(this.state);
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <Out getText={this.getText} setText={this.state.text} />
      </div>
    )
  }
}
