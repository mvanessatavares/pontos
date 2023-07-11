import { Text } from './styles';
import React from "react";
import {  Image,  View,  TouchableOpacity, } from "react-native";
import { styles } from "../CollectPoint/styles";


import organic from '../../../assets/kindOfTrash/organic.png';
import plastic from '../../../assets/kindOfTrash/plastic.png';
import glass from '../../../assets/kindOfTrash/glass.png';
import battery from '../../../assets/kindOfTrash/battery.png';
import paper from '../../../assets/kindOfTrash/paper.png';
import metal from '../../../assets/kindOfTrash/metal.png';


// dados ficticios
import {Point} from '../../../data/pointList'



export const CollectPoint = ({ name, image, time }: Point) => {
    return (
     
  
      <View style={styles.containerPoint}>
        <Image style={styles.imgPonit} source={require('../../../assets/iconsPerfil/download.png')}/>
        <View style={styles.textsContainer} >
          {/* TODO: fazer renderização conforme o tipo de lixo  */}
          <View style={styles.kindTrash}>
          <Image style={styles.imgTrash} source={plastic}/>
          <Image style={styles.imgTrash} source={organic}/>
          <Image style={styles.imgTrash} source={battery}/>
          <Image style={styles.imgTrash}source={paper}/>
          <Image style={styles.imgTrash} source={metal}/>
          <Image style={styles.imgTrash} source={glass}/>
          </View>
          
          <Text style={styles.texts}>{name}</Text>
          <Text style={styles.texts}>Horario de Coleta</Text>
          <Text style={styles.texts}>{time}</Text>
        </View>
        <View >
          <TouchableOpacity style={styles.bEdit}>
            <Image source={require('../../../assets/iconsPerfil/edit.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bRemove}>
            <Image source={require('../../../assets/iconsPerfil/trash-alt.png')}/>
          </TouchableOpacity>
        </View>
       
      </View>
     
      
   
    )
   
  };