import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import UTubePlayerView from 'react-native-utube-player';

const AVAILABLE_VIDEOS = [
  'hQdp7rN6vUs',
  'wsX7ppKx13k',
  'dpw9EHDh2bM',
  'th9oAxkJyiE',
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ytVideoId: '',
    };
  }

  getRandomVideo = () => {
    const randomVideo =
      AVAILABLE_VIDEOS[Math.round(Math.random() * AVAILABLE_VIDEOS.length - 1)];
    if (randomVideo === this.state.ytVideoId) {
      this.getRandomVideo(); // try harder
      return;
    }

    this.setState({ ytVideoId: randomVideo });
  }


  render() {
    const { ytVideoId } = this.state;
    return (
      <View style={styles.container}>
        <UTubePlayerView width="100%" height={200} videoId={ytVideoId} />

        <TouchableOpacity
          style={styles.buttons}
          active={0.2}
          onPress={this.getRandomVideo}
        >
          <Text>Randomize video</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttons: {
    margin: 20,
    backgroundColor: '#F4D8CD',
    padding: 15,
    borderRadius: 10,
  },
});
