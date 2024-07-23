import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsComponent from "./chats";
import SettingsComponent from "./settings";

const Tab = createBottomTabNavigator();
const HomeComponent = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName:any;
              let colorIc:string='#fff';
              colorIc = focused ? "#3b5998" : "#ccc"
              if (route.name === 'Chats') {
                iconName = "chatbubble-sharp";
              } else if (route.name === 'Settings') {
                iconName = "settings";
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={31} color={colorIc} />
            },
            tabBarActiveTintColor: '#3b5998',
            tabBarInactiveTintColor: '#ccc'
          })}
        >
            <Tab.Screen name="Chats" component={ChatsComponent} options={{tabBarBadge:3,headerShown:false}}/>
            <Tab.Screen name="Settings" component={SettingsComponent} />
      </Tab.Navigator>
    )
}

export default HomeComponent