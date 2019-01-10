import React from 'react';
import { requireNativeComponent, Platform, View } from 'react-native';

const UTComponent = Platform.select({
  ios: View,
  android: requireNativeComponent('RNUtubeView'),
});

export default class UTubePlayerView extends React.Component {
  render() {
    const { width = '100%', height = 200 } = this.props;
    return <UTComponent {...this.props} style={{ width, height }} />;
  }
}
