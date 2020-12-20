import * as React from 'react';
import Button from "react-native-button";
import { Feather, MaterialCommunityIcons , MaterialIcons, Fontisto, SimpleLineIcons, AntDesign, Foundation} from '@expo/vector-icons'; 
import { StyleSheet,SafeAreaView, Alert, Text, View } from "react-native";

export default function App (){
  return(
      <SafeAreaView style={styles.container}>   
        <View>
        <Text style={styles.title}>
        <Foundation name="clipboard-pencil" size={50} color="white" /> Sensia
        </Text>
        </View>
        
        <Button 
          containerStyle={{padding: 30, 
          height:85, 
          borderRadius:3, 
          backgroundColor:'#00C3FF'}}   
          style={{fontSize: 17,  fontWeight: 'bold', color: 'white'}}
          onPress={() => Alert.alert('Simple Button pressed')} >
          <Feather name="camera" size={30} color="white" />
          <Text style = {styles.item}>  Text Scanner  </Text> 
          </Button>

          <Button 
          containerStyle={{padding:30, 
          height:85, 
          borderRadius:3, 
          backgroundColor:'#5A8FBA'}}   
          style={{fontSize: 17, fontWeight: 'bold' , color: 'white'}}
          onPress={() => Alert.alert('Simple Button pressed')} >
          <MaterialCommunityIcons name="import" size={33} color="white" />
          <Text style = {styles.item}> Import Document </Text>
          </Button>

          <Button 
          containerStyle={{padding:30, 
          height:85, 
          borderRadius:3, 
          backgroundColor:'#4665AF'}}   
          style={{fontSize: 17,  fontWeight: 'bold', color: 'white'}}
          onPress={() => Alert.alert('Simple Button pressed')} >
          <Feather name="box" size={30} color="white" />
          <Text style = {styles.item}> Library </Text>
          </Button>

          <Button 
          containerStyle={{padding:30, 
          height:85, 
          borderRadius:3, 
          backgroundColor:'#453DB3'}}   
          style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}
          onPress={() => Alert.alert('Simple Button pressed')} >
          <Feather name="pen-tool" size={30} color="white" />
          <Text style = {styles.item}> Create Document </Text>
          </Button>

          <Button 
          containerStyle={{padding:30, 
          height:85, 
          borderRadius:3, 
          backgroundColor:'#5A1EAE'}}   
          style={{fontSize: 17,  fontWeight: 'bold', color: 'white'}}
          onPress={() => Alert.alert('Simple Button pressed')} >
          <Fontisto name="question" size={30} color="white" />
          <Text style = {styles.item}> How To Use</Text>
          </Button>
          
          <Button 
          containerStyle={{padding:30, 
          height:85, 
          borderRadius:3, 
          backgroundColor:'#6A1C9A'}}   
          style={{fontSize: 17,  fontWeight: 'bold', color: 'white'}}
          onPress={() => Alert.alert('Simple Button pressed')} >
          <AntDesign name="exclamationcircleo" size={30} color="white" />
          <Text style = {styles.item}>  About Us </Text>
          </Button>

          <Button 
          containerStyle={{padding:30, 
          height:100, 
          borderRadius:3, 
          backgroundColor:'#880D4F'}}   
          style={{fontSize: 20,  fontWeight: 'bold', color: 'white'}}
          onPress={() => Alert.alert('Simple Button pressed')} >
          <SimpleLineIcons name="star" size={30} color="white" />
          <Text style = {styles.item}> Rate Us </Text>
          </Button> 
    </SafeAreaView>  
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    paddingVertical: 40,
    backgroundColor: "#7FDEEA",
    color: "white",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",  
    fontFamily: "arizonia-regular"
  },
  item:{
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",   
    fontFamily: "josefinslab-variablefont_wght"
  },
});

