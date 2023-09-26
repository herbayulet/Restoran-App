import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import useKasir from "../utils/useKasir";
import Button from "../components/Button";
import useDapur from "../utils/useDapur";
import TableKasir from "../components/TableKasir";
import DropdownKasir from "../components/DropddownKasir";
import Layout from "../components/Layout.tsx";

const Kasir = () => {
  const data = [
    { label: "1", value: "meja1" },
    { label: "2", value: "meja2" },
    { label: "3", value: "meja3" },
  ];

  const { isFocus, value, setIsFocus, setValue, getListOrderKasir, deleteOrder, listKasir } = useKasir();
  
  return (
    <View className="bg-white h-full pt-3">
      <View className="mx-3 bg-cyan-100/50 rounded-md p-2">
        <Text className="mb-2 text-base font-semibold">Meja</Text>
        <View className="flex-row justify-between">
          <DropdownKasir values={value || ""} isFocus={isFocus} setIsFocus={setIsFocus} setValue={setValue}/>
          <Button className="flex-1 items-center justify-center" onPress={  () => value && getListOrderKasir(value)}>
            <Text className="text-white text-sm mt-1">Print Struk</Text>
          </Button>
        </View>
        {value !== undefined && listKasir.length > 0 && (
          <View>
          <TouchableOpacity className="bg-red-500 p-2 mt-4 rounded-md" onPress={ () => value && deleteOrder(value) }>
            <Text className="text-center text-white">Kosongkan Meja</Text>
          </TouchableOpacity>
          <TableKasir listKasir={listKasir}  value={value}/>
          </View>
          )}
      </View>
    </View>
  );
};

export default Kasir;
