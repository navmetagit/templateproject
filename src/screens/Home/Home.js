//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button ,ToastAndroid} from 'react-native';
import {ButtonComp,HeaderComp,ToastSimple,GlobalStyle} from '../../components';
import navigationStrings from '../../constants/navigationStrings';
import { useSelector, useDispatch } from 'react-redux'
import { SignOut } from '../../redux/authSlice'
import styles from './styles'
// create a component
const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const globalStyles = GlobalStyle();
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

            <View style={globalStyles.container}>
                  <HeaderComp text="Home" />
                <SafeAreaView>
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

export default Home;
