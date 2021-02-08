import React from 'react';
import { 
    View, 
    ImageBackground,
    Image,
    Text,
    Pressable
} from 'react-native';
import styles from './styles';


const Post = (props) => {

    const post = props.post

  return (
      <View style={styles.container}>
        {/* image */}
        <Image
            style={styles.image}
            source={{uri: 'https://blog.kakaocdn.net/dn/kO2H7/btqz7KIU5pu/spCicSk0r44I5i5Fu7mRt1/img.jpg'}}
        />
        {/* Bed & BedRoom */}
        <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

        {/* Type & Descrption */}
        <Text style={styles.descriptions} numberOfLines = {2}>
            {post.type}. {post.title}
        </Text>
        {/* Old price & New Price */}
        <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post.oldPrice} </Text>
            <Text style={styles.Price}>${post.newPrice} </Text>
            / night
        </Text>
        {/* Total Price */}
        <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
      </View>
  );
};

export default Post;

