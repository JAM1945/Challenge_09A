
 module.exports = templateData => {
    // destructure page data by section
    const { projectTitle, projectDescription, applicationSite, installationInstructions,usageInstructions, contributionGuidelines, tests, license ...rest } = templateData;

            // create the about section
    const markUpLanguage = (templateData) => {

        return `

        # ${projectTitle}


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
        
        ${license}
      `;
    };




