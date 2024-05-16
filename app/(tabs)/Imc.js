import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


export default function IMC() {
    const [peso, setPeso] = useState(null)
    const [altura, setAltura] = useState(null)
    const [resultado, setResultado] = useState(null)
    console.log(peso)
    console.log(altura)
    console.log(resultado)

    function Calcula_IMC() {
        let imc = peso / (altura * altura)
        
        if (peso == null || altura == null){
            setResultado("Preencha os campos")
        }
        else if (imc < 18.5) {
            setResultado("Abaixo do peso")
            return
        }
        else if (imc < 25) {
            setResultado("Peso normal")
            return
        }
        else if (imc < 30) {
            setResultado("Sobrepeso")
            return
        }
        else if (imc < 35) {
            setResultado("Obesidade grau 1")
            return
        }
        else if (imc < 40) {
            setResultado("Obesidade grau 2")
            return
        }
        else {
            setResultado("Obesidade grau 3")
            return
        }

    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Calculo do IMC</Text>
        <Text style={styles.texto}>Insira seu peso</Text>
        <TextInput style={styles.Text_input}
         keyboardType = 'numeric'
         onChangeText={value => {setPeso(value)}}>
         </TextInput>

        <Text style={styles.texto}>Insira sua altura</Text>
        <TextInput style={styles.Text_input}
         keyboardType = 'numeric'
         onChangeText={value => {setAltura(value)}}
         ></TextInput>

        <Text style={styles.texto}>Resultado</Text>
        <View style={styles.resultado}>
            <Text style={styles.text_result}>{resultado}</Text>
        </View> 
        <TouchableOpacity style={styles.botao}
        onPress={Calcula_IMC}>
            <Text style={styles.texto_bnt}>Calcular</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    color: '#fff',
    marginTop: 20,
    marginBottom: 30,
    borderBottomColor: '#fff',
    borderBottomWidth: 3
  },

  text_result: {
    fontWeight: 'bold',
    fontSize: 20
  },

  Text_input: {
    backgroundColor: '#fff',
    width: 200,
    height: 80,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#0C8CD4',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },

  resultado: {
    backgroundColor: '#fff',
    width: 290,
    height: 80,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#0C8CD4',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    color: '#fff',
    fontSize: 28,
    marginTop: 20,
    marginBottom: 10,
  },

  texto_bnt: {
    color: '#fff',
    fontSize: 25,
  },

  botao: {
    backgroundColor: '#0C8CD4',
    width: 200,
    height: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});
