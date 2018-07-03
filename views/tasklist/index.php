<div class="container">
	<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12">
	  	<h2>Task List</h2>
	  	<p><button class="btn btn-primary" id="btnCad" data-action="cad">Cadastrar</button></p>  
	  		<table class="table table-hover">
			    <thead>
			      	<tr>
			        	<th>Título</th>
			        	<th>Descrição</th>
			        	<th>Status</th>
			        	<th>Criado em</th>
			        	<th>Alterado em</th>				        	
			        	<th width="5%">Editar</th>
			        	<th width="5%">Excluir</th>
			      	</tr>
			    </thead>
			    <tbody id="tblTaskList">

			    </tbody>
		  	</table>
  		</div>
  	</div>
</div>


<?php $this->load->view('tasklist/task_modal'); ?>

<script type="text/javascript">
	<?php $this->load->view('js/task.js');?>
</script>	
<style type="text/css">
	.toggle-handle {
		background-color: #c3c3c3;
	}
	.toggle-off {
		background-color: #dedbdb;
	}
</style>