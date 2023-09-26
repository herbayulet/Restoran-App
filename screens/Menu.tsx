import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";
import InputMakanan from "../components/InputMakanan";
import Table from "../components/Table";
import useRestoranScreens from "../utils/useRestoran";
import Layout from "../components/Layout.tsx";

const Menu = () => {
  const{makanan, foods, addFoods, db, deleteFood, handleInputChange, getListFoods} = useRestoranScreens()
  return (
    <View className="bg-white h-full pt-3">
      <StatusBar style="dark" />
      <View className="mx-3 px-4 pt-3 h-96 bg-cyan-100/50">
        <StatusBar style="dark" />
        <InputMakanan makanan={makanan} tambah={addFoods} handle={handleInputChange} />
        <Table foods={foods} db={db} reloadData={getListFoods} hapus={deleteFood}/>
      </View>
    </View>
  );
};

export default Menu;
