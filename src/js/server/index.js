import bodyParser from 'body-parser';
import restana from 'restana';

function setup () {
  let app;

  app = restana ();
  app.use (bodyParser.json ());

  app.get ('/UserDetailsByEmail/:email', async (req, res) => {
    /*
    access-control-allow-credentials: true
    access-control-allow-headers: *
    access-control-allow-methods: GET,PUT,POST,DELETE,HEAD,OPTIONS,PATCH,PROPFIND,PROPPATCH,MKCOL,COPY,MOVE,LOCK
    access-control-allow-origin: https://inf-preprod-swat.azurewebsites.net  access-control-expose-headers: *  content-encoding: gzip  content-length: 542  content-type: application/json; charset=utf-8  date: Tue,04 May 2021 21:03:45 GMT  vary: Accept-Encoding
    */
    res.send ({
      "userPersonalInfoId": 7423,
      "firstName": "Carrier",
      "lastName": "Admin2",
      "phone": "1111111111",
      "email": "carrier-admin@yopmail.com",
      "isActive": true,
      "extension": null,
      "position": "Carrier Admin",
      "activityDateTime": "2021-04-22T16:53:26.6888199",
      "initialGuideCompleted": null,
      "isAgreedWithRule": false,
      "userUniqId": "36b42fdb-f199-4726-9247-71620bbfa692",
      "isAllLocation": false,
      "isThirdPartyVisibility": false,
      "defaultShipmentIdentifier": 0,
      "isShowThirdParty": true,
      "defaultLabelType": 1,
      "creationDate": "2020-06-05T12:59:43.4664726",
      "carrierAssociations": [
        {
          "id": 1084,
          "name": "Central Freight Lines"
        }
      ],
      "customerAssociations": []
    });
  });
}

setup ();
