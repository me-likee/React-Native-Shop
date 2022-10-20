import React from "react";
import 
{
    View,
    Text,
    Image,
} from "react-native";
import styles from './Card_style';

const NewsCard=({product})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:product.imgURL}}></Image>
            <Text style={styles.Product_Text}>{product.title}</Text>
            <Text style={styles.Price_Text}>{product.price}</Text>
            <Text style={styles.stock}>{product.inStock === true ? '' : 'Stokta Yok'}</Text>
        </View>
    );
};

export default  NewsCard;