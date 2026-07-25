import type { NavigationDataType } from "@/client/core/types/navigation";

const NavigationData: NavigationDataType = [
    {
        id: 1,
        title: "Home",
        href: "/"
    },
    {
        id: 2,
        title: "Books",
        href: "/books"
    },
    {
        id: 3,
        title: "Papers",
        href: "/papers"
    },
    {
        id: 4,
        title: "About Us",
        href: "/about"
    },
];

export {
    NavigationData
};