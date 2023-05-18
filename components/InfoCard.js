import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InfoCard = (props) => {
  const { darkTheme } = props;
  const styles = StyleSheet.create({
    infoCard:{
      alignItems: 'center',
      margin: 10,
      minWidth: 150,
    },
    text: {
      margin: 5,
      marginLeft: 15,
      fontSize: 18,
      color: darkTheme ? '#E8E8E8' : '#101220',
    },
  });

  return(
    <View style={styles.infoCard}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={[styles.text, {color:'#6368A6'}]}>{props.value}</Text>
    </View>
  )
}

export default InfoCard;