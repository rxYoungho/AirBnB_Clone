import React from 'react';
import {NavigationContatiner} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestScreen from "../screens/Guests";
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContatiner>
        <Stack.Navigator>
            <Stack.Screen 
              name={"Home"}
              component={HomeTabNavigator}
              options={{
                headerShown: false
              }}
            />

            {/* <Stack.Screen 
              name={"Guests"}
              component={GuestScreen}
              options={{
                title: "How many people?"
              }}
            /> */}
        </Stack.Navigator>
    </NavigationContatiner>
  );
};
     
export default Router;