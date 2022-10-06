import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LiveQ from './LiveQ';
import Search from './Search';
import Notification from './Notification';
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/lpgas.png')} style={{width: 250, height: 250}}/>  

      <View style={styles.btncon}>
        <TouchableOpacity style={styles.btnu} onPress={() =>navigation.navigate('Search', Search)}>
          <Text style={styles.btntxt}>LP Gas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnu} onPress={() =>navigation.navigate('LiveQ', LiveQ)} >
          <Text style={styles.btntxt}>Live Queue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnu} onPress={() =>navigation.navigate('Notification', Notification)} >
          <Text style={styles.btntxt}>Notifications</Text>
        </TouchableOpacity>
    </View>
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
  btnu:{
    backgroundColor: "#c1bfd6",
    padding: 15,
    width: "45%",
    margin:10,
    },
  btncon:{
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    },
    btntxt:{
    fontSize: 14,
    textAlign: "center",
    },
});
