import React, {Component} from 'react'

export default class Slide extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="slide">{this.props.title}</div>
    )
  }
}
