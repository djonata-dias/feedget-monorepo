import { Menu } from "@headlessui/react";
import { ThemeModeButton } from "./ThemeModeButton";


export default function Header() {


    return (
        <div className="bg-zinc-300 dark:bg-zinc-800 w-full fixed top-0 h-11 flex">
            <ThemeModeButton />
        </div>
    );
}