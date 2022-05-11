import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export default function CloseButton() {
    return (
        <Popover.Button className="top-[1.4rem] right-4 absolute text-zinc-800 dark:text-zinc-300 hover:text-zinc-500 dark:hover:text-zinc-100 " title="Fechar formulário de feedback">
            <X weight="bold" className="w-4 h-4" />
        </Popover.Button>
    )

}