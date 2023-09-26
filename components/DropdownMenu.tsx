/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import useOrder from "../utils/useOrder";
import Button from "./Button";

type DropdownProps = {
  makanan: any[];
  data: any[];
  value: string
  isFocus: boolean;
  setValue: (val:string) => void;
  setIsFocus: (bool:boolean) => void;
  qty: string;
  setQty: (kuan:string) => void;
};

const DropdownComponent: React.FC<DropdownProps> = ({ makanan, data, value, isFocus, setIsFocus, setQty, qty, setValue }) => {

  return (
    <View className="mt-5">
      {/* {renderLabel()} */}
      <View className="flex-row justify-between">
        <View>
          <Text className="font-bold text-base">Menu</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={makanan}
            search
            maxHeight={300}
            minHeight={100}
            labelField="food"
            valueField="food"
            searchField="food"
            placeholder={!isFocus ? "Pilih Menu" : "..."}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.food);
              setIsFocus(false);
            }}
          />
        </View>
        <View>
          <Text className="font-bold text-base">Jumlah</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            minHeight={100}
            labelField="value"
            valueField="value"
            searchField="value"
            placeholder={!isFocus ? "Kuantitas" : "..."}
            searchPlaceholder="Search..."
            value={qty}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setQty(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    // width:00,
    padding: 10,
    marginTop: 30,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    width: 120,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    // backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
