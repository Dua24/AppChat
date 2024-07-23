import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginComponent from "./components/login";
import HomeComponent from "./components/home";
import ChatsComponent from "./components/chats";
const Stack = createStackNavigator<RootStackParamList>();
export default function Layout() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginComponent}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{title:"Trang chủ",headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
