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
	$("#title"	  ).val("");
	$("#description").val("");
	$("#taskModal").modal("hide");	
	$("#btnSave").prop("disabled", false);
});

$("#btnSave").on("click", function() {
	$("#btnSave").prop("disabled", true);
	var taskID = $("#taskID").val();

	if (!validateFields()) 
		return false;

	var jsonData = {
		title 	   : $("#title"	  ).val(),
		description: $("#description").val()
	};
	
	var url = "insert";
	if (taskID != "") {
		url 	    = "update";
		jsonData.ID = taskID;
	} 

	$.ajax({
	  	url: 'http://tasklist.guio.esy.es/Tasklist/' + url,
	   	type: 'POST',
	    data: {data: jsonData},
	    success: function(response) {
	    	var resParse = JSON.parse(response);
	    	
	    	var msg = (resParse.code == "A") ? 'adicionada' : 'alterada';

	    	alert("Tarefa "+msg+" com sucesso.");

	    	getTask();
	    	$("#btnCloseModal").trigger("click");
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
	    		var status   = (item.is_completed == "Y") ? "checked" : "";
	    		var statusTo = (item.is_completed == "Y") ? "N" : "Y";
	    		
	    		bodyContent += "<tr>";
	    		bodyContent += "		<td>"+item.title+"</td>";
	    		bodyContent += "		<td>"+item.description+"</td>";
	    		bodyContent += "		<td><input class='chkStatus' data-id='"+item.id+"' data-statusTo='"+statusTo+"' type='checkbox' "+status+" data-size='mini' data-toggle='toggle' data-on='Concluído' data-off='Em Aberto' data-onstyle='success' data-offstyle='warning'></td>";
	    		bodyContent += "		<td>"+formatDateTime(item.created_at)+"</td>";
	    		bodyContent += "		<td>"+((item.updated_at) ? formatDateTime(item.updated_at) : '' )+"</td>";
	    		bodyContent += "		<td><a href='javascript:void(0)' onclick='getTaskById("+item.id+")' class='update' data-id='"+item.id+"'><i class='fa fa-pen'></i></a></td>";
	    		bodyContent += "		<td><a href='javascript:void(0)' onclick='deleteTask("+item.id+")' class='delete' data-id='"+item.id+"'><i class='fa fa-trash-alt'></i></a></td>";
	    		bodyContent += "</tr>";
	    	});
	    	
	    	$("#tblTaskList").html(bodyContent);
	    	renderToogle();
	    },
	    error: function() {
	    	alert("Error ao buscar informações");
	    }
	}); 
}

function renderToogle() {
	$('.chkStatus').bootstrapToggle().change(function() {
		
		var dataJson = {
			ID : $(this).data("id"),
			is_completed : $(this).data("statusto")
		}
		
		$.ajax({
		  	url: 'http://tasklist.guio.esy.es/Tasklist/update',
		   	type: 'POST',
		    data: {data: dataJson},
		    success: function(response) {
		    	var resParse = JSON.parse(response);
		    	getTask();
		    },
		    error: function() {
		    	alert("Error ao cadastrar a tarefa");
		    }
		}); 		
	});
}

function changeStatus(id) {
	// \
	console.log(status);
	console.log(id);
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

function getTaskById(id) {
	$.ajax({
	  	url: 'http://tasklist.guio.esy.es/Tasklist/get',
	   	type: 'GET',
	    data: {data: id},
	    success: function(response) {
	    	var resParse = JSON.parse(response);
	    	$("#taskModal"	   ).modal("show");
	    	$("#taskModalTitle").html("Alterar Tarefa");
	    	$("#title"	  	   ).val(resParse[0].title);
	    	$("#description"   ).val(resParse[0].description);
	    	$("#taskID"	  	   ).val(resParse[0].id);
	    },
	    error: function() {
	    	alert("Error ao cadastrar a tarefa");
	    }
	}); 
}

function validateFields() {
	// Para validação poderia ser usado biblioteca validate js;
	var msg = "";

	if (!$("#description").val()) {
		msg = "Preencha o campo Descrição";
	}	

	if (!$("#title").val()) {
		msg = "Preencha o campo Título";
	}

	if (msg == "") {
		return true;
	} else {
		alert(msg);
		return false;
	}
}

function formatDateTime(datetime) {
	return moment(datetime).format('DD/MM/YYYY H:m:s');
}

function countLetter(maxSize, id) {
	var inputVal = $("#"+id).val().length;
	if (inputVal >= maxSize) {
		alert("Valor máximo de caracter atingido. Limite : " + maxSize);
		$("#"+id).val($("#"+id).val().substr(0, maxSize));
	}
}