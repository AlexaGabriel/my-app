import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import Result from "./Result";
import Styles from "./style";

export default function Form() {
  const [altura, setaltura] = useState(null);
  const [peso, setpeso] = useState(null);
  const [messageImc, setmessageImc] = useState("prencha o peso e a altura");
  const [imc, setimc] = useState(null);
  const [textButton, setTextButton] = useState("calcular");

  function ImcCalculator() {
    const alturaComPonto = altura.slice(0, 1) + "." + altura.slice(1);
    const alturaFloat = parseFloat(alturaComPonto);
    const calculatedImc = peso / (alturaFloat * alturaFloat);
    return setimc(calculatedImc.toFixed(2));
  }

  function validacao() {
    if (peso != null && altura != null) {
      ImcCalculator();
      setaltura(null);
      setpeso(null);
      setmessageImc("seu imc é igual:");
      setTextButton("calcular novamente");
      return;
    }
    setimc(null);
    setaltura(null);
    setpeso(null);
    setTextButton("Calcular");
    setmessageImc("preencha o peso e altura");
  }

  return (
    <View style={Styles.formContext}>
      <View style={Styles.form}>
        <Text style={Styles.formLabel}>Altura</Text>
        <TextInput
          style={Styles.formInput}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setaltura}
          value={altura}
        ></TextInput>
        <Text style={Styles.formLabel}>Peso</Text>
        <TextInput
          style={Styles.formInput}
          placeholder="Ex. 60.50"
          keyboardType="numeric"
          onChangeText={setpeso}
          value={peso}
        ></TextInput>
        <TouchableOpacity style={Styles.button} onPress={() => validacao()}>
          <Text style={Styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <Result messageResult={messageImc} resultImc={imc} />
    </View>
  );
}
