import { Dimensions,StyleSheet } from "react-native";

export default StyleSheet.create({
    image:{
        height:Dimensions.get('window').height /4,
        width:Dimensions.get('window').width /2.3,
        borderRadius:10,
        margin:8
    },
    Product_Text:{
        fontsize:20,
        margin:5,
        fontWeight:'bold',
        fontSize:18,
        width:Dimensions.get('window').width /2.3,
    },
    Price_Text:{
        fontsize:10,
        color:'gray',
        fontWeight:'bold',
    },
    container: {
        flex: 1,
        backgroundColor:'#e6e6e6',
        borderRadius:10,
        margin:5
      },
      stock:{
        fontSize:25,
        fontWeight:'bold',
        color:'red'
    },

})