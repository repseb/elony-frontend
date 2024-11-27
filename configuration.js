// configuration.js

// Goal: 
// -----
// Allow for dynamic URL setting.


// How to use: 
// -----------
// In the html-files, configuration.js is called in the variable fetchUrls[0] and navigateUrls[n].

// 1) fetchUrls
//      -- Use local base URL when testing locally, use the remote base URL to test online.
//      
// 2) navigateUrls
//      -- By default, alle navigateUrls are active and used to navigate through the different html pages.


// Fetch URLs (without endpoints)
const fetchUrls = [
    // Uncomment the next line to use the local URL:
    "http://127.0.0.1:5000", // Local base URL

    // Uncomment the next line to use the remote Azure URL:
    //"https://damen2411-elony-backend-enaaeee5gze4cdeg.westeurope-01.azurewebsites.net" // Remote base URL
];

// URLS voor de verschillende pagina's die aan index gelinkt moeten worden
const navigateUrls = [
"https://app.powerbi.com/view?r=eyJrIjoiMGViMmFiYTctZmNjNC00MjY5LTg3MTgtNTNhMTY4MWYyYTZkIiwidCI6IjgxZGJmMzFjLWQ5MTgtNDQ3Yi05YTM1LTBlZTNjN2I1Yjg4ZCIsImMiOjl9",
"tweetstest.html",
"elontwitterdetail.html"
];