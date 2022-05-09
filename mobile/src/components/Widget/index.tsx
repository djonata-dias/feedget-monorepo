import React, { useRef, useState } from 'react';
import {
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    View
} from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native'
import { theme } from '../../theme';
import { styles } from './styles';
import BottomSheet from '@gorhom/bottom-sheet';
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
import { Copyright } from '../Copyright';
import { Success } from '../Success';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

    function handleFeedbackRestart() {
        setFeedbackSent(false);
        setFeedbackType(null)
    }

    function handleOpen() {
        bottomSheetRef.current?.expand()
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={styles.container}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleOpen}
                    >
                        <ChatTeardropDots
                            size={24}
                            weight="bold"
                            color={theme.colors.text_on_brand_color}
                        />
                    </TouchableOpacity>
                    <BottomSheet
                        ref={bottomSheetRef}
                        snapPoints={[1, 280]}
                        backgroundStyle={styles.modal}
                        handleIndicatorStyle={styles.indicator}
                    >
                        {feedbackSent ? <Success onFeedbackRestartRequested={handleFeedbackRestart} /> : (!feedbackType ?
                            <Options onHandleSetFeedback={setFeedbackType} /> :
                            <Form
                                feedbackType={feedbackType}
                                onRestartFeedback={handleFeedbackRestart}
                                onFeedbackSent={() => setFeedbackSent(true)}
                            />)
                        }
                        <Copyright />
                    </BottomSheet>
                </View>
            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
    );
}

export default Widget;