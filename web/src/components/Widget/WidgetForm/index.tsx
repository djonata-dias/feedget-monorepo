import CloseButton from "../../CloseButton";
import { ideaImageUrl, bugImageUrl, thoughtImageUrl } from "../../../assets"
import { useState } from "react";
import { FeedbackContentStep, FeedbackSuccessStep, FeedbackTypeStep } from "./Steps";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
        placeholder:
            "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...",
    },
    IDEA: {
        title: 'Idéia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        },
        placeholder:
            "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!",

    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
        placeholder: "Queremos te ouvir. O que você gostaria de nos dizer?",

    },
};


export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

    function handleFeedbackRestart() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    return (
        <>
            <div className="bg-zinc-300 dark:bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

                {
                    feedbackSent ? (
                        <FeedbackSuccessStep onFeedbackRestartRequested={handleFeedbackRestart} />
                    ) : (
                        <>
                            {!feedbackType ?
                                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} /> :
                                <FeedbackContentStep
                                    feedbackType={feedbackType}
                                    onFeedbackRestartRequested={handleFeedbackRestart}
                                    onFeedbackSent={() => setFeedbackSent(true)}
                                />}
                        </>
                    )
                }

                <footer className="text-xs text-neutral-800 dark:text-neutral-400">
                    Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/djonata-dias" target="_blank">Djonata S. Dias</a>
                </footer>
            </div>
        </>
    )

}