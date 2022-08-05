import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import ScreenNavigation from './components/ScreenNavigation';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,

  },
});
