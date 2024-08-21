import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {UserContext} from '../context/UserContext';

export default function UserDetailsScreen() {
  const navigation = useNavigation();
  //* UserListScreen den gelen idyi useRoute üzerinden aldık
  const route = useRoute();
  const {userId} = route.params;
  //* useContext kullanarak UserContext e abone olduk
  const {users} = useContext(UserContext);
  //* users dizisi içerisinde UserDetails ekranına gönderdiğimiz id ile eşleşen veriyi getirdik
  const user = users.find(user => user.id === userId);
  console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.info}>{user.email}</Text>
        <Text style={styles.info}>{user.phone}</Text>
        <Button
          title="View Tasks"
          onPress={() => navigation.navigate('Tasks', {userId})}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#EEEDEB',
    padding: 20,
    borderRadius:30,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});