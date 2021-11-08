import {Button, CheckBox, FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react'

import { ListItem } from 'react-native-elements'

const FlatListComponent=({handleRemoveItem, itemList, paintedGreenItem, colorear})=>
{
    const [isSelected, setSelected] = useState(false)
    return(
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
                                    leftContent={
                                        <Button
                                        title="Hecho"
                                        style={{ minHeight: '100%', backgroundColor: '#FF5733' }}
                                        color='green'
                                        onPress={()=>paintedGreenItem(data)}
                                        />
                                    }
                                >
                                <ListItem.Content>
                               
                                <ListItem.Title 
                                style= {colorear ? {backgroundColor: 'green'}: null}

                                >{data.item.nombre}</ListItem.Title>
                                <ListItem.Chevron />            
                                </ListItem.Content>

                                </ListItem.Swipeable>
                    )} 
            />
        </View>
    )
}

const styles= StyleSheet.create({
    contenedorLista:{
        flex:1,
        backgroundColor: '#FF5733'
      },
      checkbox:{
          flexDirection:'row'
      }
})

export default FlatListComponent;