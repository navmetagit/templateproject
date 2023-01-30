//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button ,ToastAndroid} from 'react-native';
import {ButtonComp,HeaderComp,ToastSimple,GlobalStyle} from '../../components';
import navigationStrings from '../../constants/navigationStrings';
import { useSelector, useDispatch } from 'react-redux'
import { SignOut } from '../../redux/authSlice'
import styles from './styles'

// for animations:
import Animated,{
    withTiming,
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withRepeat
} from 'react-native-reanimated'
// 
const SIZE = 100.0;

// because handlerotation is a builtin fucntion so we have to use worklet
const handleRotation = (progress) => {
    'worklet';
    return `${progress.value *2 * Math.PI}rad`
}

const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const globalStyles = GlobalStyle();
    const { authData } = useSelector((state) => state.auth)
    const { currentTheme } = useSelector((state) => state.theme)


    // for animations
    const [again,setAgain] = React.useState(false)
    const progress = useSharedValue(1)
    const scale = useSharedValue(2)

    const reanimatedStyle = useAnimatedStyle(()=>{
        return{
            opacity: progress.value,
            borderRadius:(progress.value*SIZE)/2,
            transform:[
                {scale:scale.value},
                {rotate:handleRotation(progress)}
            ]
        }
    },[])

    React.useEffect(() => {
        // if instead of 10 , we type -1 then its infinite time repeatition
    //   progress.value = withTiming(0.5)//,{duration:5000}
      progress.value = withRepeat(withSpring(0.5),10,true)//,{duration:5000}
      
      scale.value = withRepeat(withSpring(1),10,true)//,true
       //if true then reverse repeat
    }, [again])
    

    const goToScreen = () => {
        navigation.navigate(navigationStrings.PROFILE, {
            screen: navigationStrings.PROFILE,
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

                    <Animated.View
                    style={[
                        {marginTop:100,height:SIZE,width:SIZE,alignSelf:'center',backgroundColor:'blue',
                    },
                    reanimatedStyle
                    ]}>

                    </Animated.View>
                    {/* <ButtonComp
                        btnText="run again"
                        onPress={()=> setAgain(!again)}
                        // onPress={() => navigation.navigate('Foo')}
                    />*/}
                    <ButtonComp
                    style={{marginTop:100,}}
                        btnText="Product Details"
                        onPress={goToScreen}
                        // onPress={() => navigation.navigate('Foo')}
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
