// ROUTING
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
// SCREENS
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import ItemScreen from './screens/ItemScreen';


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* HOME */}
          <Stack.Screen 
            name='Home'
            component={HomeScreen}
          />
          <Stack.Screen 
            name='Discover'
            component={DiscoverScreen}
          />
          <Stack.Screen 
            name='ItemScreen'
            component={ItemScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}