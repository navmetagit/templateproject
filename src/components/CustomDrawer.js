import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
  import {Image} from 'react-native'
import navigationStrings from '../constants/navigationStrings'
import imagePath from '../constants/imagePath'
  function CustomDrawer(props) {
    const {navigation} = props;
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        <DrawerItem
        label={'Home'}
        onPress={()=>navigation.navigate(navigationStrings.HOME)}
        icon={()=><Image 
            source={imagePath.icHome}
        />}
        labelStyle={{color: 'red',fontWeight: '300'}}
        />
        <DrawerItem
        label={'Profile'}
        onPress={()=>navigation.navigate(navigationStrings.PROFILE)}
        icon={()=><Image 
            source={imagePath.icProfile}
            />}
        labelStyle={{color: 'red',fontWeight: '300'}}
        />
      </DrawerContentScrollView>
    );
  }
  export default CustomDrawer;