import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import { GlobalStyle, ToastSimple } from '../components'
import { Image, Switch, View, Text, TouchableOpacity } from 'react-native'
import navigationStrings from '../constants/navigationStrings'
import imagePath from '../constants/imagePath'
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { ChangeTheme } from '../redux/themeSlice'
function CustomDrawer(props) {
  const { navigation, ThemeRevert } = props;
  const { colors } = useTheme();
  const dispatch = useDispatch()
  const globalStyles = GlobalStyle();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const { currentTheme } = useSelector((state) => state.theme)

  function toggleSwitch() {
    console.log('changing theme ', currentTheme);
    setIsEnabled(previousState => !previousState);

    if (currentTheme == 'light') {
      if (isEnabled) {
        ToastSimple('Already Light Theme..', 'short')
        return

      }
      dispatch(ChangeTheme('dark'))
    }
    else {
      if (!isEnabled) {
        ToastSimple('Already Dark Theme..', 'short')
        return

      }

      dispatch(ChangeTheme('light'))
    }
  }

  return (

    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <DrawerItem
        label={'Home'}
        onPress={() => navigation.navigate(navigationStrings.HOME)}
        icon={() => <Image
          source={imagePath.icHome} style={{ tintColor: colors.icon }}
        />}
        labelStyle={{ color: colors.text, fontWeight: '300' }}
      />
      <DrawerItem
        label={'Profile'}
        onPress={() => navigation.navigate(navigationStrings.PROFILE)}
        icon={() => <Image
          source={imagePath.icProfile} style={{ tintColor: colors.icon }}
        />}
        labelStyle={{ color: colors.text, fontWeight: '300' }}
      />
      <View style={[globalStyles.themeChanger]}>
        <Text>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

    </DrawerContentScrollView>

  );
}
export default CustomDrawer;

