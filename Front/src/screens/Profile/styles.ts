import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

export const Container = styled.View``;

export const Text = styled.Text``;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
     flex: 1,
     width: undefined,
     height: undefined,
    },
    teste: {
      alignItems: 'center',
      paddingTop: 50,
      flex: 1,
    },

      imagee: {
        borderRadius: 100,
        borderWidth: 40,
        width: '10%',
        height: '10%',
  
      },
      nome: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 16,
       color: 'rgba(255, 255, 255, 1)'
      },
      Image: {
        width: 30,
        height: 30,
    },

      ima: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 100,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'rgba(122, 195, 64, 1)',
      },
      Form:{
        flex: 3,
        backgroundColor: "rgba(217, 217, 217, 0.29)",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingStart: '35%',
        paddingEnd: '35%',
        
    },
    title:{
      fontSize: 14,
      color: 'rgba(255, 255, 255, 1)',
      borderBottomColor: 'rgba(122, 195, 64, 1)',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 5,
      paddingTop: 20,
      borderBottomWidth: 1
  },
  button:{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 30,
    
  },

  b:{
    position: 'absolute',
        backgroundColor: 'rgba(132, 196, 65, 1)',
        padding: 10,
        borderRadius: 10,
        width: '200%',
        alignItems: 'center',
        alignSelf: 'center',
       

  },

  
      
  });
