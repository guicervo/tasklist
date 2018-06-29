<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tasklist extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->model('Tasklist_model');
	}


	public function index() {		
		$this->load->view('_main');
	}

	public function insert() {
		$data = $this->input->post("data", TRUE);

		$return = $this->Tasklist_model->insert($data);

		echo json_encode($return);		
	}

	public function get() {
		$return = $this->Tasklist_model->get();

		echo json_encode($return);
	}

	public function delete() {
		$id = $this->input->get('data');
		$params['deleted_at'] = date("Y-m-d H:i:s");
		$params['is_deleted'] = "Y";
		$params['ID']		  = $id;

		$return = $this->Tasklist_model->update($params);

		echo json_encode($return);
	}
}
