export default {
  selectedBlue: '#F6F9FF',
  lightBlue: '#01B8E9',
  lightBlue2: '#92A4FC',
  blue: '#4D69FF',
  iconBlue: '#2891F7',
  buttonBlue: '#4488FF',
  iconBackground: '#4284fb',
  blueViolet: '#B8BAFC',
  darkBlue: '#3B4CA7',
  veryLightGray: '#ececec',
  lightGray: '#cfcfcf',
  gray: '#9B9B9B',
  darkGray: '#646472',
  darkGrayText: '#323240',
  bgGray: '#F1F1F1',
  inactiveGray: '#D8D8D8',
  spinnerGray: '#E0E0E0',
  violet: '#8F2CFA',
  lightViolet: '#DA2DFB',
  red: '#FF3B30',
  lightRed: '#FAF3FF',
  gold: '#F57B23',
  yellow: '#D2C52A',
  brightYellow: '#DFA941',
  suggestYellow: '#ede34c',
  quoteYellow: '#F5D00B',
  orange: '#F57B23',
  white: '#FFFFFF',
  green: '#0DBF21',
  darkGreen: '#3A7C41',
  black: '#000000',
  textShadow: '#00000055',
  viewedYellow: '#F1C40F',
  bgBlue: '#D2F2F6',

  safariAddressFieldGray: '#E7E8EA',
  safariHeaderHray: '#F7F7F7',

  modalHeaderColor: '#F0F0F0',
  modalHeaderBorder: '#D9D9D9',
  modalLightBorder: '#E4E4E4',
  modalHeaderText: '#a3a3a3',
  modalSearchText: '#cccccc',

  onboardingModalColor: '#5D79FF',
  previewBackground: '#efefef',

  transparent: '#00000000',

  sumupBlue: '#323E4E',
  headerBlue: '#3680F9',
  almostWhiteBlue: '#D1E2FD',
  selectorBlue: '#5A96FA',
  dropDownArrowUp: '#B8D2FC',
  selectedWhite: '#F8F8F8',
  footerActiveButtonBlue: '#498bfc',
  dotBlue: '#4488FF',

  sumupLightBlue: '#3388ff',
  onboardingButtonBlue: '#48f'
};
import React, {StyleSheet, Dimensions, Platform} from 'react-native';

const IPHONE4 = 480;
const IPHONE5 = 568;
const IPHONEX = 812;
export const dimension = () => Dimensions.get('window');

export function isIPHONE5() {
  return dimension().height === IPHONE5;
}

export function isIPHONE4() {
  return dimension().height === IPHONE4;
}

export function isIPHONE4or5() {
  return isIPHONE4() || isIPHONE5();
}

export function isIPHONEX() {
  return dimension().height === IPHONEX;
}

export function isIOS() {
  return Platform.OS === 'ios';
}

export function isAndroid() {
  return Platform.OS === 'android';
}


export const SAFE_AREA_TOP = isIPHONEX() ? 20 : 0;
export const HEADER_HEIGHT = isIOS() ? (isIPHONEX() ? 64 + SAFE_AREA_TOP : 64) : 54;
export const FOOTER_HEIGHT = 50;
export const BORDER_WIDTH = isIPHONE4or5() ? StyleSheet.hairlineWidth * 2 : StyleSheet.hairlineWidth * 3;
