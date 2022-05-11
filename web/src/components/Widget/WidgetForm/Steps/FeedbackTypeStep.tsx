import CloseButton from "../../../CloseButton"
import { FeedbackType, feedbackTypes } from ".."

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void
}

export default function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6 text-zinc-800 dark:text-zinc-300">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full ">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-400 dark:bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span className="text-zinc-800 dark:text-zinc-300">{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}