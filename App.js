import { Button, StyleSheet, TextInput, View } from 'react-native';
import React, {useState} from 'react';

import AgregarItem from './components/AgregarItem';
import FlatList from './components/ListaItem';

export default function App() {
  //use States
  const [text, setText] = useState('')
  const [itemList, setItemList] = useState([]);
  const [colorear, setColorear] = useState(false);

  //funciones
  const handleChangeText=(value) =>{
    setText(value);
  }
  const handleAddItem=()=>{
    if (text){
        const item= {
          id: Math.random().toString(),
          nombre: text
        };
        setItemList([...itemList, item]);
        setText('');}
  }
  const handleRemoveItem=({item})=>{

    setItemList (itemList.filter(({id})=> id!==item.id))
  }
  const paintedGreenItem=()=>{
    setColorear(true);
    return
  }
  return (
    <View style={styles.container}>
       <AgregarItem
          handleChangeText={handleChangeText}
          handleAddItem={handleAddItem} 
          text={text}
          />
        <FlatList
          handleRemoveItem={handleRemoveItem}
          itemList={itemList}
          paintedGreenItem={paintedGreenItem}
          colorear={colorear}
        />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    padding:30,
  }
});
