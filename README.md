# Wikipedia.js
API.js demonstrates the usage of wikipedia api

##Dependencies : Jquery

##Wikipedia.js
This JavaScript contains functions related to Wikipedia API .

###List of functions
The query arguement in following function should be a string. For example : query = "Steve Jobs" .

*__WIKI(query)__ : This functions sends an request to search wikipedia for entered query for best result.

The data arguement in following functions should be the response of function WIKI() . For Example: data = WIKI("Steve Jobs").

The prop arguement can be "title" :Gets title of Title page , "desc" : Description of page , "url" : The url of page. 

*__WIKIID(data)__: Gets page ID from given search data.

*__WIKIAC(data,prop)__: Gets props of given search data.



Sample Usage

``` javascript
query = "any string" ;
WIKI(query).done(function(data) {
$("#link").html('<a href="'+WIKIAC(data,"url")+'" >'+WIKIAC(data,"title")+'</a>');
});
```

The id arguement in following functions should be the output of function WIKIID()

*__WIKITHUMB(id)__ : Sends AJAX request to get suitable image for given page.

data arguement in following function is response of WIKITHUMB() function.

*__WIKIIMG(data,type)__ : To get properties of image.



Sample usage

``` javascript
query = "sample string";
WIKI(query).done(function(data) {
WIKITHUMB(WIKIID(data)).done(function(data) {
$('#div').append('<img src="'+WIKIIMG(data,"src")+'" title="'+WIKIIMG(data,"title")+'" />');
});
});
```

*__WIKIHTML(id)__:sends request to get information of any page in HTML format.


Sample Usage

``` javascript
query = "any string";
WIKI(query).done(function(data) {
WIKIHTML(WIKIID(data)).done(function(data) {
$(".mob").html(data.mobileview.sections[0].text);
});
});
```
