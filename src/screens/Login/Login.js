import { View, Text, ImageBackground, StyleSheet,
  KeyboardAvoidingView,Pressable,Dimensions } from 'react-native'
import ButtonComp from '../../components/ButtonComp'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SignIn } from '../../redux/authSlice'
import styles from './styles'
import Svg,{Image,Ellipse,ClipPath,} from 'react-native-svg'
import Animated,{useSharedValue,withTiming,
  withDelay,runOnJS,withSequence, withSpring
  ,useAnimatedStyle,interpolate} from 'react-native-reanimated'
import { GlobalStyle } from '../../components'
import { TextInput } from 'react-native-gesture-handler'
export default function Login({ navigation }) {
  const {height, width} = Dimensions.get('window')
  const imagePosition = useSharedValue(1)
  const formButtonScale = useSharedValue(1)
  const[isRegistering,setIsRegistering] = React.useState(false)
  const imageAnimatedStyle = useAnimatedStyle(()=>{
  const interpolation = interpolate(imagePosition.value,[0,1],[-height/2,0])
    return {
      transform:[{translateY:withTiming(interpolation,{duration:1000})}]
    }
  })
  const globalStyles = GlobalStyle();
  const dispatch = useDispatch();
  
  const LoginHandle = () => {
    if(isRegistering){
      //runOnJS for gesture handler specifically
      runOnJS(setIsRegistering(false))
    }
    imagePosition.value=0
    // console.log('see vals');
    dispatch(SignIn('navpreet', '123'))
  }
  const RegisterHandle = () => {
    if(!isRegistering){

      runOnJS(setIsRegistering(true))
    }
    // imagePosition.value=1 //for closing
    imagePosition.value=0
    // console.log('see vals');
    // dispatch(SignIn('navpreet', '123'))
  }
 const formButtonAnimatedStyle = useAnimatedStyle(()=>{
  return{
    transform: [{scale: formButtonScale.value}]
  }
 })
  const buttonAnimatedStyle = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value,[0,1],[250,0])
    return{
      opacity:withTiming(imagePosition.value,{duration:500}),
      transform:[{translateY:withTiming(interpolation,{duration:500})}]
    }
  })

  const closeButtonContainerStyle= useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value,[0,1],[180,360])
    return{
      opacity:withTiming(imagePosition.value ===1? 0:1,{duration:800}),
      transform: [{rotate:withTiming(interpolation+"deg",{duration:1000})}]

    }
  })

  const formAnimatedStyle = useAnimatedStyle(()=>{
    return{
      opacity:imagePosition.value===0 
                ? 
                withDelay(400,withTiming(1,{duration:800}))
                :   
                withTiming(0,{duration:300})
    }
  })

  return(
    <View style={styles.container}>
     

     
    <Animated.View style={[StyleSheet.absoluteFill,imageAnimatedStyle]}>
      <Svg height={height+100} width={width}>
        <ClipPath id="clipPathId">
          <Ellipse cx={width/2} rx={height} ry={height+100}/>
        </ClipPath>
        <Image 
        width={width+100}
        height={height+100}
        preserveAspectRatio={'xMidYMid slice'}
        clipPath="url(#clipPathId)"
        href={require('../../assets/images/login-background.jpg')} />
      
      
      </Svg>
      <Animated.View style={[styles.closeButtonContainer,closeButtonContainerStyle]}>
        <Text onPress={()=> imagePosition.value=1} style={styles.x}>X</Text>
      </Animated.View>
      </Animated.View>
      <View style={styles.btnContainer}>
        <Animated.View style={buttonAnimatedStyle}>

        <Pressable style={styles.button} onPress={LoginHandle}>
          <Text style={styles.btntext}>
            LOG IN
          </Text>
        </Pressable>
        </Animated.View>
        <Animated.View style={buttonAnimatedStyle}>
        <Pressable style={styles.button} onPress={RegisterHandle}>
          <Text style={styles.btntext}>
            REGISTER
          </Text>
        </Pressable>
        </Animated.View>
      

        <Animated.View style={[styles.formInputContainer,formAnimatedStyle]}>
          <TextInput placeholder="Email" placeholderTextColor={"black"} style={styles.textinput}/>
          {
            isRegistering &&
            (<TextInput placeholder="Full Name" placeholderTextColor={"black"} style={styles.textinput}/>)}
          <TextInput placeholder="Password" placeholderTextColor={"black"} style={styles.textinput}
          // onFocus={()=>  imagePosition.value=-0.5}
          />
       <Pressable onPress={()=> formButtonScale.value = withSequence(withSpring(1.3),withSpring(1))}>
{/*  withSequence(withSpring(1.3),withSpring(1),withDelay(100,withSpring(1)) */}
        <Animated.View style={[styles.formButton,formButtonAnimatedStyle]}>
          <Text style={styles.btntext}>{isRegistering?'REGISTER':'LOG IN'}</Text>
        </Animated.View>
       </Pressable>
        
        </Animated.View>
        
      </View>
      
    </View>
  )

}
// return (
//   <SafeAreaView style={{ flex: 1, }}>
//     <ImageBackground
//       source={{ uri: 'https://www.shihoriobata.com/wp-content/uploads/2020/12/moon-and-clouds-aesthetic-background-phone2-576x1024.jpg' }}
//       style={[globalStyles.bg, {}]}
//     >
//       <Text style={[globalStyles.heading]}>LOGIN</Text>
     
//       <View style={{justifyContent: 'flex-end',}}>
//       <ButtonComp
//         btnText="Login to user"
//         onPress={LoginHandle}
//       />
//       </View>
//     </ImageBackground>
//   </SafeAreaView>
// )
