<?php

// защищаемся от прямого доступа
defined('_JEXEC') or die('Restricted Access');
// импортируем класс JModel
jimport('joomla.application.component.model');
/**
 * Foobar Model
 */
class ZakupkiModelOkdp extends JModel
{
	/**
	 * okdp ID
	 * @access private int
	 */
	private $_parentId;

	/**
	 * Данные okdp
	 * @access private object
	 */
	private $_okdp;

	function __construct()
	{
		parent::__construct();
		$this->_parentId = JRequest::getVar('okdpParentId', 0, 'DEFAULT', 'int');
	}

	function getByParentId()
	{
		if (!$this->_okdp)
		{
			$db = &$this->getDBO();
			$query 	= 'SELECT * FROM ' . $db->nameQuote('#__zakupki_okdp')
				. ' WHERE ' . $db->nameQuote('parentId') . ' = ' . $this->_parentId;
			$db->setQuery($query);
			$this->_okdp = $db->loadObjectList();
			//возвращаем foobar данные
			return $this->_okdp;
		}
	}
}
