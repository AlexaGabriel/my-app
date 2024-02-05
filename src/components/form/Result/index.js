import React from "react";
import { View, Text } from "react-native";
import Styles from "./style";

export default function Result(props) {
  return (
    <View style={Styles.resultImc}>
      <Text style={Styles.information}>{props.messageResult}</Text>
      <Text style={Styles.numberImc}>{props.resultImc}</Text>
    </View>
  );
}
