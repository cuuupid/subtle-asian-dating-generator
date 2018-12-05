exit(0)


/*

RUN THESE FROM THE CONSOLE AFTER SCROLLING WAYYYYYYYYYYY DOWN THE PAGE

*/


// click all the see more links to expand the post
new Array(...document.getElementsByClassName('see_more_link_inner')).forEach(el => el.click())

// scrape all the post content to an array called "posts"
var posts = new Array(...document.getElementsByClassName('userContent')).map(el => el.innerText)

// this function from daddy SO: https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

// download our posts to json content (json is the universal ABG format)
downloadObjectAsJson(posts, 'posts')

// then put posts.json in this folder