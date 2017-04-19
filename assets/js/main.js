var texto  = document.createElement("span");
             document.body.appendChild(texto);
             texto.setAttribute("class","text");

var nombre = document.createTextNode("Nombre Apellido");
             texto.appendChild(nombre);

var box1   = document.createElement("div");
             document.body.appendChild(box1);
             box1.setAttribute("id","box1");
             document.getElementById("box1").appendChild(texto);

var box2   = document.createElement("div");
             document.body.appendChild(box2);
             box2.setAttribute("id","box2");

var marina = document.createElement("img");
             marina.setAttribute("id","marina");
             marina.setAttribute("src","img/marina.jpg")
             marina.setAttribute("class","pic")
             document.body.appendChild(marina);
             document.getElementById("box1").appendChild(marina);


var lucy   = document.createElement("img");
             lucy.setAttribute("id","lucy");
             lucy.setAttribute("src","img/lucy.jpg")
             lucy.setAttribute("class","pic")
             document.body.appendChild(lucy);
             document.getElementById("box1").appendChild(lucy);

var anai   = document.createElement("img");
             anai.setAttribute("id","anai");
             anai.setAttribute("src","img/anai.jpg")
             anai.setAttribute("class","pic")
             document.body.appendChild(anai);
             document.getElementById("box1").appendChild(anai);

var mercurio = document.createElement("img");
             mercurio.setAttribute("id","mercurio");
             mercurio.setAttribute("src","img/mercurio.jpg")
             mercurio.setAttribute("class","pic")
             document.body.appendChild(mercurio);
             document.getElementById("box2").appendChild(mercurio);

var neptuno = document.createElement("img");
             neptuno.setAttribute("id","neptuno");
             neptuno.setAttribute("src","img/neptuno.jpg")
             neptuno.setAttribute("class","pic")
             document.body.appendChild(neptuno);
             document.getElementById("box2").appendChild(neptuno);

var urano   = document.createElement("img");
             urano.setAttribute("id","urano");
             urano.setAttribute("src","img/urano.jpg")
             urano.setAttribute("class","pic")
             document.body.appendChild(urano);
             document.getElementById("box2").appendChild(urano);
