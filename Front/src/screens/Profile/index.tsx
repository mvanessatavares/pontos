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

  //a imagem de exemplo foi add por url

  const [image, setImage] = useState('https://th.bing.com/th/id/R.a4ac01af50f9ee6fcf5635464b76fb92?rik=LXcNrNWjxAXZAA&riu=http%3a%2f%2fwww.apte-autisme.net%2fwp-content%2fuploads%2f2017%2f02%2fPicto-Professeur.png&ehk=Xo2Hk1tgCACsW67wYF6v%2b65Veoo9nTU6kPOZi%2bNTOCA%3d&risl=&pid=ImgRaw&r=0');

  
  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  function renderItem({ item }: ListRenderItemInfo<Point>) {
    return <CollectPoint {...item} />;
  }
  function renderItem({ item }: ListRenderItemInfo<Point>) {
    return <CollectPoint {...item} />;
  }

  return (
    <View style ={styles.container}>
      <ImageBackground source={require('../../../assets/fundo.png')}  style={styles.image}>

    <View style={styles.userBox}>

//eu apaguei toda essa parte de Image
      
    <View style={styles.ima} >

       
                    <Image source={perfil}
                    style={styles.Image}  />
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10 }}
      />
      <TouchableOpacity onPress={handleImagePicker} style={{ marginTop: 20 }}>
        <Text style = {{ color: '#fff' }}> Alterar foto de perfil </Text>
      </TouchableOpacity>
    </View>
     
      <Text style={styles.textUser}>{dadosUsuario.nome}</Text>
      <Text style={styles.textUser}>{dadosUsuario.email}</Text>
    </View>
    <Animatable.View delay={600} animation = "fadeInUp" style = {styles.Form}>
  
    <Text style = {styles.title}>Locais de coleta</Text>
    
    

    <FlatList        
        data={pointList}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
 
    
   
    <View>
    <TouchableOpacity
      style={styles.b}>
        <Image style={styles.bIcon} source={require('../../../assets/iconsPerfil/icon_add_point.png')}/>
      <Text style={{ color: '#fff' }}>Adicionar pontos de coleta</Text>
    </TouchableOpacity>
    </View>
    </Animatable.View>
    

    </ImageBackground>
    
    
      </View>
 
  )
 
};

