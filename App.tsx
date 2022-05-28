import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';

export default function App() {
  let deviceH = Dimensions.get('screen').height;
  // the value returned does not include the bottom navigation bar, I am not sure why yours does.
  let windowH = Dimensions.get('window').height;
  let bottomNavBarH = deviceH - windowH;
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        marginBottom: bottomNavBarH,
      }}
    >
      <Text>hello fucking bitch</Text>
    </View>
  );
}
