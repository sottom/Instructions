//use this code on any conference page to get all the words and how often they were used.
//still need to reorder it

var body = document.querySelector('.body-block').innerText.replace(/\r?\n|\r|\n/g, " ").replace(/\s{2,}/g, " ").match(/\w+/g)

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

console.log(obj);
