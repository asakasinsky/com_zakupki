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
		$view = $this->getView('order', 'html'); //get the view
		// $view->assignRef('data', $data_from_model); // assign data from the model
		$view->display(); // display the view
	}

	function getByParentId()
	{
		$model = &$this->getModel('Okdp');
		$result = $model->getByParentId();
		$data = array();
		if($result)
		{
			foreach ($result as $row) {
				$data[] = array(
		            'key' => $row->id,
		            'hideCheckBox' => (bool) $row->hideCheckBox,
		            'icon' => (bool) $row->icon,
		            'isFolder' => (bool) $row->isFolder,
		            'isLazy' => (bool) $row->isLazy,
		            'parentId' => $row->parentId,
		            'code' => $row->code,
		            'title' => $row->title
		        );
			}
		}
		// Get the document object.
		$document =& JFactory::getDocument();

		// Set the MIME type for JSON output.
		$document->setMimeEncoding('application/json');

		$json_data = json_encode($data);
		echo $json_data;
		JFactory::getApplication()->close(); // or jexit();
	}

	function confirmOrder()
	{
		$view = $this->getView('confirm_order', 'html'); //get the view
		// $view->assignRef('data', $data_from_model); // assign data from the model
		$view->display(); // display the view
	}

	function sendOrder()
	{
		$firstName = JRequest::getVar('firstName', '', 'POST', 'string');
		$lastName = JRequest::getVar('lastName', '', 'POST', 'string');
		$client_email = JRequest::getVar('email', '', 'POST', 'string');
		$phone = JRequest::getVar('phone', '', 'POST', 'string');
		$comment = JRequest::getVar('comment', '', 'POST', 'string');
		$geo = JRequest::getVar('geo', '', 'POST', 'string', JREQUEST_ALLOWRAW);
		$okdp = JRequest::getVar('okdp', '', 'POST', 'string', JREQUEST_ALLOWRAW);
		$price = JRequest::getVar('price', '', 'POST', 'string');

		$string_body = '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title>Заявка с сайта</title>
	<style type="text/css">
		#outlook a{padding:0}body{width:100%!important;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;margin:0;padding:0}.ExternalClass{width:100%}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height:100%}#backgroundTable{margin:0;padding:0;width:100%!important;line-height:100%!important}img{outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}a img{border:0}.image_fix{display:block}p{margin:1em 0}h1,h2,h3,h4,h5,h6{color:black!important}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color:blue!important}h1 a:active,h2 a:active,h3 a:active,h4 a:active,h5 a:active,h6 a:active{color:red!important}h1 a:visited,h2 a:visited,h3 a:visited,h4 a:visited,h5 a:visited,h6 a:visited{color:purple!important}table td{border-collapse:collapse}table{border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0}a{color:orange}@media only screen and (max-device-width:480px){a[href^="tel"],a[href^="sms"]{text-decoration:none;color:blue;pointer-events:none;cursor:default}.mobile_link a[href^="tel"],.mobile_link a[href^="sms"]{text-decoration:default;color:orange!important;pointer-events:auto;cursor:default}}@media only screen and (min-device-width:768px) and (max-device-width:1024px){a[href^="tel"],a[href^="sms"]{text-decoration:none;color:blue;pointer-events:none;cursor:default}.mobile_link a[href^="tel"],.mobile_link a[href^="sms"]{text-decoration:default;color:orange!important;pointer-events:auto;cursor:default}}
		.odd{background-color:#def}.odd td{border-bottom:1px solid #cef}

	</style>

	<!-- Targeting Windows Mobile -->
	<!--[if IEMobile 7]>
	<style type="text/css">

	</style>
	<![endif]-->

	<!-- ***********************************************
	****************************************************
	END MOBILE TARGETING
	****************************************************
	************************************************ -->

	<!--[if gte mso 9]>
		<style>
		/* Target Outlook 2007 and 2010 */
		</style>
	<![endif]-->
</head>
<body>
<table cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
	<tr>
		<td valign="top">

		<table cellpadding="0" cellspacing="0" border="0" align="center">
			<tr>
				<td width="200" valign="top"></td>
				<td width="200" valign="top"></td>
				<td width="200" valign="top"></td>
			</tr>
		</table>

		</td>
	</tr>
	<tr>
		<td valign="top">
		<table cellpadding="7" cellspacing="0" border="0" align="center">
			<tr>
				<td width="200" valign="top"><b>Имя: </b></td>
				<td width="200" valign="top">'. $firstName .'</td>
			</tr>
			<tr>
				<td width="200" valign="top"><b>Фамилия: </b></td>
				<td width="200" valign="top">'. $lastName .'</td>
			</tr>
			<tr>
				<td width="200" valign="top"><b>Email: </b></td>
				<td width="200" valign="top">'. $client_email .'</td>
			</tr>
			<tr>
				<td width="200" valign="top"><b>Телефон: </b></td>
				<td width="200" valign="top"><span class="mobile_link">'. $phone .'</span></td>
			</tr>
			<tr>
				<td width="200" valign="top"><b>Комментарий к заявке: </b></td>
				<td width="200" valign="top">'. $comment .'</td>
			</tr>
			<tr>
				<td width="200" valign="top"><b>Подписка на : </b></td>
				<td width="200" valign="top">'. $price .' мес.</td>
			</tr>
		</table>
		</td>
	</tr>

	<tr>
		<td height="20">
			&nbsp;
		</td>
	</tr>

	<tr>
		<td>
			'. $geo .'
		</td>
	</tr>

	<tr>
		<td height="20">
			&nbsp;
		</td>
	</tr>

	<tr>
		<td>
			'. $okdp .'
		</td>
	</tr>

	<tr>
		<td height="20">
			&nbsp;
		</td>
	</tr>

	<tr>
		<td valign="top">

		<table cellpadding="0" cellspacing="0" border="0" align="center">
			<tr>
				<td width="200" valign="top"></td>
				<td width="200" valign="top"></td>
				<td width="200" valign="top"></td>
			</tr>
		</table>
		</td>
	</tr>
</table>
</body>
</html>
';




















		$modelConfig = &$this->getModel('Config');
		$config = $modelConfig->getConfig();

		$config['maillist']=preg_replace("/[\n]/","",$config['maillist']);
		$config['maillist']=preg_replace("/[\r]/","",$config['maillist']);
		$config['maillist']=preg_replace("/[\r\n]/","",$config['maillist']);
		$config['maillist']=preg_replace("/[\n\r]/","",$config['maillist']);
		$config['maillist'] = preg_replace( '/\s+/', '', $config['maillist']);

		//список всех кому отправлять письмо
		$emailList = explode(",", $config['maillist']);
		//получаем настройки сайта
		$config = & JFactory::getConfig();
		//Получаем экземпляр класса JMail
		$mailer = JFactory::getMailer();
		//Указываем что письмо будет в формате HTML
		$mailer->IsHTML( true );
		//Указываем отправителя письма
		$mailer->setSender( array( $config->get( 'config.mailfrom' ), $config->get( 'config.fromname' ) ) );
		$mailer->setSubject('Заявка для АС «Мониторинг торговых закупок»');
		//в цикле перебираем всех получателей
		foreach ( $emailList as $email ) {
		    //указываем получателя письма
		    // $mailer->addRecipient( $email );
		    $mailer->addBCC( $email );
		}
		$mailer->addBCC( $client_email );
		//Добавляем текст письма
		$mailer->setBody( $string_body);
		//Отправляем письмо
		$mailer->send();



		$data = array (
				'firstName'=> $firstName,
				'lastName'=> $lastName,
				'email'=> $email,
				'phone'=> $phone,
				'comment'=> $comment,
				'geo'=> $geo,
				'okdp'=> $okdp,
				'status'=> 1
			);

		echo json_encode($data);
		JFactory::getApplication()->close(); // or jexit();
	}
}
