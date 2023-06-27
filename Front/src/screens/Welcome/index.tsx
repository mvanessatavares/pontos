import { Container } from './styles';
import React from "react";
import { ImageBackground, Image, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from "../Welcome/styles";
import { Home } from "../Home"
import { useNavigation } from '@react-navigation/native';

export const Welcome = () => {
  const navigation = useNavigation()
  return (
      <View style ={styles.container}>
      <ImageBackground source={require('../../../assets/fundo.png')}  style={styles.imageBackground}>
      <Image source={require('../../../assets/icon.png')} style={styles.imageForeground}/>
        <View>
            <Text style = {styles.text}>Sejam bem vindos ao ReciclAE {'\n'} Seu app de reciclagem!</Text></View>
            <View style={styles.containerr}>
            <TouchableOpacity style = {styles.button}
            onPress={() => navigation.navigate('Home')}>
                <Text style = {styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
      </View>
      
      
  );
};

