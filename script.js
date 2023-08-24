function volume_sphere() {
    //Write your code here
  // 4/3 π r³
	let r = document.getElementById('radius').value;
	let volume = (4*3.14*r*r*r);
	return volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
