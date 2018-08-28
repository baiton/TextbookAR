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

class Milestones extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      lastFoundImage: "",
      lineDelay: 0,
      skittleText: "This is the formula used to calculate each skittle position in AR as the circle rotates!"
    };

    //Tracking Targets
    ViroARTrackingTargets.createTargets({
      "Milestones": {
        source: require('../res/pageIdentifiers/MilestonesPage.png'),
        orientation: "Up",
        physicalWidth: 0.18 // real world width in meters
      }
    });
    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARImageMarker target={"Milestones"}>
        <Viro3DObject position={[0, -1, -1]} scale={[.01, .01, .01]} source={require('../res/EmpireStateB/EmpireState_lp.obj')} resources={[require('../res/EmpireStateB/EmpireState_lp.mtl'), require('../res/EmpireStateB/EmpireState_d.png')]} type="OBJ"/>
        <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1}/>
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#aaaaaa" castsShadow={true}/>
        <ViroPortalScene passable={true}>
          <ViroPortal position={[-1, 0, -.5]} scale={[.5, .5, .5]}>
            <Viro3DObject source={require('../res/portal_wood_frame/portal_wood_frame.vrx')} resources={[require('../res/portal_wood_frame/portal_wood_frame_diffuse.png'), require('../res/portal_wood_frame/portal_wood_frame_normal.png'), require('../res/portal_wood_frame/portal_wood_frame_specular.png')]} type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require("../res/360_grid.png")}/>
          <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1}/>
          <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#aaaaaa" castsShadow={true}/>
          <Viro3DObject position={[0, -1, -30]} scale={[1.5, 1.5, 1.5]} source={require('../res/EmpireStateB/EmpireState_lp.obj')} resources={[require('../res/EmpireStateB/EmpireState_lp.mtl'), require('../res/EmpireStateB/EmpireState_d.png')]} type="OBJ"/>
        </ViroPortalScene>
      </ViroARImageMarker>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({text: "Find the Calculus Cover."});
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

module.exports = Milestones;


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
