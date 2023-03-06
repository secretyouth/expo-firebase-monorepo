import * as RN from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <RN.View className="h-screen bg-midnight">
      <RN.View className="flex flex-col justify-center h-screen">
        <RN.Text className="text-xl text-white">
          Open up App.js to start working on your app! Yew!
        </RN.Text>
        <StatusBar style="light" />
      </RN.View>
    </RN.View>
  );
}
