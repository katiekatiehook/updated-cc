var crash = document.getElementById("stop")
var eror = document.getElementById("err")
var lt = document.getElementById("DNA")
var dn = document.getElementById("lap-top")
var body = document.getElementById("body")

crash.addEventListener("click", function() {
	var conter = 10;
	while (conter > 0) {
		console.log(conter);
		conter++;
	}
})

eror.addEventListener("click", function() {
	console.error("[gene.{****}]cannot be decripted [{decript matrix}.j-net] needs js.j-link to work [{j-net.override}denied] [target === {****};loc===gene.!****!;] [:begin decript:|load|{j-net},|err|{cannot find js.j-link},|attempt|{j-net.override}, |denied|{j-net.overide}./(load err modal__{trace link===[false]})end./] [hint?{true,('blue,delta')decernible...ture}]")
})
lt.addEventListener("click", function() {
     body.className = "dna"
})
dn.addEventListener("click", function() {
     body.className = "lt"
})

