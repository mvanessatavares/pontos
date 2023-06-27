import { Container } from './styles';
import React from "react";
import { ImageBackground, Image, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from "../Welcome/styles";



export const Welcome = () => {
  return (
      <View style ={styles.container}>
      <ImageBackground source={require('../../../assets/fundo.png')}  style={styles.imageBackground}>
      <Image source={require('../../../assets/icon.png')} style={styles.imageForeground}/>
        <View>
            <Text style = {styles.text}>Sejam bem vindos ao ReciclAE {'\n'} Seu app de reciclagem!</Text></View>
            <View style={styles.containerr}>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
      </View>
      
      
  );
};

