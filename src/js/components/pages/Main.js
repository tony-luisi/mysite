import React, {Component} from 'react'
import Blog from './Blog'
import Section from './Main/Section'

export default class Main extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    $('#general').fullpage({
      navigation: true,
			navigationPosition: 'right'
    })
  }

  componentWillUnmount(){
    $('#general').fullpage.destroy('all')
  }

  render(){


    return(

        <div id='general'>
          <Section title="Work Experience" section_id="section0"/>
          <Section title="Projects" section_id="section1"/>
          <Section title="History" section_id="section2"/>
        </div>

    )
  }
}
