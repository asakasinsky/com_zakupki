<?php
// защита от прямого доступа
defined('_JEXEC') or die('Restricted access');
// подключаем класс JController
jimport('joomla.application.component.controller');

class ZakupkiController extends JController
{
	/**
	 * Конструктор
	 */

	function __construct()
	{
		parent::__construct();
	}

	/**
	 * Типичный для архитектуры MVC view метод
	 */
	public function display()
	{
		$view = $this->getView('config', 'html'); //get the view
		$modelConfig = &$this->getModel('Config');
		$view->assignRef('config', $modelConfig->getConfig()); // assign data from the model
		$view->display(); // display the view
		// parent::display();
	}

}
