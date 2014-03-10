<style>
.com-zakupki {
	position: relative;
	overflow: hidden;
	clear: both;
}
.com-zakupki__wrap {
	background-color: rgba(72,72,72,0.4);
	font-family: Helvetica, Arial, sans-serif;
	font-size: 16px;
	padding-left: 2.1em;
	padding-right: 2.1em;
	padding-top: 0.652em;
	padding-bottom: 1.25em;
	width: 28.125em;
	float: left;
	position: absolute;
	margin-top: 1.875em;
	border-radius: 0.4375em;
	position: relative;
}
.com-zakupki__form-header {
	font-family: Helvetica, Arial, sans-serif;
	color: #311919;
}
.com-zakupki__form-textarea {
	color: #3c3c3c;
	font-family: Helvetica, Arial, sans-serif;
	font-weight: 500;
	font-size: 1.125em;
	border-radius: 0;
	line-height: 1.375em;
	background-color: #fbfbfb;
	padding: 0.8125em;
	margin-bottom: 10px;
	width: 100%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	box-sizing: border-box;
	border: 0.1875em solid rgba(0,0,0,0);
	width: 100%;
	height: 9.375em;
	line-height: 150%;
}
.com-zakupki__form-textarea:focus {
	background: #fff;
	-webkit-box-shadow: 0;
	box-shadow: 0;
	border: 0.1875em solid #3498db;
	color: #3498db;
	outline: none;
}
.com-zakupki__form_label {
	color: #706A6A;
	font-size: 0.875em;
	display: block;
	padding-bottom: 0.625em;
}
.com-zakupki__form-textarea:hover {
	background: #fff;
}
.com-zakupki__form-submit {
	font-family: Helvetica, Arial, sans-serif;
	float: left;
	width: 100%;
	border: #fbfbfb solid 0.25em;
	cursor: pointer;
	background-color: #3498db;
	color: white;
	font-size: 1.5em;
	padding-top: 1.375em;
	padding-bottom: 1.375em;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-o-transition: all 0.3s;
	-ms-transition: all 0.3s;
	transition: all 0.3s;
	margin-top: -0.25em;
	font-weight: 700;
}
.com-zakupki__form-submit:hover {
	background-color: rgba(0,0,0,0);
	color: #0493bd;
}
.com-zakupki__submit:hover {
	color: #3498db;
}
.com-zakupki__form-ease {
	width: 0px;
	height: 5.9em;
	background-color: #fbfbfb;

	-webkit-transition: .3s ease;
	-moz-transition: .3s ease;
	-o-transition: .3s ease;
	-ms-transition: .3s ease;
	transition: .3s ease;
}
.com-zakupki__submit:hover .com-zakupki__form-ease {
	width: 100%;
	background-color: white;
}
</style>
<div class="com-zakupki">
	<div class="com-zakupki__wrap">
	  <h4 class="com-zakupki__form-header">Настройки компонента «Заявки для АС «Мониторинг торговых закупок»</h4>
	  <form action="/administrator/index.php?option=com_zakupki" method="post">
	     <p class="">
	       <label class="com-zakupki__form_label" for="">Список электронных адресов, на которые будут отправлятся заявки. Писать через запятую.</label>
	      <textarea name="configFormData[maillist]" class="com-zakupki__form-textarea" id="maillist"><?php echo $this->config['maillist']; ?></textarea>
	    </p>
	    <div class="com-zakupki__submit">
	      <input type="submit" value="Сохранить" class="com-zakupki__form-submit"/>
	      <div class="com-zakupki__form-ease"></div>
	    </div>
	  </form>
	</div>
</div>

