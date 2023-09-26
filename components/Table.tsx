import { Ionicons } from "@expo/vector-icons";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


interface tableProps {
  foods: any[];
  db:any;
  reloadData: () => void;
  hapus: any;
}

const Table:React.FC<tableProps> = ({foods, hapus}) => {
    
    const renderItem = ({ item, index }: {item: {id:string, food:string, hapus: any,}; index:number}) => 
    
    (
      <View className='flex-row gap-x-20 justify-between items-center mt-3  border-b border-b-slate-400'>
        <View className=''>
          <Text>{index + 1}</Text>
          
        </View>
        <View className='flex-1 pl-2'>
          <Text>{item?.food}</Text>
        </View>
        <TouchableOpacity onPress={() => hapus(item?.id)}>
          <Ionicons name="trash" size={20} color="red" />
          </TouchableOpacity>
      </View>
    );
  
    return (
        <View>
        <View className="flex-row justify-between items-center mt-7 gap-x-20">
        <View className="">
          <Text>ID</Text>
        </View>
        <View className="flex-1">
          <Text>Menu</Text>
        </View>
        <View className="">
          <Text>Hapus ?</Text>
        </View>
      </View>
      {foods && foods.length > 0 ?
      <FlatList
        data={foods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> : 
      <View className="justify-center items-center mt-16">
      <Text className="text-center text-neutral-600 text-lg">Tidak ada Data</Text>
      </View>
    }
    <Text className="text-center mt-28">Daftar Menu Restoran Anda</Text>
      </View>
    );
  };
  
  export default Table;
  

