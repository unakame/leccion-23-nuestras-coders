var texto1 = document.createElement("span");
             document.body.appendChild(texto1);
             texto1.setAttribute("id","texto-1");

var texto2 = document.createElement("span");
             document.body.appendChild(texto2);
             texto2.setAttribute("id","texto-2");

var texto3 = document.createElement("span");
             document.body.appendChild(texto3);
             texto3.setAttribute("id","texto-3");

var texto4 = document.createElement("span");
             document.body.appendChild(texto4);
             texto4.setAttribute("id","texto-4");

var texto5 = document.createElement("span");
             document.body.appendChild(texto5);
             texto5.setAttribute("id","texto-5");

var texto6 = document.createElement("span");
             document.body.appendChild(texto6);
             texto6.setAttribute("id","texto-6");

var nombre1 = document.createTextNode("Nombre Apellido");
              texto1.appendChild(nombre1);

var nombre2 = document.createTextNode("Nombre Apellido");
              texto2.appendChild(nombre2);

var nombre3 = document.createTextNode("Nombre Apellido");
              texto3.appendChild(nombre3);

var nombre4 = document.createTextNode("Nombre Apellido");
              texto4.appendChild(nombre4);

var nombre5 = document.createTextNode("Nombre Apellido");
              texto5.appendChild(nombre5);

var nombre6 = document.createTextNode("Nombre Apellido");
              texto6.appendChild(nombre6);

var box1   = document.createElement("div");
             document.body.appendChild(box1);
             box1.setAttribute("id","box1");
             document.getElementById("box1").appendChild(texto1);
             document.getElementById("box1").appendChild(texto2);
             document.getElementById("box1").appendChild(texto3);

var box2   = document.createElement("div");
             document.body.appendChild(box2);
             box2.setAttribute("id","box2");
             document.getElementById("box2").appendChild(texto4);
             document.getElementById("box2").appendChild(texto5);
             document.getElementById("box2").appendChild(texto6);

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
