import { View, Text,ImageBackground, TouchableOpacity } from 'react-native'
import ButtonComp from '../../components/ButtonComp'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {SignIn} from '../../redux/authSlice'
import styles from './styles'
import useGlobalStyles from '../../components/globalStyles'
export default function Login({navigation}) {
  const globalStyles = useGlobalStyles();
    const dispatch = useDispatch();
    // const { authData } = useSelector((state) => state.auth)
   
    const LoginHandle=()=>{
        // console.log('see vals');
        dispatch(SignIn('navpreet','123'))
    }



  return (
    <View style={{flex:1,}}>
      <ImageBackground 
      source={{uri:'https://www.shihoriobata.com/wp-content/uploads/2020/12/moon-and-clouds-aesthetic-background-phone2-576x1024.jpg'}}
      style={[globalStyles.bg,{}]}
      >
        <Text style={[globalStyles.heading]}>LOGIN</Text>

      <ButtonComp
      btnText="Login to user"
      onPress={LoginHandle}
      />
      </ImageBackground>
    </View>
  )
}
