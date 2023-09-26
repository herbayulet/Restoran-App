import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useOrder from "../utils/useOrder";

interface OptionMejaProps {
  selected: any;
  handleOptionSelect: (option: any) => void;
}

const OptionMeja: React.FC<OptionMejaProps> = ({
  selected,
  handleOptionSelect,
}) => {
  return (
    <View className="flex-row justify-evenly">
      <TouchableOpacity
        className={`items-center px-5 py-3 border border-slate-400 ${
          selected == "meja1" && "bg-slate-600"
        }`}
        onPress={() => handleOptionSelect("meja1")}
      >
        <Text
          className={`text-xl font-bold text-slate-600 ${
            selected == "meja1" && "text-white"
          }`}
        >
          Meja 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`items-center px-5 py-3 border border-slate-400 ${
          selected == "meja2" && "bg-slate-600"
        }`}
        onPress={() => handleOptionSelect("meja2")}
      >
        <Text
          className={`text-xl font-bold text-slate-600 ${
            selected == "meja2" && "text-white"
          }`}
        >
          Meja 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`items-center px-5 py-3 border border-slate-400 ${
          selected == "meja3" && "bg-slate-600"
        }`}
        onPress={() => handleOptionSelect("meja3")}
      >
        <Text
          className={`text-xl font-bold text-slate-600 ${
            selected == "meja3" && "text-white"
          }`}
        >
          Meja 3
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionMeja;
