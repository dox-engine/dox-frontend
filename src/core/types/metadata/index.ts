// Metadata typing is for making each pages metadata dynamic
// And making project scalabale and more readable by
// Doing best practices and clean-coding rules

// Page titles are in enum form so it can be set
// for each page and making each page title dynamic
enum PAGE_TITLES {
    HOME = "main page | DOX-ENGINE",
    BOOKS = "books page | DOX-ENGINE",
    PAPERS = "papers page | DOX-ENGINE",
    ABOUT = "about us page | DOX-ENGINE",
    NOT_FOUND = "Not found ! | DOX-ENGINE",
    FORBIDDEN = "Forbidden ! | DOX-ENGINE",
    INTERNAL = "internal error ! | DOX-ENGINE",
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