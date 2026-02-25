import { FaGithub, FaTelegram } from "react-icons/fa";

import type { IconTypes } from "@/src/types/iconType";

export const IconData: IconTypes[] = [
    {
        id: 1,
        icon: FaGithub,
        text: "Github",
        to: "https://github.com/dox-engine",
    },
    {
        id: 2,
        icon: FaTelegram,
        text: "Telegram",
        to: "https://t.me/dox_engine",
    },
];