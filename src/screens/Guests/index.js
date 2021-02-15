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
        <View style={{justifyContent: 'space-between', height: '100%'}}>
            <View>
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
        
            <Pressable style={{
                marginBottom: 20, 
                backgroundColor: '#f15454',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                marginHorizontal: 20,
                borderRadius: 10,
                
            }}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Search</Text>
            </Pressable>
        </View>
      );
    };
    
    export default GuestsScreen;

