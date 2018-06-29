<?php

class Tasklist_model extends CI_Model{
	private $_tableName = "task";

	public function insert($params=array()) {
		$params['created_at'] = date("Y-m-d H:i:s");

		$res['code'] = "E";
		$res['msg']  = "Error ao inserir";

		if ($params) {
			$this->db->insert($this->_tableName, $params);
			$res['code'] = "A";
			$res['msg']  = "Adicionado com sucesso";
		}

		return $res;
	}

	public function get($params = array()) {
		$sqlQuery = "
			SELECT
				id
				,title
				,description
				,is_completed
				,created_at
				,updated_at
			FROM ".$this->_tableName." 
			WHERE is_deleted = 'N'
			ORDER BY created_at DESC
		";

		return $this->db->query($sqlQuery)->result();
	}

	public function update($params=array()) {
		$res['code'] = "E";
		$res['msg']  = "Error ao inserir";

		if ($params) {
			$this->db->where('id', $params['ID']);
			unset($params['ID']);
			$this->db->set($params);
			$this->db->update($this->_tableName);

			$res['code'] = "U";
			$res['msg']  = "Alterado com sucesso";
		}		

		return $res;
	}
}