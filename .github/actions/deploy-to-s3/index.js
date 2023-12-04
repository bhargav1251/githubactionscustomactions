import {getInput, info, notice, setOutput} from '@actions/core'
const run = () => {
    const bucketName = getInput('bucket');
    const bucketRegion = getInput('bucket-region');
    const artifactKey = getInput('artifact-key');
    setOutput('website-url', "https://")
    info("This is my custom action")
    notice("this is my notice")
}
run()
