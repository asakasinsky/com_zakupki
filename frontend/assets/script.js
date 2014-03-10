var canSelect = false;
var currentSelectedNode = 0;
var onClass = "on";
var showClass = "show";

$(function () {

// Price block
$('.okdp__price input:radio[name="price"]').change(
function(){
    if ($(this).is(':checked')) {
      $('.okdp__price input:radio[name="price"]').closest('.okdp__price-group-item').removeClass('okdp__price-item_active');
      $(this).closest('.okdp__price-group-item').addClass('okdp__price-item_active');
    }
});




// Contact form

    $("#__contactForm input").bind("checkval",function(){
        var label = $(this).siblings("label");
        if(this.value !== ""){
            label.addClass(showClass);
        } else {
            label.removeClass(showClass);
        }
    }).on("keyup",function(){
        $(this).trigger("checkval");
    }).on("focus",function(){
        $(this).siblings("label").addClass(onClass);
    }).on("blur",function(){
        $(this).siblings("label").removeClass(onClass);
    }).trigger("checkval");

$('#__contactForm').isHappy({
    fields: {
      // reference the field you're talking about, probably by `id`
      // but you could certainly do $('[name=name]') as well.
      '#firstName': {
        required: true,
        message: 'Введите тут свое емя'
      },
      '#lastName': {
        required: true,
        message: 'Введите тут свою фамилию'
      },
      '#email': {
        required: true,
        message: 'Emai — обязателен',
        test: testEmail // this can be *any* function that returns true or false
      },
      '#phone': {
        required: true,
        message: 'Телефон для связи тоже нужен',
        test: testPhone // this can be *any* function that returns true or false
      }
    },
    submitButton: '#orderSubmit'
  });


    $('#orderSubmit').click(function(){
        var check = true;
        $('#__contactForm input').each(function(){
            if($(this).val()==='') {
               check=false;
            }
        });
        if (!check) {
            return false;
        }
        createOrder();
    });

// Create Geo selects

    selectDistrict();
    selectSubject ();
    selectLocality();

// Init OKDP tree

   $("#tree").dynatree({
        selectMode:3,
        clickFolderMode:1,
        icon:false,
        noLink:true,
        checkbox:true,
        fx:{ height:"toggle", duration:100 },
        strings:{
            loading:"Загрузка…",
            loadError:"Извините. Ошибка загрузки сведений."
        },
        autoFocus:false,

        onClick:function (node, event) {
        },

        onQuerySelect:function (select, node) {
        },

        onSelect:function (select, dtnode) {
        },

        onActivate: function(node) {
        },

        onRender:function (node, nodeSpan) {
        },
        children:[{"hideCheckBox":false,"isFolder":true,"title":"A: &#1055;&#1056;&#1054;&#1044;&#1059;&#1050;&#1062;&#1048;&#1071; &#1048; &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1057;&#1045;&#1051;&#1068;&#1057;&#1050;&#1054;&#1043;&#1054; &#1061;&#1054;&#1047;&#1071;&#1049;&#1057;&#1058;&#1042;&#1040;, &#1054;&#1061;&#1054;&#1058;&#1067; &#1048; &#1051;&#1045;&#1057;&#1054;&#1042;&#1054;&#1044;&#1057;&#1058;&#1042;&#1040;","icon":false,"code":"A","isLazy":true,"key":1860},{"hideCheckBox":false,"isFolder":true,"title":"B: &#1055;&#1056;&#1054;&#1044;&#1059;&#1050;&#1062;&#1048;&#1071; &#1048; &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1056;&#1067;&#1041;&#1054;&#1051;&#1054;&#1042;&#1057;&#1058;&#1042;&#1040;","icon":false,"code":"B","isLazy":true,"key":1861},{"hideCheckBox":false,"isFolder":true,"title":"C: &#1055;&#1056;&#1054;&#1044;&#1059;&#1050;&#1062;&#1048;&#1071; &#1048; &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1043;&#1054;&#1056;&#1053;&#1054;&#1044;&#1054;&#1041;&#1067;&#1042;&#1040;&#1070;&#1065;&#1045;&#1049; &#1055;&#1056;&#1054;&#1052;&#1067;&#1064;&#1051;&#1045;&#1053;&#1053;&#1054;&#1057;&#1058;&#1048; &#1048; &#1056;&#1040;&#1047;&#1056;&#1040;&#1041;&#1054;&#1058;&#1050;&#1048; &#1050;&#1040;&#1056;&#1068;&#1045;&#1056;&#1054;&#1042;","icon":false,"code":"C","isLazy":true,"key":1862},{"hideCheckBox":false,"isFolder":true,"title":"D: &#1055;&#1056;&#1054;&#1044;&#1059;&#1050;&#1062;&#1048;&#1071; &#1048; &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1054;&#1041;&#1056;&#1040;&#1041;&#1040;&#1058;&#1067;&#1042;&#1040;&#1070;&#1065;&#1045;&#1049; &#1055;&#1056;&#1054;&#1052;&#1067;&#1064;&#1051;&#1045;&#1053;&#1053;&#1054;&#1057;&#1058;&#1048;","icon":false,"code":"D","isLazy":true,"key":1863},{"hideCheckBox":false,"isFolder":true,"title":"E: &#1069;&#1051;&#1045;&#1050;&#1058;&#1056;&#1054;&#1069;&#1053;&#1045;&#1056;&#1043;&#1048;&#1071;, &#1043;&#1040;&#1047; &#1048; &#1042;&#1054;&#1044;&#1054;&#1057;&#1053;&#1040;&#1041;&#1046;&#1045;&#1053;&#1048;&#1045;","icon":false,"code":"E","isLazy":true,"key":1864},{"hideCheckBox":false,"isFolder":true,"title":"F: &#1055;&#1056;&#1054;&#1044;&#1059;&#1050;&#1062;&#1048;&#1071; &#1048; &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1057;&#1058;&#1056;&#1054;&#1048;&#1058;&#1045;&#1051;&#1068;&#1057;&#1058;&#1042;&#1040;","icon":false,"code":"F","isLazy":true,"key":1865},{"hideCheckBox":false,"isFolder":true,"title":"G: &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1042; &#1054;&#1055;&#1058;&#1054;&#1042;&#1054;&#1049; &#1048; &#1056;&#1054;&#1047;&#1053;&#1048;&#1063;&#1053;&#1054;&#1049; &#1058;&#1054;&#1056;&#1043;&#1054;&#1042;&#1051;&#1045;; &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1055;&#1054; &#1058;&#1045;&#1061;&#1053;&#1048;&#1063;&#1045;&#1057;&#1050;&#1054;&#1052;&#1059; &#1054;&#1041;&#1057;&#1051;&#1059;&#1046;&#1048;&#1042;&#1040;&#1053;&#1048;&#1070; &#1048; &#1056;&#1045;&#1052;&#1054;&#1053;&#1058;&#1059; &#1040;&#1042;&#1058;&#1054;&#1052;&#1054;&#1041;&#1048;&#1051;&#1045;&#1049;, &#1041;&#1067;&#1058;&#1054;&#1042;&#1067;&#1061; &#1055;&#1056;&#1048;&#1041;&#1054;&#1056;&#1054;&#1042; &#1048; &#1055;&#1056;&#1045;&#1044;&#1052;&#1045;&#1058;&#1054;&#1042; &#1051;&#1048;&#1063;&#1053;&#1054;&#1043;&#1054; &#1055;&#1054;&#1051;&#1068;&#1047;&#1054;&#1042;&#1040;&#1053;&#1048;&#1071;","icon":false,"code":"G","isLazy":true,"key":1866},{"hideCheckBox":false,"isFolder":true,"title":"H: &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1043;&#1054;&#1057;&#1058;&#1048;&#1053;&#1048;&#1062; &#1048; &#1056;&#1045;&#1057;&#1058;&#1054;&#1056;&#1040;&#1053;&#1054;&#1042;","icon":false,"code":"H","isLazy":true,"key":1867},{"hideCheckBox":false,"isFolder":true,"title":"I: &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1058;&#1056;&#1040;&#1053;&#1057;&#1055;&#1054;&#1056;&#1058;&#1040;, &#1057;&#1050;&#1051;&#1040;&#1044;&#1057;&#1050;&#1054;&#1043;&#1054; &#1061;&#1054;&#1047;&#1071;&#1049;&#1057;&#1058;&#1042;&#1040; &#1048; &#1057;&#1042;&#1071;&#1047;&#1048;","icon":false,"code":"I","isLazy":true,"key":1868},{"hideCheckBox":false,"isFolder":true,"title":"J: &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1055;&#1054; &#1060;&#1048;&#1053;&#1040;&#1053;&#1057;&#1054;&#1042;&#1054;&#1052;&#1059; &#1055;&#1054;&#1057;&#1056;&#1045;&#1044;&#1053;&#1048;&#1063;&#1045;&#1057;&#1058;&#1042;&#1059;","icon":false,"code":"J","isLazy":true,"key":1869},{"hideCheckBox":false,"isFolder":true,"title":"K: &#1059;&#1057;&#1051;&#1059;&#1043;&#1048;, &#1057;&#1042;&#1071;&#1047;&#1040;&#1053;&#1053;&#1067;&#1045; &#1057; &#1053;&#1045;&#1044;&#1042;&#1048;&#1046;&#1048;&#1052;&#1067;&#1052; &#1048;&#1052;&#1059;&#1065;&#1045;&#1057;&#1058;&#1042;&#1054;&#1052;, &#1040;&#1056;&#1045;&#1053;&#1044;&#1054;&#1049;, &#1048;&#1057;&#1057;&#1051;&#1045;&#1044;&#1054;&#1042;&#1040;&#1058;&#1045;&#1051;&#1068;&#1057;&#1050;&#1054;&#1049; &#1048; &#1050;&#1054;&#1052;&#1052;&#1045;&#1056;&#1063;&#1045;&#1057;&#1050;&#1054;&#1049; &#1044;&#1045;&#1071;&#1058;&#1045;&#1051;&#1068;&#1053;&#1054;&#1057;&#1058;&#1068;&#1070;","icon":false,"code":"K","isLazy":true,"key":1870},{"hideCheckBox":false,"isFolder":true,"title":"L: &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1042; &#1054;&#1041;&#1051;&#1040;&#1057;&#1058;&#1048; &#1043;&#1054;&#1057;&#1059;&#1044;&#1040;&#1056;&#1057;&#1058;&#1042;&#1045;&#1053;&#1053;&#1054;&#1043;&#1054; &#1059;&#1055;&#1056;&#1040;&#1042;&#1051;&#1045;&#1053;&#1048;&#1071; &#1048; &#1054;&#1041;&#1054;&#1056;&#1054;&#1053;&#1067;; &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1054;&#1041;&#1071;&#1047;&#1040;&#1058;&#1045;&#1051;&#1068;&#1053;&#1054;&#1043;&#1054; &#1057;&#1054;&#1062;&#1048;&#1040;&#1051;&#1068;&#1053;&#1054;&#1043;&#1054; &#1057;&#1058;&#1056;&#1040;&#1061;&#1054;&#1042;&#1040;&#1053;&#1048;&#1071;","icon":false,"code":"L","isLazy":true,"key":1871},{"hideCheckBox":false,"isFolder":true,"title":"M: &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1042; &#1054;&#1041;&#1051;&#1040;&#1057;&#1058;&#1048; &#1054;&#1041;&#1056;&#1040;&#1047;&#1054;&#1042;&#1040;&#1053;&#1048;&#1071;","icon":false,"code":"M","isLazy":true,"key":1872},{"hideCheckBox":false,"isFolder":true,"title":"N: &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1042; &#1054;&#1041;&#1051;&#1040;&#1057;&#1058;&#1048; &#1047;&#1044;&#1056;&#1040;&#1042;&#1054;&#1054;&#1061;&#1056;&#1040;&#1053;&#1045;&#1053;&#1048;&#1071; &#1048; &#1042; &#1057;&#1054;&#1062;&#1048;&#1040;&#1051;&#1068;&#1053;&#1054;&#1049; &#1054;&#1041;&#1051;&#1040;&#1057;&#1058;&#1048;","icon":false,"code":"N","isLazy":true,"key":1873},{"hideCheckBox":false,"isFolder":true,"title":"O: &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1050;&#1054;&#1052;&#1052;&#1059;&#1053;&#1040;&#1051;&#1068;&#1053;&#1067;&#1045;, &#1057;&#1054;&#1062;&#1048;&#1040;&#1051;&#1068;&#1053;&#1067;&#1045; &#1048; &#1055;&#1045;&#1056;&#1057;&#1054;&#1053;&#1040;&#1051;&#1068;&#1053;&#1067;&#1045; &#1055;&#1056;&#1054;&#1063;&#1048;&#1045;","icon":false,"code":"O","isLazy":true,"key":1874},{"hideCheckBox":false,"isFolder":true,"title":"P: &#1059;&#1057;&#1051;&#1059;&#1043;&#1048; &#1055;&#1054; &#1042;&#1045;&#1044;&#1045;&#1053;&#1048;&#1070; &#1063;&#1040;&#1057;&#1058;&#1053;&#1067;&#1061; &#1044;&#1054;&#1052;&#1040;&#1064;&#1053;&#1048;&#1061; &#1061;&#1054;&#1047;&#1071;&#1049;&#1057;&#1058;&#1042; &#1057; &#1053;&#1040;&#1045;&#1052;&#1053;&#1067;&#1052; &#1054;&#1041;&#1057;&#1051;&#1059;&#1046;&#1048;&#1042;&#1040;&#1053;&#1048;&#1045;&#1052;","icon":false,"code":"P","isLazy":true,"key":1875},{"hideCheckBox":false,"isFolder":true,"title":"Q: &#1059;&#1057;&#1051;&#1059;&#1043;&#1048;, &#1055;&#1056;&#1045;&#1044;&#1054;&#1057;&#1058;&#1040;&#1042;&#1051;&#1071;&#1045;&#1052;&#1067;&#1045; &#1069;&#1050;&#1057;&#1058;&#1045;&#1056;&#1056;&#1048;&#1058;&#1054;&#1056;&#1048;&#1040;&#1051;&#1068;&#1053;&#1067;&#1052;&#1048; &#1054;&#1056;&#1043;&#1040;&#1053;&#1048;&#1047;&#1040;&#1062;&#1048;&#1071;&#1052;&#1048; &#1048; &#1054;&#1056;&#1043;&#1040;&#1053;&#1040;&#1052;&#1048;","icon":false,"code":"Q","isLazy":true,"key":1876}],

        onLazyRead:function (node) {
            node.appendAjax({
                // url:"./tree.php?parentId=" + node.data.key
                url:"/index.php?option=com_zakupki&task=getByParentId&okdpParentId=" + node.data.key
            });
        }
    });
});

