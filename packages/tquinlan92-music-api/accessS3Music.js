var AWS = require('aws-sdk'),
  uuid = require('uuid'),
  documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  var searchParams = {
    Key: {
      "songID": "7eceba60-e946-11e8-85b6-1df10a2f3069"
    },
    TableName: 'tquinlan92Music'
  };
  documentClient.get(searchParams, function(err, data) {
    console.log('err', err);
    if (data) {
      var params = {
        Item: {
          ...data.Item,
          playCount: (data.Item.playCount || 1) + 1
          },
        ReturnConsumedCapacity: "TOTAL",
        TableName: 'tquinlan92Music'
      };
      console.log('params', data);
      documentClient.put(params, function(err, data) {
        callback(null, data);
      });
    } else {
      var params = {
        Item: {
          songID: '7eceba60-e946-11e8-85b6-1df10a2f3069',
          Name: 'tom in DynamoDB',
          playCount: 1
          },
        ReturnConsumedCapacity: "TOTAL",
        TableName: 'tquinlan92Music'
      };
      documentClient.put(params, function(err, data) {
        callback(null, data);
      });
    }
  });
};





var AWS = require('aws-sdk'),
  uuid = require('uuid'),
  documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  var searchParams = {
    Key: {
      "songID": "7eceba60-e946-11e8-85b6-1df10a2f3069"
    },
    TableName: 'tquinlan92Music'
  };
  documentClient.get(searchParams, function(err, data) {
    if (data) {
      callback(null, data.Item.playCount);
    } else {
        console.log('err', err);
        callback(null, err)
    }
  });
};
