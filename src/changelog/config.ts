import { Tools, GenerationArgs, Version, Note, PrereleaseType, NoteType, Tag } from 'html-changelog-generator'

const configuration: GenerationArgs = {
    versions: [
        {
            major: 0,
            minor: 1,
            patch: 0,
            notes: [
                {
                    type: NoteType.Addition,
                    text: "Added Changelog using html-changelog-generator"
                },
                {
                    type: NoteType.Addition,
                    text: "List now goes up to Micrillion"
                },
                {
                    type: NoteType.Change,
                    text: "Made number list text align to center"
                },
                {
                    type: NoteType.Change,
                    text: "Array property in types converted from {[key: number]: type} to type[]"
                },
                {
                    type: NoteType.Change,
                    text: "Changed symbol names into a enum"
                }
            ]
        }
    ],
    classes: {
        version: {
            "prerelease": (version: Version) => Tools.isPrerelease(version),
            "major": (version: Version) => Tools.isMajor(version)
        },
        note: {}
    },
    tags: []
}

export { configuration }