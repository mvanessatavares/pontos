import { Container, Text } from './styles';
import React from "react";
import { ImageBackground, Image, StyleSheet, View, SafeAreaView, TouchableOpacity, Button } from "react-native";
import { styles } from "../Profile/styles";
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
const Stack = createBottomTabNavigator();
import ImagePicker from 'react-native-image-picker';



export const Profile = () => {
  return (
    <View style ={styles.container}>
      <ImageBackground source={require('../../../assets/fundo.png')}  style={styles.image}>

    <View style={styles.teste}>
    <View style={styles.ima} >
                    <Image source={require('../../../assets/perfil.png')}
                    style={styles.Image}  />
      </View>
     
      <Text style={styles.nome}>Nome do Usuário</Text>
      <Text style={styles.nome}>email@usario.com</Text>
    </View>
    <Animatable.View delay={600} animation = "fadeInUp" style = {styles.Form}>
  
    <Text style = {styles.title}>Locais de coleta</Text>
   
    <View style={styles.button}>
    <TouchableOpacity
      style={styles.b}>
      <Text style={{ color: '#fff' }}>Adicionar pontos de coleta</Text>
    </TouchableOpacity>
    </View>
    </Animatable.View>
    

    </ImageBackground>
    
    
      </View>
 
  )
 
};

