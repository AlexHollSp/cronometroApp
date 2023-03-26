/* Importing the react library and the react native library. */
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';

/* Declaring the variables that will be used in the code. */
let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;


/* The code that is being used to create the stopwatch. */
export default function App() {
  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState('INICIAR');
  const [ultimo, setUltimo] = useState(null);

  

  function iniciar(){
    if (timer !== null){
      clearInterval(timer);
      timer = null;
      setBotao('INICIAR');
    }
    else{
      timer = setInterval (()=>{
        ss++;
        if(ss == 60){
          ss = 0;
          mm++;
        }
        if(mm == 60){
          mm = 0,
          hh ++;
        }

        let format =(hh < 10 ? '0' + hh : hh) + ':'
        + (mm < 10 ? '0' + mm : mm) + ':'
        + (ss <10 ? '0' + ss : ss);

        setNumero(format);


      }, 1000);
      setBotao('PARAR');
    }
  }

  function resetar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
    }
    setUltimo(numero);


    setNumero(0);
    ss = 0;
    mm = 0;
    hh = 0;
    setBotao('INICIAR');

  }
  

 /* Returning the code that is being used to create the stopwatch. */
  return (
    <View style={styles.container}>
      
      <Image source={require('./src/crono.png')}/>

      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnTexto}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={resetar}>
          <Text style={styles.btnTexto}>RESETAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}> { ultimo ? 'ULTIMO TEMPO: ' + ultimo : ''} </Text>
      </View>

    </View>
  );
}

/* Creating the style of the stopwatch. */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FA9A',
  },
  timer:{
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff'
  },
  btnArea:{
    flexDirection:'row',
    marginTop: 130,
    height: 40,
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: ''
  },
  areaUltima:{
    marginTop: 40,
  },
  textoCorrida:{
    fontSize: 23,
    color: '#000',
    fontStyle: 'italic',

  }

  
,});
