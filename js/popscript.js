var names;

names = ["Jay z", "Beyonce", "Kanye West", "Lebron James", "New York Yankees", 'Steeve Sprugal', 'Flipboard', 'Syria', "Barack Obama"];

if(names.length>0) {
	
	for (var i=0; i<names.length; i++){

		var namelist= document.getElementById(i);
		namelist.textContent = names[i];
	}

}