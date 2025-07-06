import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import AuthProvider from './src/context/auth';
import Routes from './src/routes'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
          <Toast />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
