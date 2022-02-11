import React, {useState, useEffect} from 'react';
import {
  FlatList, SafeAreaView, Text, View, Image
} from 'react-native';
import HeaderApp from './src/components/templates/HeaderApp';

import styled from 'styled-components/native';

const Lista = styled.FlatList`
  margin-bottom:60px
`;

const ItemLista = styled.TouchableOpacity`
  font-size:17px;
  border-bottom-width:.5px;
  border-bottom-color:#f0f0f0;
  height:250px;
  justify-content:center;
  align-items:center;
  padding-left:10px;
  padding-right:10px;
  background-color:#fff;
`;

const ImageList = styled.Image`
  width:150px;
  height:150px;
  border-radius:15px
`;

const Row = styled.View`
  flex-direction:row;
`;
const TextList = styled.Text`
  font-size:20px;
  margin-top:5px;
  font-weight:700
`;

const App = ()=>{

  const [filmesObj, setFilmesObj] = useState([]);

  useEffect(()=>{
    loadFilmes();
  }, []);

  const loadFilmes = async ()=>{
    setFilmesObj([]);
    const req = await fetch('https://api.b7web.com.br/cinema/');
    const reqJson = await req.json();
    setFilmesObj(reqJson);
  }


  
  return (
    <SafeAreaView>
      <HeaderApp title="Filmes em Cartaz" outra={()=> loadFilmes()}/>
      {filmesObj.length > 0 &&
        <Lista
          data={filmesObj}
          renderItem={({item, index})=>{
            return (
              <ItemLista>
                <Row>
                  <ImageList
                  defaultSource={require('./src/img/new-placeholder-image.png')}
                  source={{
                    uri:item.avatar
                  }}
                  />
                </Row>
                <Row>
                  <TextList>{item.titulo}</TextList>
                </Row>
              </ItemLista>
            )
          }}
          resizeMode='cover'
        />
      }
    </SafeAreaView>
  );
}
export default App;