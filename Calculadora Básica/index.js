Sumar=function(){
let caja1,caja2,res;
caja1=parseFloat(document.getElementById("valor1").value);
caja2=parseFloat(document.getElementById("valor2").value);
res=caja1+caja2;
document.getElementById("Resolver").innerHTML="Total: "+res;
}
Restar=function(){
let caja1,caja2,res;
caja1=parseFloat(document.getElementById("valor1").value);
caja2=parseInt(document.getElementById("valor2").value);
res=caja1-caja2;
document.getElementById("Resolver").innerHTML="Total: "+res;    
}
Multiplicar=function(){
let caja1,caja2,res;
caja1=parseFloat(document.getElementById("valor1").value);
caja2=parseFloat(document.getElementById("valor2").value);
res=caja1*caja2;
document.getElementById("Resolver").innerHTML="Total: "+res;
}
Dividir=function(){
let caja1,caja2,res;
caja1=parseFloat(document.getElementById("valor1").value);
caja2=parseFloat(document.getElementById("valor2").value);
res=caja1/caja2;
document.getElementById("Resolver").innerHTML="Total: "+res;
}
Borrar=function(){
document.getElementById("valor1").value="";
document.getElementById("valor2").value="";
document.getElementById("Resolver").innerHTML="Total: ";
}
