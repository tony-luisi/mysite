import React, {Component} from 'react'
import {Link} from 'react-router'
import Header from './Header'

export default class Layout extends Component {
  constructor(props){
    super(props)
  }
  //
  // componentDidMount(){
  //   console.log('mounted layout')
  //   $('#fullpage').fullpage()
  // }

  render(){
    return(
      <div>

        <Header />
        {this.props.children}
      </div>
    )
  }
}
