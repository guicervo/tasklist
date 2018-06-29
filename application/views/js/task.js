$(document).ready(function() {
	getTask();
});

$("#btnCad").on("click", function() {
	var action = $(this).data("action");

	if (action == "cad") {
		$("#taskModalTitle").html("Cadastrar Tarefa");
		$("#taskModal").modal("show");	
	} else if (action == "update") {

	} else {
		alert("Ação inválida.");
		return;
	}
	
});

$("#btnCloseModal").on("click", function() {
	$("#taskID"   ).val("");
	$("#titulo"	  ).val("");
	$("#descricao").val("");
	$("#taskModal").modal("hide");	
	$("#btnSave").prop("disabled", false);
});

$("#btnSave").on("click", function() {
	$("#btnSave").prop("disabled", true);
	var taskID = $("#taskID").val();

	if (!validateFields()) 
		return false;

	var jsonData = {
		title 	   : $("#titulo"	  ).val(),
		description: $("#descricao").val()
	};
	
	var url = "insert";
	if (taskID != "") {
		url 	    = "update";
		jsonData.id = taskID;
	} 

	$.ajax({
	  	url: 'http://tasklist.guio.esy.es/Tasklist/' + url,
	   	type: 'POST',
	    data: {data: jsonData},
	    success: function(response) {
	    	var resParse = JSON.parse(response);
	    	
	    	if (resParse.code == "A") {
	    		getTask();
	    		alert("Tarefa adicionada com sucesso.");
	    		$("#btnCloseModal").trigger("click");
	    	}
	    },
	    error: function() {
	    	alert("Error ao cadastrar a tarefa");
	    }
	});  

});

function getTask() {
	$.ajax({
	  	url: 'http://tasklist.guio.esy.es/Tasklist/get',
	   	type: 'GET',
	    success: function(response) {
	    	var resParse = JSON.parse(response);	    	
	    	var bodyContent = "";

	    	resParse.forEach(function(item) {
	    		bodyContent += "<tr>";
	    		bodyContent += "		<td>"+item.title+"</td>";
	    		bodyContent += "		<td>"+item.description+"</td>";
	    		bodyContent += "		<td>"+item.created_at+"</td>";
	    		bodyContent += "		<td>"+((item.updated_at) ? item.updated_at : '' )+"</td>";
	    		bodyContent += "		<td></td>";
	    		bodyContent += "		<td><a href='javascript:void(0)' onclick='deleteTask("+item.id+")' class='delete' data-id='"+item.id+"'>X</a></td>";
	    		bodyContent += "</tr>";
	    	});
	    	
	    	$("#tblTaskList").html(bodyContent);
	    },
	    error: function() {
	    	alert("Error ao buscar informações");
	    }
	}); 
}

function deleteTask(id) {
	$.ajax({
	  	url: 'http://tasklist.guio.esy.es/Tasklist/delete',
	   	type: 'GET',
	    data: {data: id},
	    success: function(response) {
	    	var resParse = JSON.parse(response);
	    	
	    	if (resParse.code == "U") {
	    		getTask();
	    		alert("Deletado com sucesso.");
	    		$("#btnCloseModal").trigger("click");
	    	}
	    },
	    error: function() {
	    	alert("Error ao cadastrar a tarefa");
	    }
	}); 	
}

function validateFields() {
	// Para validação poderia ser usado biblioteca validate js;
	var msg = "";

	if (!$("#descricao").val()) {
		msg = "Preencha o campo Descrição";
	}	

	if (!$("#titulo").val()) {
		msg = "Preencha o campo Título";
	}

	if (msg == "") {
		return true;
	} else {
		alert(msg);
		return false;
	}
}

function countLetter(maxSize, id) {
	var inputVal = $("#"+id).val().length;
	if (inputVal >= maxSize) {
		alert("Valor máximo de caracter atingido. Limite : " + maxSize);
		$("#"+id).val($("#"+id).val().substr(0, maxSize));
	}
}