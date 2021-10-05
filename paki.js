var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
imagenes["Pumagrgr"] = "puma.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", "Tierra", 100, 30));
coleccion.push(new Pakiman("Pokacho", "Aire", 400, 50));
coleccion.push(new Pakiman("Tocinauro", "Tierra", 90, 40));
coleccion.push(new Pakiman("Pumagrgr", "Tierra", 90, 70));

for(var i in imagenes){
  console.log(i);
  document.write(i + "<br>");
}

for (var i in coleccion){
  coleccion[i].mostrar();
}
