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
			        	<th>Criado em</th>
			        	<th>Alterado em</th>
			        	<th>Editar</th>
			        	<th>Excluir</th>
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
