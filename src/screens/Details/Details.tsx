import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Details Screen</Text>
      <Text style={styles.description}>
        You have successfully authenticated with biometrics!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default Details;
