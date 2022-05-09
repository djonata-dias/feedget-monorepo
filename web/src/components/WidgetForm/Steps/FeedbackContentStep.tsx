import CloseButton from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "..";
import { ArrowLeft, Camera } from "phosphor-react";
import ScreeshotButton from "../ScreenshotButton";
import { FormEvent, useState } from "react";
import { apiRequest } from "libs/apiRequest";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

export default function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent
}: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState<string>('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        apiRequest.post('/feedback', {
            type: feedbackType,
            comment,
            screenshot
        })
        onFeedbackSent();
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft />
                </button>
                <span className="flex items-center gap-2 text-xl leading-6">
                    <img
                        src={feedbackTypeInfo.image.source}
                        alt={feedbackTypeInfo.image.alt}
                        className="w-6 h-6"
                    />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form className="my-4 w-full" onSubmit={handleSubmit}>
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] tex-sm placeholder-zinc-400 text-zinc-100  border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 rezise:none scrollbar scrollbar-color  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes sobre o que está acontecendo..."
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                />
                <footer className="flex gap-2 mt-2" >
                    <ScreeshotButton
                        screenshot={screenshot}
                        onScreenshotTaken={setScreenshot}
                    />
                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                        disabled={!comment.length}
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}