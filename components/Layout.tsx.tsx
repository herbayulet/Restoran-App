import { View, Text } from 'react-native'
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
    <View className="flex-1 bg-white min-h-full w-full">
      <StatusBar style="dark" />
      <View className="mx-3 pt-5 flex-row justify-between items-center">
        <View>
          <Text className="text-slate-900 text-xl font-semibold">
            [Contoh] Sistem Restoran
          </Text>
          <Text className="text-slate-300 text-base font-semibold">
            Ambisius Coding
          </Text>
        </View>
        <TouchableOpacity className='border border-black py-3 px-2 rounded-md gap-x-2 flex-row items-center' onPress={ deleteAllCollection}>
          <FontAwesome name="recycle" size={16} color="black" />
            <Text>Reset</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  )
}

export default Layout