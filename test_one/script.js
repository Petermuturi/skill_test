function next(){
	var one = document.getElementById('one'), 
			two = document.getElementById('two'), 
			three = document.getElementById('three'),
			button = document.getElementsByTagName('button')[0];
	
	switch(button.id){
		case "view_one":
			one.style.display = "none";
			two.style.display = "block";
			three.style.display= "none";
			button.setAttribute("id", "view_two");
			break;

		case "view_two":
			one.style.display = "none";
			two.style.display = "none";
			three.style.display = "block";
			button.setAttribute("id", "view_three");
			break;

		case "view_three":
			one.style.display = "block";
			two.style.display = "none";
			three.style.display = "none";
			button.setAttribute("id", "view_one");
			break;

			default:
				one.style.display = "block";
				two.style.display = "none";
				three.style.display = "none";
				button.setAttribute("id", "view_one");
			break;
	}
}