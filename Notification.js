import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, Image,View } 
from 'react-native';
export default function Notification({navigation}) {
return (
<View style={styles.container}>
<Image source={require('./assets/fire.png')} style={{width: 150, height: 150, marginBottom:60,}}/>  

      <Text style={{fontWeight:"bold",fontSize: 20,}}>No new notifications</Text>
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
});
