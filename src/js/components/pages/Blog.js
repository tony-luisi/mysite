import React, {Component} from 'react'
import Post from './Blog/Post'
import Section from './Main/Section'

export default class Blog extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    $('#blog').fullpage()
  }

  componentWillUnmount(){
    $('#blog').fullpage.destroy('all')
  }


  render(){
    return(
      <div id='blog'>
        <Section title="Post" section_id="section0" />
        <Section title="Post 2" section_id="section1"/>
        <Section title="Post 3" section_id="section2"/>
      </div>

    )
  }
}
