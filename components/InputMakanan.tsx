import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

interface inputProps {
  makanan:string,
  tambah: () => void;
  handle: any;
}

const InputMakanan:React.FC<inputProps> = ({makanan, tambah, handle}) => {
  return (
    <View>
      <Text>Menu Makanan</Text>
        <View className="flex-row gap-x-2 justify-between items-center mt-2">
          <TextInput
            placeholder="Tambahkan disini"
            value={makanan}
            className="bg-white w-56 rounded-lg pl-2 py-1"
            onChange={handle}
          />
          <TouchableOpacity className="bg-slate-300 p-3 py-2 rounded-lg" onPress={()=> tambah()}>
            <Text>Tambah</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default InputMakanan