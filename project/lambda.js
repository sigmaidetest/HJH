const ddb = AWS.DynamoDB();
function handle(event, context, callback) {
    ddb.get({
        TableName: 'Invoice',
        Key: {
            invoice_number: 'JJK',
            clienId_date: 'JKJ'
        }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

    



}