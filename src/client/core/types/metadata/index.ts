// Metadata typing is for making each pages metadata dynamic
// And making project scalabale and more readable by
// Doing best practices and clean-coding rules

// Page titles are in enum form so it can be set
// for each page and making each page title dynamic
enum PAGE_TITLES {
    HOME = "DOX-ENGINE | Main Page",
    BOOKS = "DOX-ENGINE | Books Page",
    PAPERS = "DOX-ENGINE | Papers Page",
    PAPERS_DETAIL = "DOX-ENGINE | Download Paper",
    ABOUT = "DOX-ENGINE | About Us Page",
    CONTACT = "DOX-ENGINE | Contact Page",
    NOT_FOUND = "DOX-ENGINE | Not found !",
    FORBIDDEN = "DOX-ENGINE | Forbidden !",
    INTERNAL = "DOX-ENGINE | internal error !",
};

// Page metadata is where we define all of our metadata
// Such as title and description, etc...
// title is both string and enum type becuase
// In some pages we may fetch page title
type PageMetaData = {
    title: PAGE_TITLES | string;
    description: string;
    keywords: string[];
};

export type { PageMetaData };

export { PAGE_TITLES };