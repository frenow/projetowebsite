    var comentario = localStorage.getItem("comentarios");
    comentario = JSON.parse(comentario); 
    if(comentario == null) 
    comentario = [];

function Adicionar(){
	console.log('adicionar');
    var obj = JSON.stringify({
        Nome       : $("#txtNome").val(),
        Comentario : $("#txtComentario").val()        
    });
    comentario.push(obj);
    localStorage.setItem("comentarios", JSON.stringify(comentario));
    alert("Comentario gravado com sucesso.");
    return true;
}
 
function Listar(){
	
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+

        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
    for(var i in comentario){
        var obj = JSON.parse(comentario[i]);
		
        $("#tblListar tbody").append("<tr><div>");
        $("#tblListar tbody").append("<td><img class='d-flex mr-3 rounded-circle' src='img/comentario.png' alt='' width='50' height='50'>");
        $("#tblListar tbody").append("<div><h5>"+obj.Nome+"</h5>"+obj.Comentario+"</div></td>");
        $("#tblListar tbody").append("</div></tr>");
    }
}
 
$("#frmCadastro").on("submit",function(){
		return Adicionar();   
});