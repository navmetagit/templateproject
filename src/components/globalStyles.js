import React from "react";
import {StyleSheet,Dimensions,Platform} from "react-native"

import { useTheme } from '@react-navigation/native';
import {scale,verticalScale,moderateScale,} from 'react-native-size-matters';
// when horizontally = moderatescale
// when vertical : verticalscale
// when font size : scale
const getGlobalStyles = ({colors,width ,height}) => StyleSheet.create({
  themeChanger: {

    backgroundColor: colors.nav,
  },
  bg:{
    height: height,//moderatescale(200)
    width: width,
    paddingTop:verticalScale(35)
  },
  text:{
    color: colors.text,
    fontFamily:'NexaRegular',
    fontSize:scale(13)
  },
  heading:{
    color: colors.text,
    fontFamily:'NexaBold',
    fontSize:scale(18)
    
  },
  span:{
    color: colors.text,
    fontFamily:'NexaLight',
    fontSize:scale(11)

  }
});

function useGlobalStyles() {
  const {width, height} = Dimensions.get('screen')
  const { colors } = useTheme();
  console.log('issue may be here');
  // We only want to recompute the stylesheet on changes in color.
  const styles = React.useMemo(() => getGlobalStyles({ colors,width ,height}), [colors]);

  return styles;
}

export default useGlobalStyles;

