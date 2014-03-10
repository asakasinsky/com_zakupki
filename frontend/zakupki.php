<?php
defined( '_JEXEC' ) or die( 'Restricted access' );

// подключаем базовый контроллер
require_once(JPATH_COMPONENT.DS.'controller.php');

// по необходимости подключаем дополнительный контроллер.
$controller = JRequest::getCmd('controller');

if ($controller)
{
	// указываем путь
	$path = JPATH_COMPONENT . DS . 'controllers' . DS . $controller . ' . php';
	jimport('joomla.filesystem.file');
	if (JFile::exists($path)) {
		// контроллер существует - подключаем его
		require_once($path);
	} else {
		// контроллер не существует - выдаём ошибку
		JError::raiseError(500, JText::_('Неизвестный контроллер'));
	}
} else {
	$controller = '';
}

// создаем контроллер
$classname = 'ZakupkiController' . ucfirst($controller);
$controller = new $classname();

// выполняем задачу
$controller->execute(JRequest::getCmd('task', ' '));

// // выполняем редирект
// $controller->redirect();
