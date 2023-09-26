import React from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type DropdownProps = {
  values: string;
  isFocus: boolean;
  setIsFocus: (bool:boolean) => void
  hanldeChangeValue?: (val:string) => void;
  setValue: (val:string) => void
}

const DropdownKasir:React.FC<DropdownProps> = ({values, setIsFocus, isFocus,hanldeChangeValue, setValue}) => {
  const data = [
    { label: "1", value: "meja1" },
    { label: "2", value: "meja2" },
    { label: "3", value: "meja3" },
  ];
return (
  <View className="flex-row justify-between">
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
      labelField="label"
      valueField="value"
      searchField="label"
      placeholder={!isFocus ? "Nomor Meja" : "..."}
      searchPlaceholder="Search..."
      value={values}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value);
        setIsFocus(false);
      }}
    />
  </View>
  )
};

export default DropdownKasir;

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
