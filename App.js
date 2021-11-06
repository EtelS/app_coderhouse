import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import React, {useState} from 'react';

import { ListItem } from 'react-native-elements';

export default function App() {
  //use States
  const [text, setText] = useState('')
  const [itemList, setItemList] = useState([]);

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
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
                    placeholder="Agregar un item"
                    onChangeText={handleChangeText}
                    value={text} />
        <Button title='Agregame esta'
                onPress={handleAddItem}
                color= 'green'></Button>
      </View>

      <View style={styles.contenedorLista}>
        <FlatList
                data= {itemList}
                keyExtractor={item=>item.id}
                renderItem={(data)=>(
                            <ListItem.Swipeable
                              key={data.item.id}
                              rightContent={
                              <Button
                                title="Quitar"
                                icon={{ name: 'delete', color: 'white' }}
                                style={{ minHeight: '100%', backgroundColor: '#FF5733' }}
                                color='red'
                                onPress= {()=>handleRemoveItem(data)}
                              />
                                            }
                            >
                            <ListItem.Content>
                              <ListItem.Title>{data.item.nombre}</ListItem.Title>
                              <ListItem.Chevron />            
                            </ListItem.Content>

                            </ListItem.Swipeable>
                )} 
        />
    
      </View>  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding:30,
  },
  contenedorLista:{
    flex:1,
    backgroundColor: '#FF5733'
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:20

  },
  input:{
    borderBottomColor:'black',
    borderBottomWidth:1,
    flex: 1,
    marginRight: 30
  }
});
