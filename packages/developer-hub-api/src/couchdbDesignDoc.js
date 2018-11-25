const request = require('superagent');

request
  .put('http://127.0.0.1:5984/dev/_design/my_validation_name')
  .send({
    "validate_doc_update": String(function(newDoc, oldDoc, userCtx) {
        const keys = ["Type", "storyPoint", "description", "title", "deleted", "sprint", "_id", "_rev", "_revisions", "closed", "sprintName"];
        const newDocKeys = Object.keys(newDoc);
        function newDocHaveAllKeys() {
            let hasAllKeys = true;
            newDocKeys.forEach(key => {
                if(hasAllKeys) {
                    hasAllKeys = keys.includes(key);
                }
            })
            return hasAllKeys;
        }
        if (newDocHaveAllKeys()) {
            return; 
        } else {
            throw({forbidden : Object.keys(newDoc)}) 
        }
    })
  })
  .then(() => {
      console.log('got here');
  })