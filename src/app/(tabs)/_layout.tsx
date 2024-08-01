import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
    return (
        <Tabs
         screenOptions={{ 
            tabBarActiveTintColor: 'black',
            tabBarShowLabel: false
         }}
        >
            <Tabs.Screen 
            name="index" 
            options={{ 
                headerTitle: 'for insta',
                tabBarIcon: ({ color }) =>  
                <FontAwesome size={26} name="home" color={color} />,
            }}
            />

            <Tabs.Screen 
            name="new" 
            options={{ 
                headerTitle: 'created post',
                tabBarIcon: ({ color }) =>  
                <FontAwesome size={26} name="plus-square-o" color={color} />,
            }}
            />

            <Tabs.Screen 
            name="profile" 
            options={{ 
                headerTitle: 'profile',
                tabBarIcon: ({ color }) =>  
                <FontAwesome size={26} name="user" color={color} />,
            }}
            />
        </Tabs>
    )
}