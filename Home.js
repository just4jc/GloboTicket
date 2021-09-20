import React from 'react';
import { View, Image } from 'react-native';

const Home = (props.) => {
    return (
        <View style={{flexDirection: 'column'}}>
            <Image
            style={{styles.globologo}}
            source={require('./images/_Export_globoticket-bug-black.png')}
        />
        </View>
    );
}

export default Home;
