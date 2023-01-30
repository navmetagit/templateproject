//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle,useAnimatedGestureHandler, useSharedValue, withSpring } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonComp from '../../components/ButtonComp';
import HeaderComp from '../../components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';

const SIZE = 100.0;


const Profile = ({ navigation }) => {

    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    const panGestureEvent = useAnimatedGestureHandler({
        onStart:(event,context)=> {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive:(event,context)=> {
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;
            // console.log(event.translationX);
        },
        onEnd:()=> {
            translateX.value = withSpring(0);
            translateY.value = withSpring(0);
        },
    })

    const rStyle = useAnimatedStyle(()=>{
        return{
            transform:[
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                }
            ]
        }
    })

    const goToScreen = () => {
        navigation.navigate(navigationStrings.EDIT_PROFILE)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ marginHorizontal: 24 }}>
                <PanGestureHandler onGestureEvent={panGestureEvent}>

                    <Animated.View style={[styles.square,rStyle]}>

                    </Animated.View>
                </PanGestureHandler>
                {/* <ButtonComp
                    btnText="Edit Profile"
                    onPress={goToScreen}
                /> */}

            </SafeAreaView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center',
        justifyContent: 'center'
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'rgba(0,0,256,0.5)',
        borderRadius: 20
    }
});


export default Profile;
