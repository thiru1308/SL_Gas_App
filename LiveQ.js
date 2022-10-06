import {StyleSheet, Text, View} from 'react-native';

export default function LiveQ({ navigation }) {
  return (
    <View style={styles.container}>
    <Text>This is Live Queue map page</Text>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#1e90ff',
  alignItems: 'center',
  justifyContent: 'center',
},
});
