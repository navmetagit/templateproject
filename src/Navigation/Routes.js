import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import { ProductDetails } from "../screens";
import TabRoutes from './TabRoutes';
import CustomDrawer from '../components/CustomDrawer';
import AuthStack from '../Navigation/AuthStack';


import { useSelector, useDispatch } from 'react-redux'
const Drawer = createDrawerNavigator();


function Routes() {
    const { authData } = useSelector((state) => state.auth)
    return (

        <NavigationContainer>
            {console.log('auth stack ', authData)}
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