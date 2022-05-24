import React from 'react';
import LottieView from 'lottie-react-native';
function Loading() {
  return (
    <LottieView
      source={require('../../assets/99276-loading-utensils.json')}
      autoPlay
    />
  );
}

export default Loading;
