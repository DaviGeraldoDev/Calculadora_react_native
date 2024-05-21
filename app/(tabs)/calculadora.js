import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import useStorage from '../../hooks/useStorage';

export default function Calculadora() {
    const buttons = ['AC', 'CL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '⬅', '='] 
    const colors_button = ['AC', 'CL', '%', '/', '*', '-', '+', '=']
    const ops = ['/', '*', '-', '+']
    const { saveItem, clearItens } = useStorage();

    const [NumAtual, setNumAtual] = useState("")
    const [UltimoNum, setUltimoNum] = useState("")

    function Calcular_nums() {
        setNumAtual(eval(NumAtual))
        salvar_op(String(NumAtual + " = " + eval(NumAtual)))
        return
    }

    async function salvar_op(operacao) {
      await saveItem("@secretPass", operacao)
    }

    async function limpar_ops() {
      await clearItens()
    }

    function Identifica_bnt(buttonPressed){
        switch(buttonPressed){
            case ops.includes(buttonPressed):
                setNumAtual(NumAtual + " " + buttonPressed + " ")
                return

            case 'CL' :
                limpar_ops()
                return

            case '⬅' :
                setNumAtual(NumAtual.substring(0, (NumAtual.length -1)))
                return

            case 'AC':
                setUltimoNum("")
                setNumAtual("")
                return

            case '=':
                setUltimoNum(NumAtual + " = ")
                Calcular_nums()
                return
        }
        setNumAtual(NumAtual + buttonPressed)
    }

  return (
    <View style={styles.container}>
        <View style={styles.visor}>
            <Text style={styles.text_results}>{UltimoNum}</Text>
            <Text style={styles.text_atualresult}>{NumAtual}</Text>
        </View>
        <View style={styles.buttons}>
        {buttons.map((button) => 
          colors_button.includes(button)?
        <TouchableOpacity onPress={() => Identifica_bnt(button)} key={button} style={[styles.button, {backgroundColor: '#0C8CD4'}]}>
          <Text style={styles.textButton}>{button}</Text>
        </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => Identifica_bnt(button)} key={button} style={[styles.button]}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
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

  text_atualresult: {
    color: '#000',
    marginBottom: 50,
    marginRight: 50,
    fontSize: 30,
    fontWeight: 'bold'
  },

  text_results: {
    color: '#757B7F',
    marginBottom: 10,
    marginRight: 50,
    fontSize: 25,
    fontWeight: 'bold'
  },

  visor: {
    height: 200,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  icons_navigate: {
    marginTop: 20,
    gap: 80,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '25%', 
    minHeight: 95,
    flex: 2,
    
  },

  textButton: {
    color: "#000",
    fontSize: 20,
  }, 

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40
  },
});