import React from 'react'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      slideNumber: 1
    }
    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
  }
  nextSlide(){
    if (this.state.slideNumber === 3){
      this.setState({
        slideNumber: this.state.slideNumber = 1
      })
    } else {
      this.setState({
        slideNumber: this.state.slideNumber+1
      })
    }
  }
  prevSlide(){
    if(this.state.slideNumber < 1){
      this.setState({
        slideNumber: this.state.slideNumber = 3
      })
    } else {
      this.setState({slideNumber: this.state.slideNumber-1})
    }
  }

  render(){
    return(
      <div className='carousel'>
        <style jsx>{`
          .carousel{
            max-height: 1500px;
            min-height: 50vh;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}</style>
        <PrevArrow prevSlide={this.prevSlide}/>
        {this.state.slideNumber === 1 ? <Slide1/> : null}
        {this.state.slideNumber === 2 ? <Slide2/> : null}
        {this.state.slideNumber === 3 ? <Slide3/> : null}
        <NextArrow nextSlide={this.nextSlide}/>
      </div>
    )
  }
}

export default Home
