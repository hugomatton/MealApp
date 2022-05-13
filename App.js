import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'

import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

//Sur cette branche on gére le state avec redux
function DrawerNavigator(){
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'}, //fond du header
        headerTintColor: 'white', //couelur du titre du header
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen 
        name="Categories" 
        component={CategoryScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => <Ionicons size={size} color={color} name="list"/>
        }}
      />
      <Drawer.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => <Ionicons size={size} color={color} name="star"/>
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator  
          initialRouteName="MealsCategories"
          //style par défaut sur les screens
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'}, //fond du header
            headerTintColor: 'white', //couelur du titre du header
            contentStyle: {backgroundColor: '#3f2f25'}
          }}
        >
          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator} 
            options={{
              headerShown: false //permet de cacher le header pour ne voir que celui du drawer
            }}
          />
          <Stack.Screen
            name="MealsOverview" 
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About the meal'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
