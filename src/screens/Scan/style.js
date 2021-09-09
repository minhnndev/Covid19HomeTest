import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../constants/theme';

const overlayColor = 'rgba(0,0,0,0.4)';

const rectDimensions = SIZES.width * 0.65;
const rectBorderWidth = SIZES.width * 0.008;
const rectBorderColor = 'rgba(255,255,255,0.8)';

const scanBarWidth = SIZES.width * 0.46;
const scanBarHeight = SIZES.width * 0.0025;
const scanBarColor = COLORS.lightGreen;

export const styles = StyleSheet.create({
  container: {flex: 1},
  txtDescScan: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    width: SIZES.width * 0.75,
  },
  customsQR: {flexDirection: 'row'},
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  topOverlay: {
    flex: 1,
    height: SIZES.width,
    width: SIZES.width,
    backgroundColor: overlayColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomOverlay: {
    flex: 1,
    height: SIZES.width,
    width: SIZES.width,
    backgroundColor: overlayColor,
    paddingBottom: SIZES.width * 0.25,
  },
  leftAndRightOverlay: {
    height: SIZES.width * 0.65,
    width: SIZES.width,
    backgroundColor: overlayColor,
  },
  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
  },
});
