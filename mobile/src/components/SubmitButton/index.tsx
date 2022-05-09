import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ISubmitButtonProps {
    isLoading: boolean;
    onPress: () => void;
    disabled?: boolean;
}

export function SubmitButton({ isLoading, disabled, ...rest }: ISubmitButtonProps) {
    return (
        <TouchableOpacity style={styles(disabled).container}  {...rest}>
            {isLoading ?
                <ActivityIndicator color={theme.colors.text_on_brand_color} /> :
                <Text style={styles(disabled).text}>Enviar feedback</Text>
            }
        </TouchableOpacity>
    );
}