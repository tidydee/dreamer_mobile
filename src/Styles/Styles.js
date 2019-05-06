import { Dimensions, DeviceInfo, Platform } from "react-native";
import { Header } from "react-navigation";

export const LANDSCAPE = "landscape";
export const PORTRAIT = "portrait";

export const getHeaderHeight = () => {
  let height;
  const orientation = getOrientation();
  height = getHeaderSafeAreaHeight();
  height += DeviceInfo.isIPhoneX_deprecated && orientation === PORTRAIT ? 24 : 0;

  return height;
};

// This does not include the new bar area in the iPhone X, so I use this when I need a custom headerTitle component
export const getHeaderSafeAreaHeight = () => {
  const orientation = getOrientation();
  if (Platform.OS === "ios" && orientation === LANDSCAPE && !Platform.isPad) {
    return 32;
  }
  return Header.HEIGHT;
};

export const getOrientation = () => {
  const { width, height } = Dimensions.get("window");
  return width > height ? LANDSCAPE : PORTRAIT;
};

export const dimensions = {
  FULL_HEIGHT: Dimensions.get('screen').height,
  FULL_WIDTH: Dimensions.get('screen').width,

  CARD_WIDTH: Dimensions.get('screen').width - 30,
  CARD_HEIGHT: 100,
}

export const colors = {
  PRIMARY: '#FF3366',
  SECONDARY: '#1C222E',
  BACKGROUND: '#142131',

  CARD: '#454D59',
  CARD_TITLE: '#F6F6F7',
  CARD_THEME: '#ECEDEE',
  CARD_INTRO: '#B4B8BC',
  CARD_DATE: '#B4B8BC',

  ITEM: '#222C3A',
  ITEM_ICON: '#B4B8BC',
  ITEM_PLACEHOLDER: '#F2F2F2',
  ITEM_HEADING: '#B4B8BC',
  ITEM_TEXT: '#F2F2F2',
  ITEM_BOTTOM_BORDER: '#4F5660',

  ITEM_MAIN_TITLE: '#F2F2F2',
  ITEM_MAIN_THEME_TEXT: '#DDDEE0',
  ITEM_MAIN_DATE_TIME: '#8A8C90',

  APP_NAV_ICON: '#FF3366',
  APP_HEADER_ICON: '#FF3366',
  APP_HEADER_TITLE: '#E2E2E4',
  BOTTOM_TAB_BAR: '#1C222E',
  HEADER_TAB_BAR: '#1C222E',

  SEARCH_SECTION: '#003333',
  SEARCH_PLACEHOLDER_TEXT: '#454D59',
  SEARCH_BOTTOM_BORDER: '#454D59',
  SEARCH_ICON: '#454D59',
  // SearchTopBorder(gradient): '#1A2A6C' - '#EE386E'
}

export const fonts = {

}

export const padding = {

}

export const margin = {

} 