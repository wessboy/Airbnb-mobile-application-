import { View, Text ,ImageBackground, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
const HomeScreen = () => {
  return (
    <View>

      <ImageBackground 
      source={require('../../../assets/images/wallpaper.jpg')} 
      style={styles.image}>
       <Text style={styles.title}>Go Near</Text> 

       <Pressable
        style={styles.button}
        onPress={() => console.warn('clicked!')}
        >
           <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
        </ImageBackground>

        <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('clicked!')}
        >
           <Fontisto name="search" size={25} color={"#f15454"} />
           <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        
    </View>
  )
}

export default HomeScreen