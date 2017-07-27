// JavaScript source code
function transformTime(str){
	var split = str.split(":");
	var ampm = str.slice(8);
	if (ampm === 'PM'){
	 var newVar = parseInt(split[0]);
	 var newHour = newVar + 12 ; 
	return newHour+":" + str.slice(3,8) ; //+split[1]+":"+split[2].substring(0,2);
	}
	 else {
	 return str.slice(0,8);
	 }
}

transformTime(12:53:03PM)