import React, {Component} from 'react'
import Slide from './Section/Slide'

export default class Section extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
        <div className='section' id={this.props.section_id}>
          <h1>{this.props.title}</h1>
          {/*<Slide title="slide1" />*/}
          {/*<Slide title="slide2" />*/}
        </div>
    )
  }
}
