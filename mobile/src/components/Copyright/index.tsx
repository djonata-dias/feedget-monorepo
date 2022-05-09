import React from 'react';
import { Linking, Text, View } from 'react-native';

import { styles } from './styles';

export function Copyright() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Feito com ♥ por Djonata S. Dias</Text>
        </View>
    );
}