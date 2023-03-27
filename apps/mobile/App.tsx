import * as RN from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <RN.View className="h-screen bg-midnight">
      <RN.View className="flex flex-col justify-center h-screen px-20">
        <RN.Text className="text-4xl text-black text-center font-bold mb-4">
          Woo Hoo
        </RN.Text>
        <RN.Text className="text-xl text-black text-center">
          Open up App.js to start working on your app.
        </RN.Text>
        <StatusBar style="dark" />
      </RN.View>
    </RN.View>
  );
}
