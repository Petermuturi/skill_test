function repeated(){ 
	var paragraph = "one two two three go go go big small big	how	sample test text to	do it	default	returns string string is is in seconds since what is the end end";
	var arr_words = paragraph.split(" ");

	var new_arr = [];
	for(var i=1; i<arr_words.length; i++){
		var repeated = []
		for(var j=1; j<arr_words.length; j++){
			if(arr_words[j] === arr_words[i-1]){
				repeated.push(arr_words[j])
			}else{
				i = j + 1;
			}
		}
		new_arr.push(repeated)
	}

	var final_arr = [];
	for(var x=0; x<new_arr[0].length; x++){
		if(new_arr[0][x] === new_arr[0][x+1]){
			final_arr.push(new_arr[0][x], new_arr[0][x], new_arr[0][x])
			x = x+1;
		}else{
			final_arr.push(new_arr[0][x], new_arr[0][x])
		}
	}
	console.log (final_arr)
	document.getElementById('view').innerHTML = final_arr
}