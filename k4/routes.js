const routes = require('next-routes')();


routes
.add('/id/:accountInfo', '/onlyCreate')
.add('/it/:accountInfo' , '/middle')
.add('/ind/:accountInfo' , '/index2')
.add('/index/:accountInfo', '/onlyCreate')
.add('/myCampaigns/:accountInfo' , '/myCampaigns')
.add('/details/:accountInfo/:address', '/onlyView')
.add('/campaigns/:accountInfo' , '/campaigns/new')
.add('/campaigns/:accountInfo/:address' , '/campaigns/show')
.add('/campaigns/:address/requests' , '/campaigns/requests/index')
.add('/campaigns/:address/requests/new', '/campaigns/requests/new');


module.exports = routes;