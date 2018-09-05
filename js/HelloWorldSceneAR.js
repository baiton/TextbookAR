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

import Citadel from './components/Citadel'
import ClcCover from './components/ClcCover'
import Milestones from './components/Milestones'

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      introText: "Initializing AR...",
      lastFoundImage: "",
      lineDelay: 0,
      skittleText: "This is the formula used to calculate each skittle position in AR as the circle rotates!"
    };

    //Tracking Targets
    ViroARTrackingTargets.createTargets({
      "Timeline": {
        source: require('./res/pageIdentifiers/TimelinePage.png'),
        orientation: "Up",
        physicalWidth: 0.18 // real world width in meters
      }
    });
    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>

        <ViroText text={this.state.introText} scale={[.01, .01, .01]} position={[0, 0, -1]} style={styles.lookForCover}/>
        {/* <ClcCover /> */}
        {/* <Milestones /> */}
        <Citadel />

        {/* Having issues connecting materials to model */}
        {/* <ViroARImageMarker target={"ClcCover"}>
          <Viro3DObject
            position={[0, -1, -1]}
            rotation={[0, 0, 0]}
            scale={[.5, .5, .5]}
            source={require('./res/Boat/Row_Boat.obj')}
            resources={[require('./res/Boat/Row_Boat1.mtl'), require('./res/Boat/T_Boat_D.jpg')]}
            type="OBJ"/>
          <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1}/>
          <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, -1]} color="#aaaaaa" castsShadow={true}/>
        </ViroARImageMarker> */}

      </ViroARScene>
    );
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

module.exports = HelloWorldSceneAR;


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