function form() {
    console.log('function form() ')
}

function testEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function testPhone(phonenumber) {
    var result = true;
    return result;
}

function isNumber(n){
   return n == parseFloat(n);
}

function canselSelect() {
    $("#tree").dynatree("getRoot").visit(function(node){
        node.select(false);
    });
    return false;
}


function Okdp(id, title, code) {
    this.id = id;
    this.title = title;
    this.code = code;
}

function getOkdp() {
    var result = [
    '<table cellpadding="7" cellspacing="0" border="1" align="center">',
        '<tr><th width="100" valign="top">Код ОКДП</th><th width="400" valign="top">Наименование</th></tr>'
    ];
    var okdpList = [];
    var rootNode =  $("#tree").dynatree("getRoot");
    var selRootNodes = rootNode.tree.getSelectedNodes(true);
    console.log(rootNode.tree.getSelectedNodes(true));
    var className;

    for (var i = 0; i < selRootNodes.length; i++) {
        className = '';
        result.push('<tr'+ className +'><td width="100" valign="top">'+ selRootNodes[i].data.code +'</td><td width="400" valign="top">'+ selRootNodes[i].data.title +'</td></tr>');
    }
    result.push('</table>');
    return result.join('\n');
}

var $districts;
function selectDistrict () {
    $districts = $("#districts");
    $districts.change(function(){
        $subjects.trigger("chosen:updated");
        $locality.trigger("chosen:updated");
    });
    json2selectChosen($districts, russiaJSON.data.districts);
}

