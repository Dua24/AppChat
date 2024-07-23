import { ColorGradientLogin } from "@/constants/Colors";
import { charMovingTime, COLOR_TEXT, HELLO_TEXT, LoginTimeOut } from "@/constants/loginConst";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from "expo-font";
import { LinearGradient } from 'expo-linear-gradient';
import { SplashScreen, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View ,Text, ActivityIndicator} from "react-native";
import {useTypewriter,Cursor, Typewriter} from 'react-simple-typewriter'
import LoadingComponent from "./loading";

const RootStack = createStackNavigator<RootStackParamList>();
SplashScreen.preventAutoHideAsync();

export default function LoginComponent() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); 
  const [isWaitingAPI, setIsWaitingAPI] = useState<boolean>(false);
  const [isFinishHello,setIsFinishHello] = useState<boolean>(false);
  const [loaded, error] = useFonts({
    'PlaywriteBEVLG-Regular': require('@/assets/fonts/PlaywriteBEVLG-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
   
  }, [loaded, error]);
  useEffect(() => {
    return () => {
      console.log("RUNN")
    }
   
  }, []);

  const [text] = useTypewriter({
    words: HELLO_TEXT,
    loop: 2,
    typeSpeed:70,
    onLoopDone: () => {

      handleClickButtonLogin()


    }
  })
  if (!loaded && !error) {
    return null;
  }

 
  function handleClickButtonLogin() {
    setIsFinishHello(true)
    setIsWaitingAPI(true)
    setTimeout(() => { // call api
      navigation.navigate("Home")
      setIsWaitingAPI(false)
    },3000)
  }
  

  
  return (
    <LinearGradient colors={ColorGradientLogin} style={[styles.container]}>
        {isWaitingAPI ? 
        <LoadingComponent desc ={['Đang tải...']} /> : 
        <View>
          <Text style={styles.text}>{text}</Text>
          {isFinishHello && <Button title="Continue" onPress={handleClickButtonLogin} />}
        </View> 
        }
        
  </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: "#3b5998",
    borderRadius: 10,
    width:'25%',
    elevation: 8,
    marginBottom:100,
    padding:10
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  text: {
    fontFamily:"PlaywriteBEVLG-Regular",
    fontSize:30,
    color:COLOR_TEXT
  }
})