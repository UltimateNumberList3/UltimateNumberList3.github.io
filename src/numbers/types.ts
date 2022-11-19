type Chapter = {
    name: string;
    classes: Class[];
}

type Class = {
    name: string;
    sections: Section[];
}

type Section = {
    name: string;
    subsections: SubSection[];
}

type SubSection = {
    name: string;
    listnumbers: ListNumber[];
}

enum Symbols {
    Milestone,
    BigMilestone,
    Featured,
    NotKnown
}

type ListNumber = {
    word: string;
    number: string;
    symbols: Symbols[];
}

export {Chapter, Class, Section, SubSection, ListNumber, Symbols}