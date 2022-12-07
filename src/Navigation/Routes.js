import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,DefaultTheme, DarkTheme } from '@react-navigation/native';
import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import { ProductDetails } from "../screens";
import TabRoutes from './TabRoutes';
import CustomDrawer from '../components/CustomDrawer';
import AuthStack from './AuthStack';
import {useColorScheme,View,StatusBar} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {ChangeTheme} from '../redux/themeSlice'

const Drawer = createDrawerNavigator();

function Routes() {
  const dispatch = useDispatch()
    const colorScheme = useColorScheme()
    const { authData } = useSelector((state) => state.auth)
    const { currentTheme } = useSelector((state) => state.theme)
  
    React.useEffect(()=>{
        console.log('color scehem',colorScheme);
      dispatch(ChangeTheme(colorScheme))
    },[colorScheme])
    
    // const MyTheme = {
    //   ...DefaultTheme,
    //   colors: {
    //     ...DefaultTheme.colors,
    //     primary: 'rgb(255, 45, 85)',
    //   },
    // };


const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
      icon: 'rgb(33, 194, 77)',
      nav:'red'
    },
  };
  const MyThemeDark = {
    dark: false,
    colors: {
      primary: 'rgb(0, 210, 170)',
      background: 'rgb(13, 13, 170)',
      card: 'rgb(0, 0, 0)',
      text: 'rgb(227, 227, 13)',
      border: 'rgb(56, 56, 51)',
      notification: 'rgb(0, 186, 197)',
      icon: 'rgb(222, 61, 178)',
      nav:'green'
    },
  };

    return (
        <NavigationContainer theme={currentTheme === 'dark' ? MyThemeDark : MyTheme}>
             <StatusBar translucent barStyle={currentTheme=='light'?'dark-content':'dark-content'}
       backgroundColor={'transparent'} />
      
            {
                !!authData ?
                <Drawer.Navigator
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <CustomDrawer{...props} />}
                >
                        <Drawer.Screen component={TabRoutes} name={navigationStrings.HOME} />
                        <Drawer.Screen component={ProductDetails} name={navigationStrings.PRODUCT_DETAILS} />

                    </Drawer.Navigator>
                    :
                    AuthStack()
                }
        </NavigationContainer>


    )
}

export default Routes