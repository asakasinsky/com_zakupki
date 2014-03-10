<?php
// защищаемся от прямого доступа
defined('_JEXEC') or die('Restricted Access');
// импортируем класс JView
jimport('joomla.application.component.view');
/**
 * Foobar View
 */
class ZakupkiViewConfig extends JView
{
	/***
	* рендеринг вида
	*/
	function display()
	{
		//отображаем вид
		parent::display();
	}
}
