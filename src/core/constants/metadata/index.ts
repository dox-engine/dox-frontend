// Importing Page metadata typings
import { PAGE_TITLES, type PageMetaData } from "@/src/core/types/metadata";

// Home Page specific matadata
const HomePageMetaData: PageMetaData = {
    title: PAGE_TITLES.HOME,
    description: "Wellcome to the main page",
    keywords: [
        "books",
        "papres",
        "scientific"
    ],
};

// Books Page specific matadata
const BooksPageMetaData: PageMetaData = {
    title: PAGE_TITLES.BOOKS,
    description: "Wellcome to the books page",
    keywords: [
        "books",
        "papres",
        "scientific"
    ],
};

// About us Page specific matadata
const AboutPageMetaData: PageMetaData = {
    title: PAGE_TITLES.BOOKS,
    description: "Wellcome to the about us page",
    keywords: [
        "books",
        "papres",
        "scientific"
    ],
};

// Error pages metadata
const NotFoundPageMetaData: PageMetaData = {
    title: PAGE_TITLES.NOT_FOUND,
    description: "We are sorry, this page is not available at this moment",
    keywords: [
        "books",
        "papres",
        "scientific"
    ],
};

const ForbiddenPageMetaData: PageMetaData = {
    title: PAGE_TITLES.FORBIDDEN,
    description: "We are sorry, this page is not available at this moment",
    keywords: [
        "books",
        "papres",
        "scientific"
    ],
};

const InternalPageMetaData: PageMetaData = {
    title: PAGE_TITLES.INTERNAL,
    description: "We are sorry, this page is not available at this moment",
    keywords: [
        "books",
        "papres",
        "scientific"
    ],
};

export {
    HomePageMetaData,
    BooksPageMetaData,
    AboutPageMetaData,
    NotFoundPageMetaData,
    ForbiddenPageMetaData,
    InternalPageMetaData
};