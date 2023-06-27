import styled from 'styled-components/native';
import { StyleSheet } from "react-native";


export const Container = styled.View``;

//export const Text = styled.Text``;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
   
    imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
    },

    imageForeground: {
      width: 250,
      height: 250,
      position: 'absolute',
        top: 100,
        marginLeft: 'auto', 
        marginRight: 'auto', 
    },
    text: {
      zIndex: 1,
      top: 80,
      color: "white",
      fontSize: 20,
      fontWeight: "normal",
      textAlign: "center",
      marginBottom: 180,
    },
    button: {
        position: 'absolute',
        backgroundColor: 'rgba(132, 196, 65, 1)',
        padding: 10,
        borderRadius: 5,
        width: '60%',
        alignItems: 'center',
        alignSelf: 'center',
       
      },
      buttonText: {
        fontSize: 16,
        color: 'white',
      },
      containerr: {
        justifyContent: "space-evenly",
        alignItems: 'flex-start',
      },
    
  });
