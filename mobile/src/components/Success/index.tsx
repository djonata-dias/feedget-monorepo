import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ISuccessProps {
    onFeedbackRestartRequested: () => void;
}

export function Success({ onFeedbackRestartRequested }: ISuccessProps) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/success.png')}
            />
            <Text
                style={styles.text}
            >Agradecemos o feedback</Text>
            <TouchableOpacity
                onPress={onFeedbackRestartRequested}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    Quero enviar outro
                </Text>
            </TouchableOpacity>
        </View>
    );
}