import React, {Component} from 'react'
import Section from './Main/Section'

export default class Contact extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    $('#contact').fullpage()
  }

  componentWillUnmount(){
    $('#contact').fullpage.destroy('all')
  }


  render(){
    return(
      <div id='contact'>
        <Section title="Contact Me" section_id="section0" />
      </div>

    )
  }
}
