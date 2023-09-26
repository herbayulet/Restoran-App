import { View, Text, StyleSheet } from "react-native";
import React from "react";
import useOrder from "../utils/useOrder";
import OptionMeja from "../components/OptionMeja";
import DropdownMenu from "../components/DropdownMenu";
import { StatusBar } from "expo-status-bar";
import useRestoranScreens from "../utils/useRestoran";
import Button from "../components/Button";

const Order = () => {
  const {
    addOrder,
    selected,
    handleOptionSelect,
    value,
    qty,
    isFocus,
    setIsFocus,
    setQty,
    setValue,
  } = useOrder();
  const { foods } = useRestoranScreens();

  const data = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];

  return (
    <View className="bg-white h-full pt-3">
      <StatusBar style="dark" />
      <View className="mx-3 px-4 pt-3 h-60 bg-cyan-100/50">
        <OptionMeja
          selected={selected}
          handleOptionSelect={handleOptionSelect}
        />
        <DropdownMenu
          makanan={foods}
          data={data}
          value={value || ""}
          setValue={setValue}
          isFocus={isFocus}
          setIsFocus={setIsFocus}
          qty={qty || ""}
          setQty={setQty}
        />
        <View className="flex-row justify-end pt-4">
          <Button onPress={() => addOrder(selected, value!, qty!)}>
            <Text className="text-white">Print Struk</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
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
