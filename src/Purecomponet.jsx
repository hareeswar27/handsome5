import React, { PureComponent } from 'react'
import './App.css'

export default class Purecomponet extends PureComponent {
  constructor(){
    super();
    this.state ={
      Count : 0
    }
  }
  componentDidMount(){
    console.log("renderd")
  }
  componentDidUpdate(){
    console.log("Re-rendered")
  }
  render() {
    return (
      <>
     
<h1 className='text'> Counter : {this.state.Count}</h1>
<button className='but1' onClick={()=>{this.setState({Count:this.state.Count+1})}}>Increase(PureComponent)</button>
<br />
<button className='texxt' onClick={()=>{this.setState({Count:this.state.Count-1})}}>Decrease(PureComponent)</button>
<br />
      </>
    )
  }
}