import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from "@expo/vector-icons";

import {Home} from "../views/Home";
import {MasjidList} from "../views/MasjidList";
import {Settings} from "../views/Settings";

const Tab = createBottomTabNavigator();

export class Routes extends React.Component {
    render() {
        return (
          /*<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="MasjidList" component={MasjidList} />
          </Stack.Navigator>*/
          <Tab.Navigator
                screenOptions = {({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                      let iconName;

                      if (route.name === 'Home') {
                          iconName = 'home';
                      } else if (route.name === 'Masjid List') {
                          iconName = 'bars';
                      } else if (route.name === "Settings") {
                          iconName = 'setting';
                      }

                      return <AntDesign name={iconName} size={size} color={color} />;
                  },
                })}
                tabBarOptions = {{
                    activeTintColor:'white',
                    activeBackgroundColor: "#CE8837",
                    inactiveTintColor:'#CE8837',
                    style: {
                        backgroundColor: "#fff",
                        border: "none",
                        boxShadow: "0px -9px 16px -9px rgba(138,138,138,1)"
                    }
                }}>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Masjid List" component={MasjidList} />
              <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        );
    }
}
