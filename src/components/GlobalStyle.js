import React from "react";
import {StyleSheet,Dimensions,Platform} from "react-native"

import { useTheme } from '@react-navigation/native';
import {scale,verticalScale,moderateScale,} from 'react-native-size-matters';
// when horizontally = moderatescale
// when vertical : verticalscale
// when font size : scale
const getGlobalStyles = ({colors,width ,height}) => StyleSheet.create({
  container:{
    flex:1,
    // paddingTop:verticalScale(35)
  },
  themeChanger: {
    justifyContent:'space-between',
    alignItems: 'center',
    alignSelf:'flex-end',
    flexDirection:'row',
    paddingHorizontal:moderateScale(10),
    
    width:moderateScale(150)
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

function GlobalStyle() {
  const {width, height} = Dimensions.get('screen')
  const { colors } = useTheme();
  console.log('issue may be here',new Date().toLocaleTimeString());
  // We only want to recompute the stylesheet on changes in color.
  const styles = React.useMemo(() => getGlobalStyles({ colors,width ,height}), [colors]);

  return styles;
}

export default GlobalStyle;

