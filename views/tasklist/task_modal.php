<!-- Modal -->
<div class="modal fade" id="taskModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="taskModalTitle"></h5>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="control-label col-lg-12 col-md-12 col-sm-12" for="title">Título:</label>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <input type="text" class="form-control" id="title" onkeyup="countLetter(50, 'title');" placeholder="Informe o título da tarefa" name="title" autocomplete="off">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-lg-12 col-md-12 col-sm-12" for="description">Descrição:</label>
                    <div class="col-lg-12 col-md-12 col-sm-12">          
                        <textarea class="form-control" id="description" name="description" onkeyup="countLetter(200, 'description');" autocomplete="off"></textarea>
                    </div>
                </div>                
            </div>
            <input type="hidden" value="" id="taskID">
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="btnCloseModal">Fechar</button>
                <button type="button" class="btn btn-primary" id="btnSave">Salvar</button>
            </div>
        </div>
    </div>
</div>