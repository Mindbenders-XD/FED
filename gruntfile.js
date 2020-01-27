/// <binding ProjectOpened='default' />
module.exports = function(grunt){
    
    //To show the time taken for the grunt task to complete
    require('time-grunt')(grunt);
    
    //Automatically load ALL the grunt plugin from the node modules
    require('load-grunt-config')(grunt, {

        // To load only the required grunt task to reduce the time to complete
        jitGrunt: {
            jitGrunt: true
        }

    });
    
};