import React from 'react';

import CustomDrawer from '../components/CustomDrawer';
import navigationStrings from '../constants/navigationStrings';

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
   
    return (<Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomDrawer{...props}/>}
    >
        <Drawer.Screen component={TabRoutes} name={navigationStrings.HOME} />
        <Drawer.Screen component={ProductDetails} name={navigationStrings.PRODUCT_DETAILS} />

    </Drawer.Navigator>)

}

export default DrawerRoutes;