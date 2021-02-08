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
  return (
      <View style={styles.container}>
        {/* image */}
        <Image
            style={styles.image}
            source={{uri: 'https://blog.kakaocdn.net/dn/kO2H7/btqz7KIU5pu/spCicSk0r44I5i5Fu7mRt1/img.jpg'}}
        />
        {/* Bed & BedRoom */}
        <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

        {/* Type & Descrption */}
        <Text style={styles.descriptions} numberOfLines = {2}>
            If you are a beginner that wants to learn javascript and 
            react-native or an advanced javascript developer that wants to get
        </Text>
        {/* Old price & New Price */}
        <Text style={styles.prices}>
            <Text style={styles.oldPrice}>$36 </Text>
            <Text style={styles.Price}>$30 </Text>
            / night
        </Text>
        {/* Total Price */}
        <Text style={styles.totalPrice}>$230 total</Text>
      </View>
  );
};

export default Post;

