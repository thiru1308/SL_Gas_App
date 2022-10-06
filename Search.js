import {Image, StyleSheet, TextInput,View } from 'react-native';

export default function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/fire.png')} style={{width: 150, height: 150}}/>  

      <TextInput style={styles.input} placeholder="Enter the LP gas weight"/>
      <TextInput style={styles.input} placeholder="Enter the District"/>
      <TextInput style={styles.input} placeholder="Enter the city/town"/>
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
  input:{
    width:"90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 30,
    fontWeight: "bold",
    color: "#fff"
    },
 
});
