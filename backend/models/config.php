<?php

// защищаемся от прямого доступа
defined('_JEXEC') or die('Restricted Access');
// импортируем класс JModel
jimport('joomla.application.component.model');
/**
 * Foobar Model
 */
class ZakupkiModelConfig extends JModel
{
	/**
	 * Data for saving
	 * @access private array
	 */
	private $_data4save ;

	/**
	 * Данные config
	 * @access private array
	 */
	private $_config;

	function __construct()
	{
		parent::__construct();
		$this->_data4save = JRequest::getVar('configFormData', null, 'post', 'array');
		if($this->_data4save){
			$this->save();
		}
	}

	function save()
	{
		$db = &$this->getDBO();
		foreach ($this->_data4save as $key=>$value) {
			$query 	= "UPDATE ". $db->nameQuote('#__zakupki_config') ." SET ". $db->nameQuote("value") ."=". $db->Quote($value) ." WHERE ". $db->nameQuote(param) ."=". $db->Quote($key ).";";
        	$db->setQuery($query);
        	$db->query();
		}
	}

	function getConfig()
	{
		if (!$this->_config)
		{
			$db = &$this->getDBO();
			$query 	= 'SELECT * FROM ' . $db->nameQuote('#__zakupki_config');
			$db->setQuery($query);
			$result = $db->loadObjectList();
			if($result)
			{
				$this->_config = array();
				foreach ($result as $row) {
					$this->_config[$row->param] = $row->value;
				}
			}
			return $this->_config;
		}
	}
}
