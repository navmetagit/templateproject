import { View, Text } from 'react-native'
import ButtonComp from '../../components/ButtonComp'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {SignIn} from '../../redux/authSlice'

export default function Login({navigation}) {
    const dispatch = useDispatch();
    // const { authData } = useSelector((state) => state.auth)

    const LoginHandle=()=>{
        // console.log('see vals');
        dispatch(SignIn('navpreet','123'))
    }
  return (
    <View>
      <ButtonComp
      btnText="Login to user"
      onPress={LoginHandle}
      />
    </View>
  )
}
