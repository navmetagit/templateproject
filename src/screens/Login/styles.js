import React from "react";
import {StyleSheet,Dimensions} from 'react-native';
const{width,height} = Dimensions.get('window')
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor:'rgba(123,104,238,0.8)',
        height:55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:35,
        marginHorizontal:20,
        marginVertical:10,
        borderColor:'white',
        borderWidth:1
    },
    btntext:{
        fontSize:20,
        fontWeight:'600',
        color:'whtie',
        letterSpacing:0.5
    },
    btnContainer:{
        justifyContent: 'center',
        height:height/3
    },
    textinput:{
        height:50,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        marginHorizontal:20,
        marginVertical:10,
        paddingLeft:10,
        borderRadius:25
    },
    formButton:{
        backgroundColor:'rgba(123,104,238,0.8)',
        height:55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:35,
        marginHorizontal:20,
        marginVertical:10,
        borderColor:'white',
        borderWidth:1,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5
    },
    formInputContainer:{
        marginBottom:70,
        ...StyleSheet.absoluteFill,
        zIndex:-1,
        justifyContent: 'center',
    },
    closeButtonContainer:{
        height:40,
        width:40,
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor:'white',
        elevation:1,
        alignItems: 'center',
        borderRadius: 20,
        top:-20
    },
    x:{
        color:'#000',
        padding:5
    }
})

export default styles