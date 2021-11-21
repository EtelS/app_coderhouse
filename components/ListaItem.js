import {Button, CheckBox, FlatList, Item, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react'

import { ListItem } from 'react-native-elements'

const FlatListComponent=({ handleRemoveItem, itemList})=>
{
    return(
        <FlatList 
            data={itemList}
            renderItem={(data) =>(
                <View style={styles.contenedorLista}>
                    <View style={styles.item}>
                     <Text>{data.item.nombre}</Text>
                     <Button
                        title="X"
                        color='#C22200'
                        onPress={()=>handleRemoveItem(data)}
                        />
                    </View>    
                </View>
            )}
            keyExtractor={item=>item.id}
        />
    )
}

const styles= StyleSheet.create({
    contenedorLista:{
        flex:1,
        margin:20,
        marginBottom:5,
        backgroundColor:'#fafafa'
      },
      checkbox:{
          flexDirection:'row'
      },
      item:{
          flexDirection:'row',
          justifyContent: 'space-between',
          borderBottomColor:'#000',
          borderBottomWidth:1,
          padding:0,
        },
})

export default FlatListComponent;