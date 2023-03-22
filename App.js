import { Text, View, Image, Button } from 'react-native';
import { useState } from 'react';

const Clickavel = (props) => {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <View>
      <Text>Esse é {props.nome} -> {{isClicked} ? "Clique-me" : "Clickado"}</Text>
      <Button
        onPress={() => {
        setIsClicked(false)
         }}
         disabled={!isClicked}
         title={isClicked ? "Clique-me" : "Thank you"}
    />
    </View>
  )
}

const DetalharProduto = (props) => {
  return(
  <View style={{borderWidth: 1, margin: 50}}>
    <Text>Poduto: {props.produto}</Text>
    <Text>Marca: {props.marca}</Text>
    <Text>Preço: {props.preco}</Text>
    <Text>Quantidade em estoque: {props.q_estoque}</Text>
  </View>
  );
}

export default function App() {
  return (
   <View>
    <Image 
    source={{uri: "https://www.shutterstock.com/image-photo/view-businessman-holding-computer-devices-260nw-1014468334.jpg"}} 
    style={{width: 200, height: 200}} 
    />
    <DetalharProduto nome="Mochila" marca="Dell" preco="R$ 99,99" q_estoque="30"/>
    <DetalharProduto nome="Mose" marca="Razer" preco="R$ 149,99" q_estoque="25"/>
    <DetalharProduto nome="Memória Ram" marca="Kingston" preco="R$ 199,99" q_estoque="18"/>
    <Clickavel nome="Botão 1" />
    <Clickavel nome="Botão 2" />
   </View>
  );
}