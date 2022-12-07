//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button ,StatusBar} from 'react-native';
import ButtonComp from '../../components/ButtonComp';
import HeaderComp from '../../components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';
import { useSelector, useDispatch } from 'react-redux'
import { SignOut } from '../../redux/authSlice'
import { lightTheme, darkTheme } from '../../Theme/Theme'
import { ChangeTheme } from '../../redux/themeSlice';
import styled, { ThemeProvider } from 'styled-components'
import CommonStyles from '../../components/globalStyles'
// create a component
const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const { authData } = useSelector((state) => state.auth)
    const { currentTheme } = useSelector((state) => state.theme)

    const goToScreen = () => {
        navigation.navigate(navigationStrings.PROFILE, {
            screen: navigationStrings.EDIT_PROFILE,
            params: { user: 'jane' },
        })
    }
    const OutFn = () => {
        dispatch(SignOut())
    }
    return (
        // <ThemeProvider theme={currentTheme}>

            <View style={[styles.container
            // ,{backgroundColor:currentTheme=='light'?lightTheme.BACKGROUND_COLOR:darkTheme.BACKGROUND_COLOR}
            ]}>
                {/* <StatusBar backgroundColor="transparent" translucent  barStyle={currentTheme=='light'?lightTheme.STATUS_BAR_STYLE:darkTheme.STATUS_BAR_STYLE} /> */}
                {/* <StatusBar barStyle={currentTheme=='light'?lightTheme.STATUS_BAR_STYLE:darkTheme.STATUS_BAR_STYLE} translucent={true} /> */}
                <SafeAreaView style={{ marginHorizontal: 24 }}>
                    <HeaderComp text="Home" />
                    <ButtonComp
                        btnText="Product Details"
                        // onPress={goToScreen}
                        onPress={() => navigation.navigate('Foo')}
                    />
                    <ButtonComp
                        btnText="Sign Out"
                        onPress={OutFn}
                    />
                   
                    <Text>{!!authData && authData.name}</Text>
                </SafeAreaView>
            </View>
        // {/* </ThemeProvider> */}
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Home;
