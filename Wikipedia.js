function EXTRACT(prefix,s) {
return s.substr(prefix.length);
}

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}

function WIKIID(data) {
return EXTRACT("https://en.wikipedia.org/wiki/",data[3][0]);		
}

function WIKI(query) {
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&format=json&search="+encodeURI(query)+"&callback=?";
return $.getJSON(url);
}

function WIKIAC(data,prop) {
if(prop=="title") return data[1][0];
if(prop=="desc") return data[2][0];
if(prop=="url") return data[3][0];	
}


function WIKICONT(title) {
var url = "https://en.wikipedia.org/w/api.php?action=query&titles="+title+"&prop=extracts&format=json&callback=?";	
return $.getJSON(url);	
}

function WIKITHUMB(title) {
var url = "https://en.wikipedia.org/w/api.php?action=query&titles="+title+"&prop=pageimages&format=json&pithumbsize=300&callback=?"	
return $.getJSON(url);	
}

function WIKIIMG(data,type) {
var key = Object.keys(data.query.pages)[0];
if(type=="src") return  data.query.pages[key].thumbnail.source;
if(type=="title") return  data.query.pages[key].pageimage;
if(type=="width") return data.query.pages[key].thumbnail.width;
if(type=="height") return data.query.pages[key].thumbnail.height;	
	
}


function WIKIHTML(title) {
var url = "https://en.wikipedia.org/w/api.php?action=mobileview&page="+title+"&sections=0&callback=?&format=json";	
return $.getJSON(url);

}