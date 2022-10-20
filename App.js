import React from "react";
import{useState,View,SafeAreaView,TextInput,StyleSheet,Text,FlatList,ScrollView,Image, Dimensions} from "react-native";
import product_data from './src/Product_Data.json';
import PorductCard from './src/component/Store/Card';

const App=()=>
{
  const [text, onChangeText] = React.useState(null);
  const NewsCard=({item})=><PorductCard product={item}></PorductCard>
  return(

    <SafeAreaView style={styles.container}>
          <Text style={styles.header}>STORE</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={text}
            placeholder="Ara..."
            keyboardType="string"
          />
      <View>
        <FlatList keyExtractor={item=>item.id}
        data={product_data}
        renderItem={NewsCard}
        />
      </View>
    </SafeAreaView>
  )

}
const styles=StyleSheet.create
(
  {
    container:
    {
      flex:1,
      backgroundColor:'#eceff1',
      margin:10,
      marginTop:10
    },
    header:
    {
      color:'#660066',
      fontSize:30,
      fontWeight:'bold',
      padding:15,
      marginTop:15,
    },
    textInput:{
      height:50,
      backgroundColor:'#e6e6e6',
      borderRadius:10,
      margin:5,
      fontSize:18,
      paddingLeft:10
  },
  }
)
export default App;