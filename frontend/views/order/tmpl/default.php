<script>
"undefined"==typeof console&&(console={log:function(){},debug:function(){}});
</script>
<link rel="stylesheet" href="<?php echo JURI::base() ?>components/com_zakupki/assets/style.full.css">
<link rel="stylesheet" href="<?php echo JURI::base() ?>components/com_zakupki/assets/style.css">
<script src="<?php echo JURI::base() ?>components/com_zakupki/assets/script.full.js"></script>
<script src="<?php echo JURI::base() ?>components/com_zakupki/assets/script.js"></script>
<div class="com-zakupki">

<div class="okdp-wrapper">
    <h4><span class="numberCircle ">1</span> Выберите интересующие вас субъекты</h4>
    <p>Города и районы можно фильтровать путём выбора субъекта или округа. Работает автодополнение, то есть можно просто начать набирать название. Можно выбрать просто субъект РФ.</p>
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
    <h4><span class="numberCircle ">4</span> Отправьте заявку</h4>
    <button id="orderSubmit" class="order-submit">Отправить заявку</button>
</div>
</div>
