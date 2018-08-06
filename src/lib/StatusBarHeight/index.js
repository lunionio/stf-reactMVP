import { Dimensions, Platform } from 'react-native';

const isIphoneX = () => {
    let windowDimension = Dimensions.get('window');
    const { height, width } = windowDimension;
  
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad       &&
      !Platform.isTVOS      &&
      (height === 812)
    );
}

  export default isIphoneX