type Chapter = {
    name: string;
    classes: {
        [key: number]: Class;
    };
}

type Class = {
    name: string;
    sections: {
        [key: number]: Section;
    };
}

type Section = {
    name: string;
    subsections: {
        [key: number]: SubSection;
    };
}

type SubSection = {
    name: string;
    listnumbers: {
        [key: number]: ListNumber;
    };
}

type ListNumber = {
    word: string;
    number: string;
    symbols: {
        [key: number]: string;
    };
}

export {Chapter, Class, Section, SubSection, ListNumber}