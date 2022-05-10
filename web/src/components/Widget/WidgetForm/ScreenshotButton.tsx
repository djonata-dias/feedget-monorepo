import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import Loading from "../../Loading";

interface ScreenshotButtonProps {
    onScreenshotTaken: (screenshot: string | null) => void;
    screenshot: string | null;
}

export default function ScreeshotButton({ onScreenshotTaken, screenshot }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL("image/png")
        console.log(base64image)
        onScreenshotTaken(base64image)
        setIsTakingScreenshot(false)
    }

    if (screenshot) {
        return (
            <div
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                style={{
                    backgroundImage: `url(${screenshot})`,
                }}
            >
                <button
                    type="button"
                    onClick={() => onScreenshotTaken(null)}
                >
                    <Trash weight="fill" />
                </button>
            </div>
        )
    }
    return (
        <button
            type="button"
            className="p-2 bg-zinc-200 dark:bg-zinc-800 rounded-md border-transparent hover:bg-zinc-400 dark:hover:bg-zinc-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500  transition-colors text-zinc-900 dark:text-zinc-100"
            onClick={handleTakeScreenshot}
        >
            {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
        </button>)
}