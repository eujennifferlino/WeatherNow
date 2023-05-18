import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import InfoCard from './components/InfoCard';


export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState('27');
  const [location, setLocation] = useState('São Paulo');
  const [wind, setWind] = useState('65');
  const [humidity, setHumidity] = useState('80');
  const [tempMin, setTempMin] = useState('18');
  const [tempMax, setTempMax] = useState('23');
  const [themeIcon, setThemeIcon] = useState(darkTheme ? 'sunny' : 'moon');

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    setThemeIcon(darkTheme ? 'moon' : 'sunny');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? '#101220' : '#F0F4FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    temperature:{
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10
    },
    temperatureText:{
      fontSize: 48,
      color: darkTheme ? '#E0E0E0' : '#101220'
    },
    refreshButton:{
      position: 'absolute',
      margin: 30,
      top: 0,
      left: 0,
    },
    info:{
      alignItems: 'center',
      backgroundColor: darkTheme ? '#1B1E32' : '#FFF',
      borderRadius: 20,
      width: 350,
      height: 230,
      marginTop: 28
    },
    infoCards:{
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    infoText:{
      color: darkTheme ? '#E0E0E0' : '#101220',
      margin: 15,
      fontSize: 19,
      fontWeight: 'bold'
    },
    themeButton:{
      position: 'absolute',
      bottom: 0,
      right: 0,
      margin: 30,
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    }
  }); 
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}> 
        <Ionicons name="refresh" size={24} color={darkTheme ? '#E0E0E0' : '#101220'} />
      </TouchableOpacity>
      <FontAwesome5 name="temperature-low" size={85} color="#DCA621" />
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={styles.temperatureText}>°C</Text>
      </View>
      <Text style={[styles.temperatureText, {fontSize: 30}]}>{location}</Text>
      <View style={styles.info}>
        <Text style={styles.infoText}>Informações complementares</Text>
        <View style={styles.infoCards}>
        <InfoCard title={'Vento'} value={wind + 'm/h'} darkTheme={darkTheme} />
        <InfoCard title={'Umidade'} value={humidity + '%'} darkTheme={darkTheme} />
        <InfoCard title={'Mínima'} value={tempMin + '°C'} darkTheme={darkTheme} />
        <InfoCard title={'Máxima'} value={tempMax + '°C'} darkTheme={darkTheme} />
        </View>
      </View>
      <View style={styles.themeButton}>
        <View style={styles.square}>
          <TouchableOpacity onPress={toggleTheme}>
            <Ionicons name={themeIcon} size={24} color={darkTheme ? '#DCA621' : '#101220'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}