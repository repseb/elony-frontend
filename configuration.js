// configuration.js

// Goal: 
// -----
// Allow for dynamic URL setting.

// -----------------------------------------------------------
// ** How to Use and Modify this File **
// 1. Set the environment:
//    - Change 'development' to 'production' when moving to a live app.
// 2. Modify URLs:
//    - Change LOCAL_URL or REMOTE_URL if you're using a different local or live server.
// 3. Modify Navigation URLs:
//    - Add or remove URLs in the navigateUrls array based on your app's needs.
// 4. Home URL
// 5. Debugging:
//    - Open your browser’s developer console to view the logs from console.log() to check settings.
// -------------------------------------------------------------


// 1. Dynamically determine the environment
// Check if the protocol is 'file:' or if the hostname is '127.0.0.1' or 'localhost', indicating a local environment.
const isLocal = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost' || window.location.protocol === 'file:';
const environment = isLocal ? 'development' : 'production';

// 2. URLs for different environments
// - LOCAL_URL is used when the environment is set to 'development' (i.e., when running locally).
// - REMOTE_URL is used when the environment is set to 'production' (i.e., when running on a live server).
const LOCAL_URL = "http://127.0.0.1:5000"; // Local URL (development)
const REMOTE_URL = "https://damen2411-elony-backend-enaaeee5gze4cdeg.westeurope-01.azurewebsites.net"; // Remote URL (production)

// 3. Fetch URLs: These are the URLs the app will use for fetching data, depending on the environment.
// - If the environment is 'development', LOCAL_URL will be used.
// - If the environment is 'production', REMOTE_URL will be used.
// 3. Fetch URLs: Based on the environment
const fetchUrls = [
    environment === 'development' ? LOCAL_URL : REMOTE_URL
];


// 4. Navigation URLs: These are the URLs the app can navigate to, such as Power BI reports or other pages.
const navigateUrls = [
    "https://app.powerbi.com/view?r=eyJrIjoiMGViMmFiYTctZmNjNC00MjY5LTg3MTgtNTNhMTY4MWYyYTZkIiwidCI6IjgxZGJmMzFjLWQ5MTgtNDQ3Yi05YTM1LTBlZTNjN2I1Yjg4ZCIsImMiOjl9",
    "tweetstest.html",
    "elontwitterdetail.html",
    "elontwitteranalyse.html",
    "https://app.powerbi.com/view?r=eyJrIjoiZjkzOWNhMDEtZDBiMC00ZjY2LWFmYzctOWY3Y2Q3OWUzNGQzIiwidCI6IjgxZGJmMzFjLWQ5MTgtNDQ3Yi05YTM1LTBlZTNjN2I1Yjg4ZCIsImMiOjl9",
    "https://app.powerbi.com/view?r=eyJrIjoiN2IxZGYwNjUtZWM0My00ZGE1LTg2ZDAtMzZjZjE0MTkxMWQyIiwidCI6IjgxZGJmMzFjLWQ5MTgtNDQ3Yi05YTM1LTBlZTNjN2I1Yjg4ZCIsImMiOjl9"
];

// 5. Home URL
const homeUrl = ["index.html"];

// 6. Log environment-specific information to the console for debugging
console.log(`Environment: ${environment}`);
console.log(`Fetch URLs:`, fetchUrls);
console.log(`Navigate URLs:`, navigateUrls);
console.log(`Home URL: ${homeUrl}`);
console.log(`Current Path: ${window.location.pathname}`);;