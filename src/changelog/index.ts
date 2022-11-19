import { configuration } from "./config"
import { Generate } from "html-changelog-generator"

const Changelog = Generate(configuration)

export { Changelog }