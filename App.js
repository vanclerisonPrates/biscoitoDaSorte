import { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function App() {
  const frases = [
    '"Siga os bons e aprenda com eles."',
    '"O bom-senso vale mais do que muito conhecimento."',
    '"O riso é a menor distância entre duas pessoas."',
    '"Deixe de lado as preocupações e seja feliz."',
    '"Realize o óbvio, pense no improvável e conquiste o impossível"',
    '"Acredite em milagres, mas não dependa deles."',
    '"A maior barreira para o sucesso é o medo do fracasso"',
  ];

  const biscoitoFechado = require("./src/biscoito.png");
  const biscoitoAberto = require("./src/biscoitoAberto.png");
  const [phrase, setPhrase] = useState();
  const [img, setImg] = useState(biscoitoFechado);

  const quebraBiscoito = () => {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setPhrase(frases[numeroAleatorio]);
    setImg(biscoitoAberto);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.textoFrase}>{phrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
