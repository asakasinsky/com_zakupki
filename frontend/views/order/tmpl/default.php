<script>
"undefined"==typeof console&&(console={log:function(){},debug:function(){}});
</script>
<link rel="stylesheet" href="<?php echo JURI::base() ?>components/com_zakupki/assets/style.full.css">
<link rel="stylesheet" href="<?php echo JURI::base() ?>components/com_zakupki/assets/style.css">
<script src="<?php echo JURI::base() ?>components/com_zakupki/assets/script.full.js"></script>
<script src="<?php echo JURI::base() ?>components/com_zakupki/assets/script.js"></script>
<div class="com-zakupki">

<div class="okdp-wrapper">
<h2>Автоматизированная Система "Мониторинг торговых закупок"</h2>
    <p>– это способ оперативно получать информацию о предстоящих торгах интересующих Вас как потенциального поставщика товаров и услуг. Система осуществляет ежедневный мониторинг о заявленных торгах и автоматически рассылает информацию на Ваш электронный адрес в виде электронного письма.</p>
	<h2>Информационное письмо содержит следующие поля:</h2>
	<p>&nbsp;</p>
<div class="row-list list-separator clear">
<ul>
<li>Номер извещения;</li>
<li>Наименование заказа;</li>
<li>Начальная (максимальная) цена контракта;</li>
<li>Организация, размещающая заказ;</li>
</ul>
<ul class="list-indent">
<li>Дата публикации;</li>
<li>Дата окончания подачи заявок;</li>
<li>Ссылка на извещение.</li>
<li></li>
</ul>
</div>
<hr />
<h2 align="center">Стоимость подключения к данной системе с учетом настройки под спецификацию предприятия:</h2>
<p>&nbsp;</p>
<table id="table1" style="width: 100%;" border="2" cellspacing="1" cellpadding="3">
<tbody>
<tr><th style="width: 221px;"><span style="color: #4c880c;"><strong><em>Период подключения к системе</em></strong></span></th>
<td align="center" valign="top"><strong><em>1 месяц</em></strong></td>
<td align="center" valign="middle"><strong><em>3 месяца</em></strong></td>
<td align="center" valign="middle"><strong><em>6 месяцев</em></strong></td>
<td align="center" valign="middle"><strong><em>9 месяцев</em></strong></td>
<td align="center" valign="middle"><strong><em>12 месяцев</em></strong></td>
</tr>
<tr><th><strong><span style="color: #4c880c;"><em>Стоимость</em></span></strong></th>
<td align="center" valign="middle"><span style="color: #ff4500;"><strong><em>900</em></strong></span></td>
<td align="center" valign="middle"><span style="color: #ff4500;"><strong><em>2500</em></strong></span></td>
<td align="center" valign="middle"><span style="color: #ff4500;"><strong><em>4400</em></strong></span></td>
<td align="center" valign="middle"><span style="color: #ff4500;"><strong><em>5900</em></strong></span></td>
<td align="center" valign="middle"><span style="color: #ff4500;"><strong><em>7100</em></strong></span></td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>Отбор потенциально интересных процедур осуществляется по местонахождению заказчика, кодам ОКДП и ключевым словам. Допускается изменение критериев поиска в течение срока обслуживания не ограниченное количество раз без взимания дополнительной платы.</p>
<hr />
<p style="text-align: center;"><span style="font-size: 12pt;"><strong>*** Для новых клиентов мы готовы предоставить тестовый режим на безвозмездной основе сроком на 1 месяц!</strong></span></p>
<hr />
<p><span style="color: #4c880c;">Если у Вас возникнут дополнительные вопросы, Вы всегда можете задать их нам по электронной почте: roselcom@yandex.ru или по телефонам: +7 (86148) 5-32-85, +7 918 48 73 390.</span></p>
<p><span style="color:  #ff4500;">Текущие параметры рассылки заданы исходя из анализа информации о Вашей организации. Для изменения параметров поиска обратитесь к нам по электронной почте: roselcom@yandex.ru или по телефонам: +7 (86148) 5-32-85, +7 918 48 73 390</span></p>
<hr />
    <h4><span class="numberCircle ">1</span> Выберите интересующие вас субъекты</h4>
    <!--<p>Города и районы можно фильтровать путём выбора субъекта или округа. Работает автодополнение, то есть можно просто начать набирать название. Можно выбрать просто субъект РФ.</p>-->
    <div id="geo" class="geo">
        <div class="field--wrapper">
            <label for="districts">Федеральный округ</label>
            <select id="districts" name="districts" data-placeholder="Федеральный округ…" multiple class="chosen-select"></select>
        </div>
        <div class="field--wrapper">
            <label for="subjects">Субъект РФ</label>
            <select id="subjects" name="subjects" data-placeholder="Субъект РФ…" multiple class="chosen-select"></select>
        </div>
        <div class="field--wrapper">
            <label for="locality">Город/район</label>
            <select id="locality" name="locality" data-placeholder="Город/район…" multiple class="chosen-select"></select>
        </div>
    </div>
    <hr>
    <h4><span class="numberCircle ">2</span> Выберите интересующие вас пункты классификатора</h4>
    <div id="tree" class="tree"></div>
    <hr>
    <h4 style="margin-bottom: 0;"><span class="numberCircle ">3</span> Выберите срок подписки на услугу мониторинга</h4>
    <div class="okdp__price">
      <ul class="okdp__price-group">
        <li class="okdp__price-group-item">
          <label class="okdp__price-label" for="oneMonth"><span class="okdp__price-cost">Тест</span><div class="okdp__price-purchase"><span class="okdp__price-period">1 месяц</span><input type="radio" name="price" id="oneMonth" value="test"/></div></label>
        </li>
        <li class="okdp__price-group-item">
          <label class="okdp__price-label" for="oneMonth"><span class="okdp__price-cost">900 р</span><div class="okdp__price-purchase"><span class="okdp__price-period">1 месяц</span><input type="radio" name="price" id="oneMonth" value="1"/></div></label>
        </li>
        <li class="okdp__price-group-item">
          <label class="okdp__price-label" for="threeMonths"><span class="okdp__price-cost">2500 р</span><div class="okdp__price-purchase"><span class="okdp__price-period">3 месяца</span><input type="radio" name="price" id="threeMonths" value="3"/></div></label>
        </li>
        <li class="okdp__price-group-item okdp__price-item_active">
          <label class="okdp__price-label" for="sixMonths"><span class="okdp__price-cost">4400 р</span><div class="okdp__price-purchase"><span class="okdp__price-period">6 месяцев</span><input type="radio" name="price" id="sixMonths" value="6"/></div></label>
        </li>
        <li class="okdp__price-group-item">
          <label class="okdp__price-label" for="nineMonths"><span class="okdp__price-cost">5900 р</span><div class="okdp__price-purchase"><span class="okdp__price-period">9 месяцев</span><input type="radio" name="price" id="nineMonths" value="9"/></div></label>
        </li>
        <li class="okdp__price-group-item">
          <label class="okdp__price-label" for="twelveMonths"><span class="okdp__price-cost">7100 р</span><div class="okdp__price-purchase"><span class="okdp__price-period">12 месяцев</span><input type="radio" name="price" id="twelveMonths" value="12"/></div></label>
        </li>

      </ul>
    </div>
	<hr />
    <h4 style="margin-bottom: 0;"><span class="numberCircle ">4</span> Заполните контактные данные</h4>
    <div id="contactForm">
        <form onsubmit="" class="okdp-form" id="__contactForm" action="#">
            <fieldset class="okdp-form__sign">
                <legend>Контактные данные</legend>
                <div class="okdp-form__field--wrapper">
                    <label for="firstName">Имя:</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Имя…">
                </div>
                <div class="okdp-form__field--wrapper">
                    <label for="lastName">Фамилия:</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Фамилия…">
                </div>
                <div class="okdp-form__field--wrapper">
                    <label for="email">E-mail:</label>
                    <input type="text" id="email" name="email" placeholder="E-mail…">
                </div>
                <div class="okdp-form__field--wrapper">
                    <label for="phone">Телефон:</label>
                    <input type="text" id="phone" name="phone" placeholder="Телефон…">
                </div>
            </fieldset>

            <fieldset class="okdp-form__comment">
                <legend>Комментарий</legend>
                <textarea name="comment" id="comment" placeholder="Введите свой комментарий здесь..."></textarea>
            </fieldset>
            <!-- <input type="submit" class="okdp-form__button" value="Отправьте заявку"> -->
        </form>
    </div>
    <hr>
    <h4><span class="numberCircle ">5</span> Отправьте заявку</h4>
    <button id="orderSubmit" class="order-submit">Отправить заявку</button>
</div>
</div>
