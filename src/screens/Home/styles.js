import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginRight: 55,

    },

    button:{
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginRight: 145,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
    },

    searchButton:{
        backgroundColor: '#fff',
        height: 50,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 40,
        zIndex: 100,
    },

    searchButtonText:{
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default styles;