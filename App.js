import { React } from 'react';
import { Text, View, TouchableOpacity, Vibration, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  
//Numero atual
const [numeroAtual, setNumeroAtual] = useState('');

//calculado
const [ultimoNumero, setUltimoNumero] = useState('');


const [foiCalculado, setFoiCalculado] = useState(false);

//botões
const botoes = ['C', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

const calcular = () => {
    //pega o numero na ultima posição
    let ultimoElemento = numeroAtual[numeroAtual.lenght-1];

    //impede a realização da conta de tiver operando no final do array
    if(ultimoElemento === '/' || ultimoElemento === '*' || ultimoElemento === '-' || ultimoElemento === '+' || ultimoElemento === '.'){
      if(foiCalculado) numeroAtual = ultimoNumero;
      setNumeroAtual(numeroAtual);
      setFoiCalculado(false);
      return;
    } else{
      let resultado = eval(numeroAtual).toString();
      setFoiCalculado(true);
      setNumeroAtual(resultado);
      return;
    }
}

const tratarEntrada = (botaoPressionado) => {
    //verificar se é sinal
    if(botaoPressionado === '+' || botaoPressionado === '-' || botaoPressionado === '*' || botaoPressionado === '/'){
      Vibration.vibrate(35);
      setNumeroAtual(numeroAtual + botaoPressionado);
      return;
    } else if(botaoPressionado === 1 || botaoPressionado === 2 || botaoPressionado === 3 || botaoPressionado === 4 || botaoPressionado === 5 || botaoPressionado === 6 || botaoPressionado === 7 || botaoPressionado === 8 || botaoPressionado === 9 || botaoPressionado === 0 || botaoPressionado === '.'){
      Vibration.vibrate(35);//coloca os valores
    }

    switch(botaoPressionado){
        case 'DEL':
          Vibration.vibrate(35);
          setNumeroAtual(numeroAtual.toString(0, (numeroAtual.length-1)));
          return;
        case 'C':
          Vibration.vibrate(35);
          setUltimoNumero('');
          setNumeroAtual('');
          return;
        case '=':
          Vibration.vibrate(35);
          setUltimoNumero(numeroAtual + '=');
          calcular();
          return;
    }
    setNumeroAtual(numeroAtual + botaoPressionado)
}

const styles = StyleSheet.create({
      resultados: {
        backgroundColor: '#f5f5f5',
        maxWidth: '100%',
        minHeight: '35%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      },
      textoResultado: {
        maxHeight: 45,
        color: '#00b9d6',
        margin: 15,
        fontSize: 35,
      },
      textoHistorico: {
        color: '#7c7c7c',
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
      },
      temaBotao: {
        alignSelf: 'flex-start',
        bottom: '5%',
        margin: 15,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      botoes: {
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      botao: {
        borderColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '24%',
        minHeight: '54%',
        flex: 2,
      },
      botaoTexto: {
        color: '#7c7c7c',
        fontSize: 28,
      }
    })

return (
  <View>
    <View style={styles.resultados}>
       <Text style={styles.textoHistorico}>{ultimoNumero}</Text>
       <Text style={styles.textoResultado}>{numeroAtual}</Text>
    </View>
    <View>
        <View style={styles.resultados}>
          <Text style={styles.textoHistorico}>{ultimoNumero}</Text>
          <Text style={styles.textoResultado}>{numeroAtual}</Text>
        </View>
        <View style={styles.botoes}>
          {botoes.map((botao) =>
            botao === '=' || botao === '/' || botao === '*' || botao === '-' || botao === '+' ?
            <TouchableOpacity key={botao} style={[styles.botao, {backgroundColor: '#00b9d6'} ]} onPress={() => tratarEntrada(botao)}>
              <Text style={[styles.textButton, {color: 'white', fontSize: 28} ]}>{botao}</Text>
            </TouchableOpacity>
            :
            botao === 0 ?
            <TouchableOpacity key={botao} style={[styles.botao, {backgroundColor: typeof(botao) === 'number' ? '#fff' : '#ededed', minWidth: '36%'} ]} onPress={() => tratarEntrada(botao)}>
              <Text style={styles.botaoTexto}>{botao}</Text>
            </TouchableOpacity>
            :
            botao === '.' || botao === 'DEL' ?
            <TouchableOpacity key={botao} style={[styles.botao, {backgroundColor: botao === '.' ?  '#fff' : '#ededed', minWidth: '37%'} ]} onPress={() => tratarEntrada(botao)}>
              <Text style={styles.botaoTexto}>{botao}</Text>
            </TouchableOpacity>
            :
            botao === 'C' ?
            <TouchableOpacity key={botao} style={[styles.botao, {backgroundColor: typeof(botao) === 'number' ? '#fff' : '#ededed', minWidth: '36%'} ]} onPress={() => tratarEntrada(botao)}>
              <Text style={styles.botaoTexto}>{botao}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity key={botao} style={[styles.botao, {backgroundColor: typeof(botao) === 'number' ? '#fff' : '#ededed' } ]} onPress={() => tratarEntrada(botao)}>
              <Text style={styles.botaoTexto}>{botao}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
);
}