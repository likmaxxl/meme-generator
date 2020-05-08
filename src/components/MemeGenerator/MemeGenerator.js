import React from 'react'
import PropTypes from 'prop-types'
import MemeHeader from './MemeHeader'
import MemeInputs from './MemeInputs'
import MemeRandomImages from './MemeRandomImages'

class MemeGenerator extends React.Component {
  constructor(props){
    super(props)
    this.state={
      topText:"",
      bottomText:"",
      backgrounds:[
        "https://images.unsplash.com/photo-1503192851959-c6da8ac80cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1540394057255-33ebb9501d21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1563803835717-ad490b168c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
        "https://images.unsplash.com/photo-1553983658-0d7afeb5c53f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        "https://images.unsplash.com/photo-1588351985412-7f1758f0bb8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1588804185322-d3665667a428?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1585671962215-473bcfa06caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1071&q=80",
        "https://images.unsplash.com/photo-1588696781771-3272cd78a625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      ],
      genBackground:["https://images.unsplash.com/photo-1588351985412-7f1758f0bb8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80"]
    }
  }

hendlerInputChange = (e) => {
  const { value, name } = e.target;
  this.setState({
    [name]: value,
  });
};


hendlerGeneratorImages = (e) => {
  e.preventDefault();
  const backgroundsLength = this.state.backgrounds.length;
  const randomNumber = Math.floor(Math.random() * backgroundsLength);

  this.setState({
    genBackground:this.state.backgrounds[randomNumber]
  });
};


  render () {
  const backgroundsAll = this.state.backgrounds.map((all) => {
  return all;
});

  return(
<>
  <div id="meme">
    <MemeHeader />

    <MemeInputs
      topText={this.state.topText}
      bottomText={this.state.bottomText}
      hendlerInputChange={this.hendlerInputChange}
      hendlerGeneratorImages={this.hendlerGeneratorImages}
    />

    <MemeRandomImages
      genBackground={this.state.genBackground}
      topText={this.state.topText}
      bottomText={this.state.bottomText}
    />
  </div>
</>


  )
  }
}

export default MemeGenerator;