var $subjects;
function selectSubject () {
    $subjects = $("#subjects");
    $subjects.on('chosen:updated', function(){
        console.log('#subjects will be update')
        var keyList = $districts.val();
        var selectData;
        if(keyList) {
            selectData = getByParent('disid', keyList, russiaJSON.data.subjects);
        } else {
            selectData = russiaJSON.data.subjects;
        }
        json2selectChosen($subjects, selectData);
    });
    $subjects.change(function(){
        $locality.trigger("chosen:updated");
    });
    json2selectChosen($subjects, russiaJSON.data.subjects);
}

var $locality;
function selectLocality () {
    $locality = $("#locality");
    $locality.on('chosen:updated', function(){
        console.log('#locality will be update')
        var keyList = $subjects.val();
        var selectData;
        if(keyList) {
            selectData = getByParent('parentguid', keyList, russiaJSON.data.locality);
        } else if ($districts.val()) {
            selectData = getByParent('disid', $districts.val(), russiaJSON.data.locality);
        } else {
            selectData = russiaJSON.data.locality;
        }
        json2selectChosen($locality, selectData);
    });
    json2selectChosen($locality, russiaJSON.data.locality);
}


function json2selectChosen($jobj, jsonData) {
    var html = "";
    for (var i = 0; i < jsonData.length; i++) {
        var id = (typeof jsonData[i].id === 'undefined')? jsonData[i].aoguid : jsonData[i].id;
        html += "<option value=" + id  + ">" +jsonData[i].name + "</option>"
    }
    $jobj.html(html);
    $jobj.chosen({
    no_results_text: "Нет совпадений",
    });
}

