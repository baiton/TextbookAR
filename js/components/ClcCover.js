'use strict';

import React, {Component} from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroVideo,
  ViroImage,
  ViroMaterials,
  Viro3DObject,
  ViroBox,
  ViroAmbientLight,
  ViroSpotLight,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  ViroAnimations,
  ViroNode
} from 'react-viro';

class ClcCover extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      counter: 0,
      activeMarker: -1,
      introText: "Initializing AR...",
      lastFoundImage: "",
      lineDelay: 0,
      dialog: [
        "This is the formula used to calculate each skittle's position in AR as the circle rotates!",
        "0.25 is our radius in meters.",
        "21.2 is what we get when 360 degress is divided by the 17 skittles",
        "Finally, we have where these calculations give us the x and z values.",
        "This is based on the right-hand coordinate system common in OpenGL where negative z values move forward."
      ],
      spinSpeed: 21.2,
    };

    //Tracking Targets
    ViroARTrackingTargets.createTargets({
      "ClcCover": {
        source: require('../res/pageIdentifiers/clcCover.png'),
        orientation: "Up",
        physicalWidth: 0.18 // real world width in meters
      }
    });
    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    const { dialog, counter } = this.state;
    const text = dialog[counter];
    return (
        <ViroARImageMarker target={"ClcCover"}>
          {/* Needs animation to lift upright */}
          <ViroVideo height={.28} width={.23} position={[0, .15, -0.2]} rotation={[0, 0, 0]} source={require('../res/TextbookAR.mov')} loop={false} materials={["chromaKeyFilteredVideo"]}/>
          {/* Insert series of bubbles here */}
        <ViroNode position={[0,0,0]} animation={{name: 'dissolveIn', delay:1000, run:true, loop:false}}>
          <ViroNode position={[0,0,0]} animation={{name:'rotatePositive', run:true, loop:true}} >
            <ViroImage height={.05} width={.05} position={[0.25, 0, 0]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Variables1.png")} source={require("../res/BubblesSm/Variables1.png")}/>
            <ViroImage height={.05} width={.05} position={[0.233, 0, 0.090]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Operators3.png")} source={require("../res/BubblesSm/Operators3.png")}/>
            <ViroImage height={.05} width={.05} position={[0.185, 0, 0.169]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Units2.png")} source={require("../res/BubblesSm/Units2.png")}/>
            <ViroImage height={.05} width={.05} position={[0.111, 0, 0.224]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Operators4.png")} source={require("../res/BubblesSm/Operators4.png")}/>
            <ViroImage height={.05} width={.05} position={[0.023, 0, 0.249]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Constants2.png")} source={require("../res/BubblesSm/Constants2.png")}/>
            <ViroImage height={.05} width={.05} position={[-0.069, 0, 0.240]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Variables2.png")} source={require("../res/BubblesSm/Variables2.png")}/>
            <ViroImage height={.05} width={.05} position={[-0.151, 0, 0.199]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Operators5.png")} source={require("../res/BubblesSm/Operators5.png")}/>
            <ViroImage height={.05} width={.05} position={[-0.213, 0, 0.131]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Units3.png")} source={require("../res/BubblesSm/Units3.png")}/>
            <ViroImage height={.05} width={.05} position={[-0.246, 0, 0.045]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Variables3.png")} source={require("../res/BubblesSm/Variables3.png")}/>
            <ViroImage height={.05} width={.05} position={[-0.246, 0, -0.047]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Operators6.png")} source={require("../res/BubblesSm/Operators6.png")}/>
            <ViroImage height={.05} width={.05} position={[-0.212, 0, -0.132]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Constants3.png")} source={require("../res/BubblesSm/Constants3.png")}/>
            <ViroImage height={.05} width={.05} position={[-0.150, 0, -0.200]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Units4.png")} source={require("../res/BubblesSm/Units4.png")}/>
            <ViroImage height={.05} width={.05} position={[-0.067, 0, -0.241]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Variables4.png")} source={require("../res/BubblesSm/Variables4.png")}/>
            <ViroImage height={.05} width={.05} position={[0.024, 0, -0.249]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Operators1.png")} source={require("../res/BubblesSm/Operators1.png")}/>
            <ViroImage height={.05} width={.05} position={[0.113, 0, -0.223]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Units1.png")} source={require("../res/BubblesSm/Units1.png")}/>
            <ViroImage height={.05} width={.05} position={[0.186, 0, -0.167]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Constants1.png")} source={require("../res/BubblesSm/Constants1.png")}/>
            <ViroImage height={.05} width={.05} position={[0.234, 0, -0.089]} animation={{name:'rotateNegative', run:true, loop:true}} rotation={[-90, 0, 0]} placeholderSource={require("../res/BubblesSm/Operators2.png")} source={require("../res/BubblesSm/Operators2.png")}/>
          </ViroNode>
        </ViroNode>
        <ViroNode position={[-.75,0.1,.25]} transformBehaviors="billboardy">
          <ViroText text={text} scale={[.01, .01, .01]} position={[0,.25,0]} style={styles.lookForCover}/>
          <ViroImage height={.05} width={.2} position={[0.35,.15,0]} onClick={this.handleClick} placeholderSource={require("../res/BubblesSm/Clickable2.png")} source={require("../res/BubblesSm/Clickable2.png")}/>
          <ViroImage height={.05} width={.4} position={[0,.05,0]} animation={{name:'floatUpAndDown', run:true, loop:true}} rotation={[0, 0, 0]} placeholderSource={require("../res/BubblesSm/skittleCircle1.png")} source={require("../res/BubblesSm/skittleCircle1.png")}/>
          <ViroImage height={.05} width={.4} position={[0,-.05,0]} animation={{name:'floatUpAndDown', run:true, loop:true}} rotation={[0, 0, 0]} placeholderSource={require("../res/BubblesSm/skittleCircle2.png")} source={require("../res/BubblesSm/skittleCircle2.png")}/>
          <ViroImage height={.05} width={.15} position={[0.4,.05,0]} animation={{name:'floatUpAndDown', run:true, loop:true}} rotation={[0, 0, 0]} placeholderSource={require("../res/BubblesSm/Terms3.png")} source={require("../res/BubblesSm/Terms3.png")}/>
          <ViroImage height={.05} width={.15} position={[0.4,-.05,0]} animation={{name:'floatUpAndDown', run:true, loop:true}} rotation={[0, 0, 0]} placeholderSource={require("../res/BubblesSm/Terms1.png")} source={require("../res/BubblesSm/Terms1.png")}/>
          <ViroImage height={.05} width={.05} position={[0.3,.05,0]} animation={{name:'floatUpAndDown', run:true, loop:true}} rotation={[0, 0, 0]} placeholderSource={require("../res/BubblesSm/Operators2.png")} source={require("../res/BubblesSm/Operators2.png")}/>
          <ViroImage height={.05} width={.05} position={[0.3,-.05,0]} animation={{name:'floatUpAndDown', run:true, loop:true}} rotation={[0, 0, 0]} placeholderSource={require("../res/BubblesSm/Operators2.png")} source={require("../res/BubblesSm/Operators2.png")}/>
        </ViroNode>
        {/* This is where the speed change options will render */}
        {/* <ViroNode position={[0.75,0.1,0.25]} transformBehaviors="billboardy">
          <ViroImage height={.05} width={.2} position={[0,0,0]} onClick={this.handleClick} placeholderSource={require("../res/BubblesSm/Adjustables1.png")} source={require("../res/BubblesSm/Adjustables1.png")}/>

          <ViroImage height={.05} width={.05} position={[-0.075,0,0.01]} rotation={[0, 0, 0]} placeholderSource={require("../res/BubblesSm/up.png")} source={require("../res/BubblesSm/up.png")}/>
          <ViroImage height={.05} width={.05} position={[0.075,0,0.01]} rotation={[0, 0, 0]} placeholderSource={require("../res/BubblesSm/down.png")} source={require("../res/BubblesSm/down.png")}/>
        </ViroNode> */}
        </ViroARImageMarker>
    );
  }

//    This is where I create the function to handle speeding up and down.
  // handleSpeedUp = (e) => {
  //   let { spinSpeed } = this.state;
  //   let newSpeed = (spinSpeed +=21.2)
  //   this.setState({
  //     spinSpeed: newSpeed
  //   })
  // }

  handleClick = (e) => {
    const { dialog, counter } = this.state;
    let newCounter = (counter === (dialog.length -1)) ? 0 : counter +1
    this.setState({
      counter: newCounter
    })
  }

  getCallbackFunction(index){
    return ()=> {
      this.setState({activeMarker: index})
    }
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({introText: "Find the Calculus Cover."});
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroAnimations.registerAnimations({
  floatUp: {
    properties:{
      positionY: "+=.01"},
    easing: "EaseInEaseOut",
    duration: 700},
  floatDown: {
    properties:{
      positionY: "-=.01"},
    easing: "EaseInEaseOut",
    duration: 800},
  floatUpAndDown: [["floatUp", "floatDown"]], //array of animated movement arrays

  rotatePositive: {
    properties: {
      rotateY: "+=21.2"},
    duration: 1000},

    rotateNegative: {
      properties: {
        rotateY: "-=21.2"},
      duration: 1000},

      standUp: {
        properties: {
          rotateX: "+90"},
        duration: 1000},

        dissolveIn: {
          properties: {
            opacity: 1},
            easing: "EaseInEaseOut",
          duration: 2000},

        dissolveOut: {
          properties: {
            opacity: 0},
          duration:2000},



});

ViroMaterials.createMaterials({
  chromaKeyFilteredVideo: {
    chromaKeyFilteringColor: "#00FF00"
  }
});

var styles = StyleSheet.create({
  lookForCover: {
    fontFamily: 'Arial',
    fontSize: 300,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 37,
    height: 20
  },
  topToolbar: {
    paddingTop: 30,
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 25
  }
});

module.exports = ClcCover;


// This is a suggestion from Viro about how to roll image 1 image marker
// constructor() {
//   this.state = {
//     activeMarker : -1 // -1 means no active markers
//   }
//
//   this.getCallbackFunction = this.getCallbackFunction.bind(this);
// }
//
// render() {
//   return (
//     <ViroARScene>
//       <ViroARImageMarker onAnchorFound={this.getCallbackFunction(0)} />
//       <ViroARImageMarker onAnchorFound={this.getCallbackFunction(1)} />
//       <ViroARImageMarker onAnchorFound={this.getCallbackFunction(2)} />
//     </ViroARScene>
//   )
// }
//
// getCallbackFunction(index) {
//   return ()=>{
//     this.setState({activeMarker : index})
//   }
// }
