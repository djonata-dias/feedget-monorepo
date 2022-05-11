import { successImageUrl } from "../../../../assets";
import CloseButton from "../../../CloseButton";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export default function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
    return <>
        <header>
            <CloseButton />
        </header>
        <div className="flex flex-col items-center py-10 w-[304px]">
            <img src={successImageUrl} alt="" />
            <span className="text-xl mt-2 text-zinc-800 dark:text-zinc-300">Agradecemos o feedback!</span>
            <button
                type="button"
                className="py-2 px-6 mt-6 text-zinc-800 dark:text-zinc-300 bg-zinc-400 dark:bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-500 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
                onClick={onFeedbackRestartRequested}
            >
                Quero enviar outro
            </button>
        </div>
    </>
}