function getByParent(key, keyList, data) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        if($.inArray(data[i][key], keyList)>=0) {
            result.push(data[i]);
        }
    }
    console.log(result.length+' was founded');
    return result;
}

function getGeo() {
    var result = [
    '<table cellpadding="7" cellspacing="0" border="0" align="center">',
        '<tr><th width="100" valign="top">ОКАТО</th><th width="300" valign="top">Наименование</th></tr>'
    ];
    var data;
    var subjectsList = [], localityList = [];
    subjectsList = $subjects.val();
    localityList = $locality.val();
    subjectsData = russiaJSON.data.subjects;
    localityData = russiaJSON.data.locality;
    if(subjectsList) {
        for (var i = 0; i < subjectsData.length; i++) {
            console.log(subjectsData[i])
            if($.inArray(subjectsData[i].aoguid, subjectsList)>=0) {
                result.push('<tr class="odd"><td width="100" valign="top">' + subjectsData[i].okato + '</td><td width="300" valign="top">' + subjectsData[i].name +'</td></tr>');
                for (var ii = 0; ii < localityData.length; ii++) {
                    if($.inArray(localityData[ii]['aoguid'], localityList)>=0 && localityData[ii]['parentguid'] === subjectsData[i].aoguid) {
                        result.push('<tr><td width="100" valign="top">' + localityData[ii].okato + '</td><td width="300" valign="top">' + localityData[ii].name +'</td></tr>');
                    }
                }
            }
        }
    } else if (localityList) {
        for (var ii = 0; ii < localityData.length; ii++) {
            if($.inArray(localityData[ii]['aoguid'], localityList)>=0) {
                result.push('<tr><td width="100" valign="top">' + localityData[ii].okato + '</td><td width="300" valign="top">' + localityData[ii].name +'</td></tr>');
            }
        }
    } else {

    }
    result.push('</table>');
    return result.join('\n');
    return result;
}

function getContacts() {
    var data = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        comment: $("#comment").val()
    };

    return data;
}

function getSelectedPrice() {
    return $('input:radio[name=price]:checked').val();
}

function createOrder() {
    var data = getContacts();
    data.price = getSelectedPrice();
    data.geo = getGeo();
    data.okdp = getOkdp();
    console.log(' $.ajax');

    $.ajax({
        type: 'POST',
        url: '/index.php?option=com_zakupki&task=sendOrder"',
        data: data,
        dataType: 'json',
        success: function(r){
                console.log(typeof r);
            if(r.status==1) {
                window.location = '/index.php?option=com_zakupki&task=confirmOrder';
            }
        }
    });
}
