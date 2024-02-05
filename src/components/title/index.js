import React from "react";
import { View, Text } from "react-native";
import Styles from "./style";

export default function Title() {
  return (
    <View style={Styles.BoxTitle}>
      <Text style={Styles.textTitle}>IMC TEST</Text>
    </View>
  );
}
