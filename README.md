# UTube Player for React Native

## Before you use it

I just want to let you know, this is a demonstration of RN Native Module, written in Kotlin. You can learn more in my Article about it (link to be included later). This lib is not working on iOS.

## Installation

1. Get the package

`$ (yarn|npm) install react-native-utube-player`

2. Link it

`$ (yarn|npx) link react-native-utube-player`

3. Make sure that that your minSdk is 19 in

```groovy

// android/app/build.gradle

defaultConfig {
    // ...

    minSdkVersion 19

    // ...
}
```

4. Allow for app backup

```xml
// android/app/src/main/AndroidManifest.xml


<application
  // ...
  android:allowBackup="true"
  // ...
>
```

## Usage

```js
props = {
  width: number | string,
  height: number | string,
  videoId: string // i.e: yX8yrOAjfKM 
}
```

## Example

```js

import  UTubePlayerView  from 'react-native-utube-player';

const player = ({ videoId }) => (
  <View>
    <UTubePlayerView width="100%" height={200} videoId={videoId} />
  </View>
)

```