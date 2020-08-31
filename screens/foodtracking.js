import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';


export default class Foodtracking extends React.Component {

  constructor(props) {
    super(props),

    this.switchText = this.switchText.bind(this);
    this.state = { foodItemsDisplay: "none", exampleFoodCalorie: "", }
    this.APP_ID = "def8ae1f";
    this.APP_KEY = "aef18e49763e07f6c3a98223ec6941d7";
  }

  
  switchText() {
    alert("hahah")
  }

  showFoodItems = () => {
    this.setState({
      foodItemsDisplay: "flex"
    })
  }

  hideFoodItems = () => {
    this.setState({
      foodItemsDisplay: "none"
    })
  }

  render() {

    let foods = ["hej"]
    
    const fetchAPI = async () => {
      const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=chicken&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`, { headers: {
          "access-control-allow-origin" : "*",
          "Content-type": "application/json; charset=UTF-8"
        }})
      let data = await response.json()
      return data
    }

    const saveData = async () => {
      savedData = await fetchAPI();
      alert(JSON.stringify(savedData["hints"].length))
      for(let i = 0; i < JSON.stringify(savedData["hints"].length); i++) {
        foods.push(
           <View key={i}>
            <Text>{i["key"]}</Text>
          </View>
        )
      }
      alert(JSON.stringify(savedData))
      return foods
  }


    return (
      <View style={styles.container}>

          <Text style={styles.containerHeader}>Track your food</Text>

          <View style={styles.inputFoodContainer}>
            
            <TextInput placeholder="Search for your food..." underlineColor="transparent" style={styles.inputFoodItem} />

            <TouchableOpacity style={styles.containerBtn} onPress={() => { this.showFoodItems(); saveData(); }}>    
              <Text style={styles.containerBtnText}>
                Search
              </Text>
            </TouchableOpacity>
          
          </View>

          <View style={styles.nutrientBox}>

            <View style={styles.nurtrientBoxCaloriesBox}>
              <Text style={styles.nurtrientBoxCaloriesText}>Calories</Text>
              <Text style={styles.nurtrientBoxCaloriesAmount}>0</Text>
            </View>

            <View style={styles.nurtrientBoxMicronutrientsBox}>
              <Text style={styles.nurtrientBoxMicronutrientsText}>Carbs</Text>
              <Text style={styles.nurtrientBoxMicronutrientsAmount}>0</Text>
            </View>

            <View style={styles.nurtrientBoxMicronutrientsBox}>
              <Text style={styles.nurtrientBoxMicronutrientsText}>Fat</Text>
              <Text style={styles.nurtrientBoxMicronutrientsAmount}>0</Text>
            </View>

            <View style={styles.nurtrientBoxMicronutrientsBox}>
              <Text style={styles.nurtrientBoxMicronutrientsText}>Protein</Text>
              <Text style={styles.nurtrientBoxMicronutrientsAmount}>0</Text>
            </View>

          </View>

          <View ref={this.myRef} style={[styles.foodItems, {display: this.state.foodItemsDisplay}]}>
            
            <TouchableOpacity onPress={this.hideFoodItems} style={styles.hideFoodItemsBtn}>
              <Text style={styles.hideFoodItemsBtnText}>X</Text>
            </TouchableOpacity>

            <Text style={{color: "white"}}>{foods}</Text>

          </View>

          <StatusBar style="auto" />

      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {

  },
  containerHeader: {
    fontSize: 35,
    marginTop: 55,
    textAlign: "center", 
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {width: 1, height: 3},
    textShadowRadius: 1
  },
  inputFoodContainer: {
    width: "80%",
    display: "flex",
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    alignSelf: "center",
    marginTop: 80
  },
  inputFoodItem: {
    width: "73%",
    height: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.85,
    shadowRadius: 3.84,

    elevation: 5,
    borderColor: "rgba(0, 0, 0, .1)",
    borderWidth: 1,
    borderStyle: "solid",
    fontFamily: "sans-serif-light",
  },
  containerBtn: {
    height: 35,
    width: "22%",
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  containerBtnText: {
    textAlign: "center",
    paddingTop: 7,
    color: "black",
    display: "flex",
    fontFamily: "sans-serif-light",
  },
  foodItems: {
    width: "80%",
    alignSelf: "center",
    marginTop: -390,
    backgroundColor: "rgb(50, 50, 50)",
    height: 350,
    borderRadius: 10
  },
  hideFoodItemsBtn: {
    backgroundColor: "rgba(255, 150, 150, .9)",
    width: 40,
    alignItems: "center",
    borderRadius: 3,
    alignSelf: "flex-end"
  },
  hideFoodItemsBtnText: {
    color: "rgba(0, 0, 0, .5)"
  },
  nutrientBox: {
    width: "72%",
    display: "flex",
    alignSelf: "center",
    marginTop: 50,
    height: 350
  },
  nurtrientBoxCaloriesBox: {
    borderBottomColor: "rgba(0, 0, 0, .5)",
    borderStyle: "solid",
    borderBottomWidth: 1,
    height: "25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  nurtrientBoxCaloriesText: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "flex-end"
  },
  nurtrientBoxCaloriesAmount: {
    fontSize: 25,
    paddingTop: 3,
    display: "flex",
    alignSelf: "flex-end"
  },
  nurtrientBoxMicronutrientsBox: {
    borderBottomColor: "rgba(0, 0, 0, .5)",
    borderStyle: "solid",
    borderBottomWidth: 1,
    height: "15%",
    display: "flex",
    width: "93%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  nurtrientBoxMicronutrientsText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-end"
  },
  nurtrientBoxMicronutrientsAmount: {
    fontSize: 20,
    paddingTop: 3,
    display: "flex",
    alignSelf: "flex-end"
  },
});
