import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import { ProductDetails } from "../screens";
import TabRoutes from './TabRoutes';
import CustomDrawer from '../components/CustomDrawer';
import AuthStack from '../Navigation/AuthStack';
import {useColorScheme} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {ChangeTheme} from '../redux/themeSlice'
const Drawer = createDrawerNavigator();


const withTheme = Component =>({...props})=>{
    const { theme } = useSelector((state) => state.theme)
    return <Component theme={withTheme} {...props}/>
}
function Routes() {
    const colorScheme = useColorScheme()
    const dispatch = useDispatch()
     const ThemedApp = withTheme(Routes)
    React.useEffect(()=>{
      dispatch(ChangeTheme(colorScheme))
    },[colorScheme])
    
    const { authData } = useSelector((state) => state.auth)
    // const { currentTheme } = useSelector((state) => state.theme)
    return (

        <NavigationContainer>
            {/* {console.log('auth stack ', authData , currentTheme)} */}
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