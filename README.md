This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

#Health Club Locator


##Notes
- You will need to be using at least Node v6 (prefer latest LTS) in order to get everything to work correctly.
If needed `npm install -g nvm` and `nvm install 6` should get you where you need to be.

- to run application `npm start`
- to test application `npm test`

- In order to successfully return the API call one of two things needs to be done:
    - server needs to have CORS enabled in the headers:
    https://stackoverflow.com/a/10892392
    - OR in the interim, for localhost development on Chrome, use this plugin and enable it:
    Allow-Control-Allow-Origin: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

Some other thoughts:
1. Time spent: 16 hours.
2. With more time I would have added the following: pagination for results, a modal for the maps link, a more
successful integration with materail-ui.  This was my first time using material-ui, and I'm not sure I would choose it over Bootstrap.
3. The one test passes, though blows up with an `XMLHttpRequest.xhr.onerror` error.  Looking for a path forward on this issue.
