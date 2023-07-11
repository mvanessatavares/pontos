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
    userBox: {
      alignItems: 'center',
      paddingTop: 35,
      marginBottom:20
      // flex: 1,
    },

      imagee: {
        // borderRadius: 100,
        // borderWidth: 40,
        // width: '10%',
        // height: '10%',
  
      },
      textUser: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 5,
       color: 'rgba(255, 255, 255, 1)'
      },
      Image: {
        width: 70,
        height: 70,
        marginBottom:10,
    },

      ima: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // width: 60,
        // height: 60,
        // borderRadius: 100,
        // marginBottom: 10,
        // marginTop: 10,
        // backgroundColor: 'rgba(122, 195, 64, 1)',
      },
      Form:{
        flex: 3,
        backgroundColor: "rgba(217, 217, 217, 0.29)",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingBottom:10,
        alignItems: 'center'
        
    },
    title:{
      fontSize: 14,
      color: 'rgba(255, 255, 255, 1)',
      borderBottomColor: 'rgba(122, 195, 64, 1)',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 5,
      paddingTop: 20,
      borderBottomWidth: 1,
      
      marginBottom:5
    
  },
 
  b:{
    
        backgroundColor: 'rgba(132, 196, 65, 1)',
        paddingTop: 2,
        borderRadius: 10,
        width: 190,
        height:50,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop:5,
       

  },

  bIcon: {
    width:25,
    height:25,
  }

  
      
  });
