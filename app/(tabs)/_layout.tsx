import { Tabs } from 'expo-router';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="calculadora"
        options={{
          title: 'Calculadora',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calculator' : 'calculator-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="historico"
        options={{
          title: 'Histórico',
          tabBarIcon: ({ color, focused }) => (<Icon name='history' size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Imc"
        options={{
          title: 'IMC',
          tabBarIcon: ({ color, focused }) => (<Icon name="percent" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
