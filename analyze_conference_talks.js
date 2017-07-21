//use this code on any conference page to get all the words and how often they were used.

var body = document.querySelector('.body-block').innerText.replace(/\r?\n|\r|\n/g, " ").replace(/\s{2,}/g, " ").match(/\w+/g)

//store all words from conference talk in an object
var obj = {};
for(var i = 0; i < body.length; i++){
	if(obj[body[i]] === undefined){
		obj[body[i]] = {
			text: body[i],
			count: 1
    	};
	}
	else {
		obj[body[i]].count++;
	}
}

//sort by most common words
var sortable = [];
    for(var key in obj){
	sortable.push([obj[key].text, obj[key].count]);
    }
    sortable.sort(function(a, b) {
	return b[1] - a[1];
    });
console.log(sortable);
