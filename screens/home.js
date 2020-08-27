import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';


export default class home extends React.Component {

  constructor(props) {
    super(props),

    this.switchText = this.switchText.bind(this);
  }

  switchText() {
    alert("hahah")
  }

  render() {
    return (
          <ScrollView contentContainerStyle={styles.wrapper}>

            <View style={styles.homeTextSection}>
              <Text style={styles.homeHeader}>Header</Text>
              <Text style={styles.homeDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sem ligula. Praesent fringilla eget dolor a pretium. Nam at eros nec ligula interdum elementum nec id tortor. Sed ut ex quis ex laoreet accumsan eu ac metus. Ut et tel</Text>
            </View>

            <View style={{ height: 1, width: "70%", backgroundColor: "rgba(0, 0, 0, .2)", alignSelf: "flex-start", marginTop: "5%"}} />

            <View style={[styles.containerScreenShortcut, styles.cardioScreenShortcut]}>
              <Text style={styles.containerScreenShortcutHeader}>Cardio workouts</Text>
            </View>

            <View style={{ height: 1, width: "70%", backgroundColor: "rgba(0, 0, 0, .2)", alignSelf: "flex-start" }} />

            <View style={[styles.containerScreenShortcut, styles.muscleScreenShortcut]}>
              <Text style={styles.containerScreenShortcutHeader}>Build muscle</Text>
              
            </View>

            <View style={{ height: 1, width: "70%", backgroundColor: "rgba(0, 0, 0, .2)", alignSelf: "flex-start"}} />

            <View style={[styles.containerScreenShortcut, styles.foodScreenShortcut]}>
              <Text style={styles.containerScreenShortcutHeader}>Food and dieting</Text>       
            </View>

            <View style={{ height: 1, width: "70%", backgroundColor: "rgba(0, 0, 0, .2)", alignSelf: "flex-start"}} />

            <StatusBar style="auto" />

          </ScrollView>
    );
  }

}


const styles = StyleSheet.create({
  wrapper: {
    height: "150%",
    justifyContent: 'center',
  },
  homeTextSection: {
    height: "40%",
    backgroundColor: "red",
    marginTop: "-25%",
    alignItems: "center",
    backgroundColor: "rgb(235, 235, 235)",
  },
  homeHeader: {
    fontSize: 35,
    marginTop: "35%",
    textAlign: "center",
    textDecorationLine: "underline"
  },
  homeDesc: {
    fontFamily: "sans-serif-light",
    textAlign: "center",
    fontSize: 17,
    fontStyle: "italic",
    marginTop: "2%",
    backgroundColor: "red",
    width: "80%",
  },
  containerScreenShortcut: {
    height: "22%",
    width: "100%",
    marginLeft: 5,
  },
  cardioScreenShortcut: {

  },
  muscleScreenShortcut: {

  },
  foodScreenShortcut: {

  },
  containerScreenShortcutHeader: {
    fontSize: 25,
    fontFamily: "sans-serif-thin",
    fontWeight: "100",
    textDecorationLine: "underline",
  }
});
