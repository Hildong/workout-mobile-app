import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class Foodtracking extends React.Component {

  constructor(props) {
    super(props),

    this.switchText = this.switchText.bind(this);
  }

  switchText() {
    alert("hahah")
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.containterText}>Track your food</Text>
          <TouchableOpacity style={styles.containerBtn} onPress={this.switchText}>
            <Text style={styles.containerBtnText}>
              Press me!
            </Text>
          </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containterText: {
    color: "white",
    fontSize: 15,
    textAlign: "center", 
  }, 
  containerBtn: {
    marginTop: 10,
    height: 30,
    width: 80,
    backgroundColor: "white",
    borderRadius: 10,
  },
  containerBtnText: {
    textAlign: "center",
    paddingTop: 5,
    color: "black",
  }
});
