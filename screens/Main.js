import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import Filter1 from '../components/Filter1';
import Filter2 from '../components/Filter2';
import Filter3 from '../components/Filter3';
import Filter4 from '../components/Filter4';
import Filter5 from '../components/Filter5';
import Filter6 from '../components/Filter6';
import Filter7 from '../components/Filter7';
import Filter8 from '../components/Filter8';
import Filter9 from '../components/Filter9';
import Filter10 from '../components/Filter10';
import Filter11 from '../components/Filter11';
import Filter12 from '../components/Filter12';

let data = {
  crown: [
    {
      id: '1',
      src: require('../assets/crown-pic1.png'),
    },
    {
      id: '2',
      src: require('../assets/crown-pic2.png'),
    },
    {
      id: '3',
      src: require('../assets/crown-pic3.png'),
    },
  ],
  flower: [
    {
      id: '4',
      src: require('../assets/flower-pic1.png'),
    },
    {
      id: '5',
      src: require('../assets/flower-pic2.png'),
    },
    {
      id: '6',
      src: require('../assets/flower-pic3.png'),
    },
  ],
  hair: [
    {
      id: '7',
      src: require('../assets/hair-pic1.png'),
    },
  ],
  hat: [
    {
      id: '8',
      src: require('../assets/hat-pic1.png'),
    },
    {
      id: '9',
      src: require('../assets/hat-pic2.png'),
    },
  ],
  others: [
    {
      id: '10',
      src: require('../assets/other-pic1.png'),
    },
    {
      id: '11',
      src: require('../assets/other-pic2.png'),
    },
    {
      id: '12',
      src: require('../assets/other-pic3.png'),
    },
  ],
};

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      faces: [],
      current_filter: '1',
      selected: 'crown',
    };

    this.onFacesDetected = this.onFacesDetected.bind(this);
  }

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onFacesDetected({ faces }) {
    this.setState({ faces: faces });
  }

  render() {
    var { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    }
    if (hasCameraPermission === false) {
      return (
        <View style={styles.container}>
          <Text>No access to camera</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.upperContainer}>
          <Image
            source={require('../assets/appIcon.png')}
            style={styles.appIcon}
          />
          <Text style={styles.appName}>Look Me....</Text>
        </View>
        <View style={styles.middleContainer}>
          <Camera
            style={{ flex: 1 }}
            type={Camera.Constants.Type.front}
            faceDetectorSettings={{
              mode: FaceDetector.FaceDetectorMode.fast,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
            }}
            onFacesDetected={this.onFacesDetected}
            onFacesDetectionError={this.onFacesDetectionError}
          />
          {this.state.faces.map((face) => {
            if (this.state.current_filter === '1') {
              return <Filter1 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === '2') {
              return <Filter2 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === '3') {
              return <Filter3 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === '4') {
              return <Filter4 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === '5') {
              return <Filter5 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === '6') {
              return <Filter6 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === '7') {
              return <Filter7 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === '8') {
              return <Filter8 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === '9') {
              return <Filter9 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === '10') {
              return <Filter10 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === '11') {
              return <Filter11 key={face.faceID} face={face} />;
            } else if (this.state.current_filter === '12') {
              return <Filter12 key={face.faceID} face={face} />;
            }
          })}
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={
                this.state.selected == 'crown'
                  ? styles.categoryBoxSelected
                  : styles.categoryBox
              }
              onPress={() => {
                this.setState({ selected: `crown` });
              }}>
              <Text>Crown</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.selected == 'flower'
                  ? styles.categoryBoxSelected
                  : styles.categoryBox
              }
              onPress={() => {
                this.setState({ selected: `flower` });
              }}>
              <Text>Flower</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.selected == 'hair'
                  ? styles.categoryBoxSelected
                  : styles.categoryBox
              }
              onPress={() => {
                this.setState({ selected: `hair` });
              }}>
              <Text>Hair</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.selected == 'hat'
                  ? styles.categoryBoxSelected
                  : styles.categoryBox
              }
              onPress={() => {
                this.setState({ selected: `hat` });
              }}>
              <Text>Hat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.selected == 'others'
                  ? styles.categoryBoxSelected
                  : styles.categoryBox
              }
              onPress={() => {
                this.setState({ selected: `others` });
              }}>
              <Text>Others</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lowerBottomContainer}>
            <ScrollView
              style={{ flexDirection: 'row', flex: 0.6 }}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {data[this.state.selected].map((filter_data) => {
                return (
                  <TouchableOpacity
                    key={`filter-button-${filter_data.id}`}
                    style={[
                      styles.filterButton,
                      {
                        borderColor:
                          this.state.current_filter === filter_data.id
                            ? '#FFA384'
                            : '#FFFF',
                      },
                    ]}
                    onPress={() =>
                      this.setState({
                        current_filter: `${filter_data.id}`,
                      })
                    }>
                    <Image
                      source={filter_data.src}
                      style={styles.filterImage}
                    />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F2F8',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  upperContainer: {
    flex: 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7F2F8',
    flexDirection: 'row',
  },
  appIcon: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(25),
    borderWidth: 2,
    borderColor: '#FFA384',
    marginRight: RFValue(10),
  },
  appName: {
    color: '#FFA384',
    fontSize: RFValue(25),
    fontWeight: '800',
    fontStyle: 'italic',
  },
  middleContainer: { flex: 0.67 },
  lowerContainer: {
    flex: 0.2,
    backgroundColor: '#E7F2F8',
  },
  lowerTopContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerBottomContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFE7BC',
  },
  categoryContainer: {
		flex: 0.4,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: RFValue(10),
	},
  filterButton: {
    height: RFValue(70),
    width: RFValue(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(35),
    backgroundColor: '#E7F2F8',
    borderWidth: 5,
    marginRight: RFValue(20),
    marginBottom: RFValue(10),
  },
  filterImage: {
    height: '60%',
    width: '60%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  categoryBox: {
    flex: 0.2,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: 'white',
    width: '100%',
    padding: RFValue(3),
    margin: 1,
    alignItems: 'center',
  },
  categoryBoxSelected: {
    flex: 0.2,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#efb141',
    width: '100%',
    padding: RFValue(3),
    margin: 1,
    alignItems: 'center',
  },
});
