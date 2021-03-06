import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Header extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="header">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="blog">Blog</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
    )
  }
}
