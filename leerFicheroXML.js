function gestionarFicheroXML(xmlDoc){
	let texto = "<table><tr><th>Titulo</th><th>Autor</th></tr>";
	let titulos = xmlDoc.getElementsByTagName("titulo");
	let autores = xmlDoc.getElementsByTagName("autor");
	let precios = xmlDoc.getElementsByTagName("precio");
	let etiqueta = "";
	for (i=0;i<titulos.length;i++){
		if (precios[i].childNodes[0].nodeValue < 25)
			etiqueta = "menor25";
		else
			etiqueta = "nomenor25";
		texto += "<tr class=\"" + etiqueta + "\">";
		texto += "<td class=\"columna1\">" + titulos[i].childNodes[0].nodeValue + "</td>";
		texto += "<td>" + autores[i].childNodes[0].nodeValue + "</td>";
		texto += "</tr>";
	}
	texto += "</table>";
	document.getElementById('tablalibros').innerHTML = texto;	
}
window.addEventListener("load", function(event) {
    let xmlDoc = loadLDocA("libros.xml","xml");
})