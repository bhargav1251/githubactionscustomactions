import {getInput, info, notice, setOutput} from '@actions/core'
import {context} from "@actions/github";

const run = () => {
    const bucketName = getInput('bucket');
    const bucketRegion = getInput('bucket-region');
    const artifactKey = getInput('artifact-key');
    setOutput('website-url', "https://")
    notice('the github context is ', context.repo)

    info("This is my custom action")
    notice("this is my notice")
}
run()
