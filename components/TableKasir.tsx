import { Ionicons } from "@expo/vector-icons";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface tableProps {
  foods?: any[];
  db?: any;
  hapus?: any;
  value: string;
  listKasir: any[];
}

const TableKasir: React.FC<tableProps> = ({
  foods,
  hapus,
  value,
  listKasir,
}) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: { id: string; menu: string; hapus: any };
    index: number;
  }) => (
    <View className="flex-row gap-x-20 justify-between items-center mt-3  border-b border-b-slate-400">
      <View className="">
        <Text>{index + 1}</Text>
      </View>
      <View className="flex-1 pl-9">
        <Text>{item?.menu}</Text>
      </View>
      <TouchableOpacity>
        <Text>Gratis</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      {listKasir && listKasir.length > 0 && (
      <View className="flex-row justify-between items-center mt-7 gap-x-20">
        <View className="">
          <Text>Jumlah</Text>
        </View>
        <View className="flex-1">
          <Text>Menu</Text>
        </View>
        <View className="">
          <Text>Harga</Text>
        </View>
      </View>
      )}
      {listKasir && listKasir.length > 0 ? (
        <FlatList
          data={listKasir}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View className="justify-center items-center mt-16">
          <Text className="text-center text-neutral-600 text-lg">
            Tidak ada Data
          </Text>
        </View>
      )}
    </View>
  );
};

export default TableKasir;
