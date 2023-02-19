import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import About from "./pages/About/About.jsx";
import Quiz from "./pages/Quiz/Quiz.jsx";
import CreateRoom from "./pages/CreateRoom/CreateRoom";
import RoomAnalytics from "./pages/CreateRoom/RoomAnalytics.jsx";
import SessionAnalytics from "./pages/Session/SessionAnalytics.jsx";

const Stack = createStackNavigator();

const Navigationindex = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen 
            name="DashBoard" 
            component={Dashboard} 
            />
            
            <Stack.Screen 
            name="About" 
            component={About} 
            />
            
            <Stack.Screen 
            name="Quiz" 
            component={Quiz} 
            />
            
            <Stack.Screen 
            name="CreateRoom" 
            component={CreateRoom} 
            />
            
            <Stack.Screen 
            name="RoomAnalytics" 
            component={RoomAnalytics}
            />

            <Stack.Screen 
            name="Session" 
            component={SessionAnalytics} 
            />
        </Stack.Navigator>
    );
}

export default Navigationindex;