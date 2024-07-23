import { COLOR_TEXT } from "@/constants/loginConst";
import { ReactNode } from "react";
import { View,Text, ActivityIndicator, StyleProp, ViewStyle,StyleSheet } from "react-native"
import { useTypewriter } from "react-simple-typewriter";

const LoadingComponent = (props:any) => {
    const {desc,timeout} = props
    const [text] = useTypewriter({
        words: desc,
        loop: 10000,
        typeSpeed: 40,
        delaySpeed:1000,
        deleteSpeed:40
      })


    return (
        <View>
          <ActivityIndicator size="large" color="#D6A3A3" />
          <View>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
      fontSize:18,
      fontWeight:"500",
      marginTop:20,
      color:COLOR_TEXT
    }
  })


  export default LoadingComponent
