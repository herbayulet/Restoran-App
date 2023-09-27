import { View, Text, StyleSheet } from 'react-native'
import React, { Children } from 'react'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons';
import useRestoranScreens from '../utils/useRestoran';

interface LayoutProps {
  children: React.ReactNode;
  hapus?: any;
}

const Layout:React.FC<LayoutProps> = ({children, hapus}) => {
  const {deleteAllCollection} = useRestoranScreens()
  return (
    <View style={styles.main}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>
            [Contoh] Sistem Restoran
          </Text>
          <Text style={styles.text2}>
            Ambisius Coding
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={ deleteAllCollection}>
          <FontAwesome name="recycle" size={16} color="black" />
            <Text style={{marginLeft: 20}}>Reset</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    minHeight: '100%',
    width: '100%',
    marginTop: 30,
    marginVertical: 10,
    paddingVertical: 30
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {
    color: 'slategray',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    color: 'lightslategray',
    fontSize: 16,
    fontWeight: 'bold',
  },

  button:{
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    
  }

})