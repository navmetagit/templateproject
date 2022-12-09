import { View, Text, ImageBackground, TouchableOpacity,SafeAreaView } from 'react-native'
import ButtonComp from '../../components/ButtonComp'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SignIn } from '../../redux/authSlice'
import styles from './styles'
import { FlashList } from "@shopify/flash-list";
import { GlobalStyle } from '../../components'
const ProductDetails = ({ navigation }) => {

    const globalStyles = GlobalStyle();
    const dispatch = useDispatch();
    // const { authData } = useSelector((state) => state.auth)
    const [data,setData] = React.useState([])
    const[val1,setVal1] = React.useState(-1)
    const[val2,setVal2] = React.useState(-1)
    const LoginHandle = () => {
      // console.log('see vals');
      dispatch(SignIn('navpreet', '123'))
    }
    React.useEffect(() => {
      console.log('value of val1 and 2 ',val1, val2);
    },[val1,val2])
    React.useEffect(() => {
      let url = 'https://api.publicapis.org/entries'
      fetch(url)
      .then((response) => response.json())
      .then(val=>{
        // console.log('data is  ',val);
        setData(val)
      })
      .catch(e=>{
        console.log('exception is ',e);
      })
    },[])
  
    return (
        <View style={styles.container}>
            <SafeAreaView>
            <ImageBackground
        source={{ uri: 'https://www.shihoriobata.com/wp-content/uploads/2020/12/moon-and-clouds-aesthetic-background-phone2-576x1024.jpg' }}
        style={[globalStyles.bg, {}]}
      >
        <Text style={[globalStyles.heading]}>LOGIN</Text>
        <View style={{flex:0.8,flexDirection: 'row',justifyContent: 'space-between'}}>

        <View style={{flex:0.38,}}>
        <FlashList
          data={data.entries}
          extraData={val1}
          renderItem={({ item,index }) => (
          <TouchableOpacity onPress={() => setVal1(index)}
          style={{width: '100%', height: 100,backgroundColor:index==val1?'green':'grey',marginBottom:10}}>
            <Text>{item.API} {item.Description}</Text>
            
          </TouchableOpacity>
          )}
          estimatedItemSize={200}
        />
        </View>
        <View style={{flex:0.38,}}>
        <FlashList
          data={data.entries}
          extraData={val2}
          renderItem={({ item,index }) => (
          <TouchableOpacity onPress={() => setVal2(index)}
          style={{width: '100%', height: 100,backgroundColor:index==val2?'green':'grey',marginBottom:10}}>
            <Text>{item.API} {item.Description}</Text>
            
          </TouchableOpacity>
          )}
          estimatedItemSize={200}
        />
        </View>
        </View>
        <View style={{flex:0.2,justifyContent: 'flex-end',backgroundColor:'red',paddingBottom:100}}>
       
        </View>
      </ImageBackground>
            </SafeAreaView>
        </View>
    );
};


export default ProductDetails;
