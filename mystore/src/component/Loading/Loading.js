import React from 'react';
import LottieView from 'lottie-react-native';
function Loading() {
  return (
    <LottieView
      source={require('../../assets/9844-loading-40-paperplane.json')}
      autoPlay
    />
  );
}

export default Loading;
