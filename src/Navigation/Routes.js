import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import { ProductDetails } from "../screens";
import TabRoutes from './TabRoutes';
import CustomDrawer from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();


function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <CustomDrawer{...props} />}
           >
                <Drawer.Screen component={TabRoutes} name={navigationStrings.HOME} />
                <Drawer.Screen component={ProductDetails} name={navigationStrings.PRODUCT_DETAILS} />
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Routes