import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } 
from 'react-native';
export default function Signup({navigation}) {
return (
  <View style={styles.container}>
      <Text style={styles.welcome}>Signup</Text>
      <TextInput style={styles.input} placeholder="username"/>
      <TextInput style={styles.input} placeholder="Email"/>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry/>
      <TextInput style={styles.input} placeholder=" Re type Password" secureTextEntry/>
      <View style={styles.btncon}>
          <TouchableOpacity style={styles.btnu}>
              <Text style={styles.btntxt}>Signup</Text>
          </TouchableOpacity>
   </View>
<StatusBar style="auto" />
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
welcome:{
fontSize: 30,
textAlign: 'center',
margin: 10,
color: "#fff",
},
input:{
width:"90%",
backgroundColor: "#fff",
padding: 15,
marginBottom: 20,
},
btnu:{
backgroundColor: "#c1bfd6",
padding: 15,
width: "45%",
},
btncon:{
flexDirection: "row",
justifyContent: "space-between",
width: "90%",
},
btntxt:{
fontSize: 14,
textAlign: "center",
}
});
