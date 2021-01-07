
	document.getElementById('tombol').onclick = function(){
		var a = parseInt(document.getElementById('nilaia').value);
		var b = parseInt(document.getElementById('nilaib').value);
		var c = parseInt(document.getElementById('nilaic').value);

		document.getElementById('det').innerHTML = "determinan = " + determinan(a,b,c) + "<BR>";

		if (determinan(a,b,c)>0) {
			var akar = cariakar(a,b,c)
			document.getElementById('akar').innerHTML = "akarnya adalah : " + akar[0] + " dan " + akar[1];
		}
		else if (determinan(a,b,c)==0) {
			var akar = cariakar(a,b,c)
			document.getElementById('akar').innerHTML = "akarnya kembar yaitu : " + akar[0];
		}
		else {
			document.getElementById('akar').innerHTML = "akar imaginer"
		}

	}
	


function determinan(a,b,c){
	var hasil = b*b - 4*a*c;
	return hasil
}

function cariakar(a,b,c){
	var hasil = Math.sqrt(determinan(a,b,c))/(2*a)
	var x1 = -b/(2*a) + hasil
	var x2 = -b/(2*a) - hasil
	return [x1,x2]
}
