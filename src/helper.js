export function ruppeeFormat(value) {
	value=value.toString();
	var afterPoint = '';
	if(value.indexOf('.') > 0)
	   afterPoint = value.substring(value.indevalueOf('.'),value.length);
	value = Math.floor(value);
	value=value.toString();
	var lastThree = value.substring(value.length-3);
	var otherNumbers = value.substring(0,value.length-3);
	if(otherNumbers !== '')
	    lastThree = ',' + lastThree;
	var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
	return res;
}

export function isAuthenticated() {
	let isLoggedIn = sessionStorage.getItem("userId");
	if(isLoggedIn)
		return true;
	return false;
}