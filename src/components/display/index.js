import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import {Alert} from "react-native"
import { StyleSheet } from "react-native"
export default function Display() {
//Cenrtalizar tudo
const styles = StyleSheet.create({
    container: {
    justifyContent:"center",
    alignItems:"center",
    flex: 1,
    }
});



//Arrow functions
  const [contagem, setContagem] = useState(0);
  const [limite, setLimite] = useState(3);

  const Aumentar = () => {
    if (contagem < limite) {
      setContagem(contagem + 1);
    } else {
      Alert.alert("Limite!");
    }
  };

  const Diminuir = () => {
    if (contagem > 0) {
      setContagem(contagem - 1);
    } else {
      Alert.alert("Não é possível diminuir!");
    }
  };

  const diminuirLimite = () => {
    if (limite > 1) {
      setLimite(limite - 1);
    }
  };

  const aumentarLimite = () => {
    setLimite(limite + 1);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Contador de pessoas</Text>
      </View>

      <View>
        <Text>{contagem}</Text>
        <Text>O limite é: {limite}</Text>
      </View>

      <View>
        <Button title="+1" onPress={Aumentar} />
        <Button title="-1" onPress={Diminuir} />
        <Button title="Limite +1" onPress={aumentarLimite} />
        <Button title="Limite -1" onPress={diminuirLimite} />
      </View>
    </View>
  );
}
