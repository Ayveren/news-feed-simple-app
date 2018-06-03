import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Actions as routes} from 'react-native-router-flux';

export default class StartPage extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Button
          title='Sign Up'
          onPress={() => routes.feedPage({
            animationType: 'scroll'
          })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  flexContainer: {
    flex: 1
  }
});