import { Container, Text } from './styles';
import React from "react";
import { ImageBackground, Image, StyleSheet, View, SafeAreaView, TouchableOpacity, ListRenderItemInfo, FlatList} from "react-native";
import { styles } from "../Profile/styles";
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
const Stack = createBottomTabNavigator();
import ImagePicker from 'react-native-image-picker';
import { CollectPoint } from '../../components/CollectPoint';

// import { SvgUri, SvgXml } from 'react-native-svg'
import perfil from '../../../assets/iconsPerfil/perfil.png'

import { Point, pointList } from '../../../data/pointList';

//TODO fazer condional de ft de perfil
//TODO fazer imagens svg funcionarem 
//TODO fazer as funções de alteração

const dadosUsuario = {
  img: "img",
  nome:"João Pedro",
  email: "joaopedro@email.com"
}




export const Profile = () => {
  function renderItem({ item }: ListRenderItemInfo<Point>) {
    return <CollectPoint {...item} />;
  }

  return (
    <View style ={styles.container}>
      <ImageBackground source={require('../../../assets/fundo.png')}  style={styles.image}>

    <View style={styles.teste}>
    <View style={styles.ima} >

       
                    <Image source={perfil}
                    style={styles.Image}  />
      </View>
     
      <Text style={styles.nome}>{dadosUsuario.nome}</Text>
      <Text style={styles.nome}>{dadosUsuario.email}</Text>
    </View>
    <Animatable.View delay={600} animation = "fadeInUp" style = {styles.Form}>
  
    <Text style = {styles.title}>Locais de coleta</Text>
    
    

    <FlatList
       
        data={pointList}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
 
    
   
    <View style={styles.button}>
    <TouchableOpacity
      style={styles.b}>
        <Image source={require('../../../assets/iconsPerfil/icon_add_point.png')}/>
      <Text style={{ color: '#fff' }}>Adicionar pontos de coleta</Text>
    </TouchableOpacity>
    </View>
    </Animatable.View>
    

    </ImageBackground>
    
    
      </View>
 
  )
 
};

