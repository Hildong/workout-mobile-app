import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native';

const image = { uri: './pictures/homePagePic.jpg'};

export default class home extends React.Component {

  constructor(props) {
    super(props),

    this.switchText = this.switchText.bind(this);
  }

  switchText() {
    alert("Unfortunatley this is just a demo app and the pro version of workitz isn't a real thing :(!")
  }

  render() {
    return (
          <ScrollView contentContainerStyle={styles.wrapper}>

            <View style={styles.homeTextSection}>
                <ImageBackground source={require( './pictures/homePagePic.jpg')} style={styles.homeBackground}>
                  <View style={styles.darkenBkImg}>
                    <Text style={styles.homeHeader}>WorkItz</Text>
                    <View style={styles.homeHeaderDesc}>
                      <Text style={styles.homeHeaderDescText}>WorkItz is a demo workout app made with React Native and ___ API. It's not ment for actual use, just as a portfolio project. Although, that doesn't mean it doesn't work as a workout app!</Text>
                    </View>
                    <TouchableOpacity style={styles.getProBtn} onPress={this.switchText}>
                      <Text style={styles.getProBtnText}>
                        WORKITZ PRO {"\n"} $9.99
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
           </View>

            <View style={[styles.containerScreenShortcut, styles.cardioScreenShortcut]}>
              <Text style={styles.containerScreenShortcutHeader}>Cardio workouts</Text>
              <ScrollView style={styles.horizontalContainerScrolling} showsHorizontalScrollIndicator={false} horizontal>
                <View style={styles.blogOrWorkoutBox}>

                </View>
                <View style={styles.blogOrWorkoutBox}>

                </View>
                <View style={styles.blogOrWorkoutBox}>

                </View>
                <View style={styles.blogOrWorkoutBox}>

                </View>
              </ScrollView>
            </View>

            <View style={[styles.containerScreenShortcut, styles.muscleScreenShortcut]}>
              <Text style={styles.containerScreenShortcutHeader}>Build muscle</Text>
              <ScrollView style={styles.horizontalContainerScrolling} showsHorizontalScrollIndicator={false} horizontal>
                <View style={styles.blogOrWorkoutBox}>

                </View>
                <View style={styles.blogOrWorkoutBox}>

                </View>
                <View style={styles.blogOrWorkoutBox}>

                </View>
                <View style={styles.blogOrWorkoutBox}>

                </View>
              </ScrollView>
            </View>

            <View style={[styles.containerScreenShortcut, styles.foodScreenShortcut]}>
              <Text style={styles.containerScreenShortcutHeader}>Food and dieting</Text>       
              <ScrollView style={styles.horizontalContainerScrolling} showsHorizontalScrollIndicator={false} horizontal>
                <View style={styles.blogOrWorkoutBox}>

                </View>
                <View style={styles.blogOrWorkoutBox}>

                </View>
                <View style={styles.blogOrWorkoutBox}>

                </View>
                <View style={styles.blogOrWorkoutBox}>

                </View>
              </ScrollView>
            </View>

            <StatusBar style="auto" />

          </ScrollView>
    );
  }

}


const styles = StyleSheet.create({
  wrapper: {
    height: 1300,
    justifyContent: 'center',
  },
  homeHeaderDesc: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    height: 250,
    width: "80%",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 100,
    borderRadius: 10
  },
  homeHeaderDescText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1,
    padding: 12,
    width: "95%",
    
  },
  darkenBkImg: {
    backgroundColor: "rgba(0, 0, 0, .6)",
    height: "100%"
  },
  homeBackground: {
    height: 600, 
    width: "100%"
  },
  homeTextSection: {
    height: 600,
    alignItems: "center",
    backgroundColor: "red",
    color: "white"
  },
  getProBtn: {
    backgroundColor: "rgb(52, 159, 235)",
    width: "35%",
    height: 45,
    display: "flex",
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 5
  },
  getProBtnText: {
    textAlign: "center",
    color: "rgb(220, 220, 220)",
    fontFamily: "sans-serif-light",
    padding: 2,
    fontSize: 15
  },
  homeHeader: {
    fontSize: 40,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    textDecorationLine: "underline",
    fontStyle: "italic",
    color: "white",
    marginTop: 30
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
    height: 210,
    width: "100%",
    marginLeft: 5,
  },
  cardioScreenShortcut: {
    marginTop: 10
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
  },
  horizontalContainerScrolling: {
    width: "97%",
    marginTop: 10
  },
  blogOrWorkoutBox: {
    width: 200,
    height: "100%",
    borderColor: "rgba(0, 0, 0, .5)",
    borderStyle: "solid",
    borderWidth: 1,
    marginLeft: 10,
  }
});
