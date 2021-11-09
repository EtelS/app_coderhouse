import{Button, StyleSheet, TextInput, View} from 'react-native'

import React from 'react'

const AgregarItem=({handleChangeText, handleAddItem, text})=>{
    return(
        <View style={styles.inputContainer}>
        <TextInput style={styles.input}
                    placeholder="Agregar un item"
                    onChangeText={handleChangeText}
                    value={text} />
        <Button title='Agregame'
                onPress={handleAddItem}
                color= 'green'></Button>
      </View>
      
    )
 }


 const styles= StyleSheet.create({
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
 })

 export default AgregarItem;