'use strict';

var routes = require('next-routes')();

routes.add('/id/:accountInfo', '/onlyCreate').add('/it/:accountInfo', '/middle').add('/ind/:accountInfo', '/index2').add('/index/:accountInfo', '/onlyCreate').add('/myCampaigns/:accountInfo', '/myCampaigns').add('/details/:accountInfo/:address', '/onlyView').add('/campaigns/:accountInfo', '/campaigns/new').add('/campaigns/:accountInfo/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFHQSxPQUNDLEFBREQsSUFDSyxBQURMLG9CQUN5QixBQUR6QixlQUVDLEFBRkQsSUFFSyxBQUZMLG9CQUUwQixBQUYxQixXQUdDLEFBSEQsSUFHSyxBQUhMLHFCQUcyQixBQUgzQixXQUlDLEFBSkQsSUFJSyxBQUpMLHVCQUk0QixBQUo1QixlQUtDLEFBTEQsSUFLSyxBQUxMLDZCQUttQyxBQUxuQyxnQkFNQyxBQU5ELElBTUssQUFOTCxrQ0FNdUMsQUFOdkMsYUFPQyxBQVBELElBT0ssQUFQTCwyQkFPaUMsQUFQakMsa0JBUUMsQUFSRCxJQVFLLEFBUkwsb0NBUTBDLEFBUjFDLG1CQVNDLEFBVEQsSUFTSyxBQVRMLGdDQVNzQyxBQVR0Qyw2QkFVQyxBQVZELElBVUssQUFWTCxvQ0FVeUMsQUFWekM7O0FBYUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Baml0YS5QYW5jaG9saS9EZXNrdG9wL2s0In0=