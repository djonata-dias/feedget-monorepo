import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import {
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { captureScreen } from 'react-native-view-shot';
import { apiRequest } from '../../libs/apiRequest';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';
import { SubmitButton } from '../SubmitButton';
import { FeedbackType } from '../Widget';
import { styles } from './styles';

interface IFormProps {
    feedbackType: FeedbackType;
    onRestartFeedback: () => void;
    onFeedbackSent: () => void;
}

export function Form({ feedbackType, onRestartFeedback, onFeedbackSent }: IFormProps) {
    const feedbackInfo = feedbackTypes[feedbackType];
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);
    const [comment, setComment] = useState<string>('');

    function handleRestartScreenshot() {
        setScreenshot(null)
    }

    function handleTakeScreenshot() {
        captureScreen({
            format: 'jpg',
            result: 'base64',
            quality: 0.8,
        }).then(uri => {
            uri && setScreenshot(uri);
        }).catch(err => { console.log(err) })
    }

    async function handleSubmit() {
        if (isSendingFeedback) return
        console.log('Sending feedback...');
        setIsSendingFeedback(true);

        try {
            await apiRequest.post('/feedbacks', {
                type: feedbackType,
                screenshot: screenshot && `data:image/png;base64, ${screenshot}`,
                comment
            })
            onFeedbackSent();
        } catch (err) {
            console.log(err);
            setIsSendingFeedback(false);
        }
        onFeedbackSent();
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={onRestartFeedback}
                    style={styles.headerButton}
                >
                    <ArrowLeft
                        size={24}
                        weight="bold"
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Image
                        style={styles.image}
                        source={screenshot ? screenshot : feedbackInfo.image}
                    />
                    <Text
                        style={styles.title}>
                        {feedbackInfo.title}
                    </Text>
                </View>
            </View>
            <TextInput
                style={styles.textInput}
                multiline
                placeholder={feedbackInfo.placeholder}
                placeholderTextColor={theme.colors.text_secondary}
                onChangeText={setComment}
            />

            <View style={styles.buttonsContainer} >
                <ScreenshotButton
                    screenshot={screenshot}
                    onTakeScreenshot={handleTakeScreenshot}
                    onRemoveScreenshot={handleRestartScreenshot}
                />
                <SubmitButton
                    isLoading={isSendingFeedback}
                    onPress={async () => await handleSubmit()}
                    disabled={!comment}
                />

            </View>
        </View>
    );
}

function addScreenshotListener(arg0: () => void) {
    throw new Error('Function not implemented.');
}
