import React, {useState} from 'react';
import {View, Text, Pressable} from "react-native";
import Post from '../../components/Post';
import feed from '../../../assets/data/feed';
import styles from './styles';


const GuestsScreen = (props) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setinfants] = useState(0);
    return (
      <View>
        {/* Row 1: Adults */}
        <View style={styles.row}>
            {/* Titles */}
            <View>
                <Text style={{fontWeight:'bold'}}>Adults</Text>
                <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
            </View>

            {/* Buttons with value */}
            <View style={{flexDirection: 'row', alignItems: 'center', fontSize: 20, color: 'lightgrey'}}>
                {/* - button */}
                <Pressable onPress={() => setAdults(Math.max(0, adults-1))}
                style={styles.button}
                >
                    <Text>-</Text>
                </Pressable>
                <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
                {/* + button */}
                <Pressable onPress={() => setAdults(adults+1)}
                style={styles.button}
                >
                    <Text style={{fontSize: 20, color: 'lightgrey'}}>+</Text>
                </Pressable>
            </View>
        </View>
            
        {/* Row 1: Ends */}
        {/* Row 2: starts */}
        <View style={styles.row}>
            {/* Titles */}
            <View>
                <Text style={{fontWeight:'bold'}}>Children</Text>
                <Text style={{color: '#8d8d8d'}}>Ages 2-12 </Text>
            </View>

            {/* Buttons with value */}
            <View style={{flexDirection: 'row', alignItems: 'center', fontSize: 20, color: 'lightgrey'}}>
                {/* - button */}
                <Pressable onPress={() => setChildren(Math.max(0, children-1))}
                style={styles.button}
                >
                    <Text>-</Text>
                </Pressable>
                <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
                {/* + button */}
                <Pressable onPress={() => setChildren(children+1)}
                style={styles.button}
                >
                    <Text style={{fontSize: 20, color: 'lightgrey'}}>+</Text>
                </Pressable>
            </View>
        </View>

        {/* Row 3 starts */}
        <View style={styles.row}>
            {/* Titles */}
            <View>
                <Text style={{fontWeight:'bold'}}>Infants</Text>
                <Text style={{color: '#8d8d8d'}}>Under 2</Text>
            </View>

            {/* Buttons with value */}
            <View style={{flexDirection: 'row', alignItems: 'center', fontSize: 20, color: 'lightgrey'}}>
                {/* - button */}
                <Pressable onPress={() => setinfants(Math.max(0, infants-1))}
                style={styles.button}
                >
                    <Text>-</Text>
                </Pressable>
                <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
                {/* + button */}
                <Pressable onPress={() => setinfants(infants+1)}
                style={styles.button}
                >
                    <Text style={{fontSize: 20, color: 'lightgrey'}}>+</Text>
                </Pressable>
            </View>
        </View>
      </View>
      );
    };
    
    export default GuestsScreen;

