function genReadMe(theData) {
    // destructure page data by section
    const { projectTitle, projectDescription, applicationSite, installationInstructions, usageInstructions, contributionGuidelines, tests, licenses, ...rest } = theData;

    // create the about section
    // const markUpLanguage = (templateData) => {

    return `

        # ${projectTitle} . 


        ## Project Description
        
        ${projectDescription}

        ###${applicationSite}
        
        ## Installation

        ${installationInstructions}
        
        ## Usage

        ${usageInstructions}
        
        ## Contribution Guidelines
        
        ${contributionGuidelines}
        
        ## Tests
        ${tests}
        
        ## License
        
        ${licenses}

        `;
}

module.exports = genReadMe;

