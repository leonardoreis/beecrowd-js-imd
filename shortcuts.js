var username = $('span#user').text().trim();
var move_devices = true;

if (username === 'HUDSONMACEDO') {
  move_devices = false;
}

var js_url = 'http://app.manbo.com.br/aleator/js';
var css_url = 'http://app.manbo.com.br/aleator/css';

var import_list = [
  'lib/vendor/clipboard.min.js', //
  'lib/vendor/jquery.tabletojson.min.js',
  'lib/vendor/notie.min.js',
  'modules/bar.js',
  'modules/city_change.js',
  'Gestões de Atendimento ao Cliente Encaminhadas|modules/subnodos.js',
  'Consulta de Clientes|modules/subnodos.js',
  'Gestões de Atendimento ao Cliente Encaminhadas|modules/os_puller.js',
  'Gestão de Atendimento ao Cliente|modules/resoluta_btn.js',
  'Comandos Adicionales del Dispositivo a la Controladora|modules/loading_game.js',
  'Consulta Endereços de Instalação|modules/loading_game.js',
  'Comandos a Dispositivos|modules/erro_instalar.js',
];
$('head').append(
  '<link rel="stylesheet" type="text/css" href="' + css_url + '/vendor/notie.min.css">'
);

if (document.title.indexOf('Login') == -1) {
  $(import_list).each(function (i) {
    var item = import_list[i].split('|');
    if (item[1]) {
      if (document.title.indexOf(item[0]) != -1) {
        $('body').append(
          '<script src="' + js_url + '/' + item[1] + '?_=' + Math.random() + '"></script>'
        );
      }
    } else {
      $('body').append(
        '<script src="' + js_url + '/' + item[0] + '?_=' + Math.random() + '"></script>'
      );
    }
  });
}

function selectElementContents(el) {
  var body = document.body,
    range,
    sel;
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(el);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(el);
      sel.addRange(range);
    }
  } else if (body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(el);
    range.select();
    document.execCommand('copy');
  }
}

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

//prompt('', $('[data-campo="FECHA"]').last().text() + ' ' + $('[data-campo="HORA"]').last().text());
// $('[data-id="WCNX_CONS_DIS"]').parent().parent().parent().parent().prependTo($('[data-id="WCNX_DOMI"]').parent().parent().parent().parent().parent())
//---------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * botoes info e hab. ger. remoto
 */
/*
$('td[data-campo="S_CONVERSORES_TIPO"]').each(function (i) {
    if ($('[data-campo="S_CONVERSORES_TIPO"]').eq(i).text().trim() == '11 ONT' || $('[data-campo="S_CONVERSORES_TIPO"]').eq(i).text().trim() == '2 CableModem') {
        $('td[data-campo="S_CONVERSORES_TIPO"]').eq(i).parent().append(`
        <td style="width: 150px;">
        <div id="cria_funcoes_info_gerencia" style="display: none"></div>
            <span id="span_info_disp"><a id="clica_info_disp" data-loading="gamestart" style="font-size: 14px;" href="#">Info Dispositivo</a></span>
            <br>
            <span id="span_ger_remoto"><a id="clica_ger_remoto" data-loading="gamestart" style="font-size: 12px;" href="#">Habilitar Ger. Remoto</a></span>
        </td>
        `)

        $('#clica_info_disp').mouseover(function () {
            $('#cria_funcoes_info_gerencia').load('INET_WEB_DISP?fns=WDCOM_ADIC&p_ret=' + $('input#p_ret').val() + '&acc=CREATE&idSesWeb=' + getCookie('id_SesWeb') + '&Id=' + $('td[data-campo="SERIE_DECO"]').eq(i).text().trim() + '&OPER_DISP=Info%20Dispositivo%20en%20Plataforma #WDCOM_ADIC')
        })

        $(document).on('click', '#clica_info_disp', function () {
            $('#WDCOM_ADIC').submit()
            $('span#span_info_disp').html('Carregando...')
            $('span#span_ger_remoto').remove()
        })

        $('#clica_ger_remoto').mouseover(function () {
            $('#cria_funcoes_info_gerencia').load('INET_WEB_DISP?fns=WDCOM_ADIC&p_ret=' + $('input#p_ret').val() + '&acc=CREATE&idSesWeb=' + getCookie('id_SesWeb') + '&Id=' + $('td[data-campo="SERIE_DECO"]').eq(i).text().trim() + '&OPER_DISP=Habilitar%20Gerenciamento%20Remoto #WDCOM_ADIC')
        })

        $(document).on('click', '#clica_ger_remoto', function () {
            $('#WDCOM_ADIC').submit()
            $('span#span_info_disp').html('Carregando...')
            $('span#span_ger_remoto').remove()
        })
    }
})
*/
if (document.title.indexOf('Comandos Generados') != -1 && document.URL.indexOf('CERRAR') == -1) {
  if (
    $('[data-campo="TIPO"]').text().trim() == 'Dados Dispositivo Plataforma' &&
    $('[data-campo="ESTADO"]').text().trim() == 'Cumplido'
  ) {
    // window.location.href = $('[data-campo="AT_ID"] a').attr("href");
  }
}
if (document.title.indexOf('Comandos a Controladoras de Dispositivos') != -1) {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('[data-id="WDCOM_CONS_RXML"]').offset().top,
    },
    0
  );
}

// move os dispositivos para cima e muda a largura dos blocos
if (move_devices === true) {
  $('[data-id="WCNX_CONS_DIS"]')
    .parent()
    .parent()
    .parent()
    .parent()
    .prependTo($('[data-id="WCNX_DOMI"]').parent().parent().parent().parent().parent());
}
// $('[data-id="WCNX_CONS_DIS"]').parent().parent().parent().addClass('col-sm-9 col-md-9 col-lg-9').removeClass('col-sm-8 col-md-8 col-lg-8');
// $('[data-id="WCNX_CONS_LVOIP"]').parent().parent().parent().addClass('col-sm-3 col-md-3 col-lg-3').removeClass('col-sm-4 col-md-4 col-lg-4');

//botao voltar
// $('.glyphicon-chevron-left').parent().parent().parent().html(`<li><span onclick="history.back();" class="btn btn-default btn-lg" role="button" data-toggle="tooltip" data-placement="left" title="" data-original-title="Volver"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></span></li>`);

/**
 * botoes info e hab. ger. remoto fim
 */
//---------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * organiza dados dispositivo para planilha de migração
 */

if (
  document.title.indexOf('Dispositivos') != -1 &&
  $('#TIPO_DISPOSITIVO-replica').text() == '11 ONT'
) {
  var ipfixo = 'NÃO';
  var ip = '';
  var duaslinhas = 'NÃO';
  var corporativo = 'NÃO';

  if ($('[data-campo="INET_IP_IP"]').text()) {
    var ipfixo = 'SIM';
    var ip = $('[data-campo="INET_IP_IP"]').text();
  }

  if (
    $('[data-campo="VOIP_LINEAS"]').eq(0).text() != '' &&
    $('[data-campo="VOIP_LINEAS"]').eq(1).text() != ''
  ) {
    var duaslinhas = 'SIM';
  }

  var cliente_url =
    'INET_WEB_DISP?fns=WGCL_CCLI&acc=CREATE&rnd=1306197217&idSesWeb=' +
    getCookie('id_SesWeb') +
    '&ID_CLI=' +
    $('#CLIENTE_OC-replica').text().split(' ')[0];

  $('[data-id="WDIS_CONS_DAT"]').load(cliente_url + ' #CLASIF_COMERCIAL-replica');

  $(document).ajaxStop(function () {
    var corporativo = 'NÃO';
    if ($('#CLASIF_COMERCIAL-replica').text().trim() == 'Corporativo') {
      var corporativo = 'SIM';
    }
    $('.aleator-heading-desa small').html(
      '<textarea style="color: #000;" onclick="this.select();">' +
        $('#AT_ID-replica').text() +
        '	' +
        $('#MODELO-replica').text().split(' ')[1] +
        '	' +
        $('#FSAN-replica').text() +
        '		' +
        ip +
        '			' +
        ipfixo +
        '	' +
        corporativo +
        '	' +
        duaslinhas +
        '	' +
        $('#CLIENTE_OC-replica').text().split(' ')[0] +
        '	' +
        $('#CLIENTE_OC-replica')
          .text()
          .substring($('#CLIENTE_OC-replica').text().indexOf(' ') + 1) +
        '</textarea>'
    );
  });
}

/**
 * organiza dados dispositivo para planilha de migração fim
 */
//---------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * organiza dados do splitter para planilha de migração
 */
if (
  document.title.indexOf('Dispositivos') != -1 &&
  $('#TIPO_DISPOSITIVO-replica').text() == '21 Splitter FTTH'
) {
  $('[data-id="WDIS_CONS_HIJOS"]')
    .parent()
    .parent()
    .parent()
    .prependTo($('[data-id="WDIS_CONS_DAT"]').parent().parent().parent().parent());
  $('[data-id="WDIS_CONS_COM"]').parent().parent().remove();

  $('td[data-campo="LST_HIJOS_IDS"]').each(function (i) {
    // if ($('td[data-campo="LST_HIJOS_EST"]').eq(i).text().trim() == 'Conectado') {

    $('td[data-campo="LST_HIJOS_IDS"]')
      .eq(i)
      .append(
        '<span class="dispositivo_info_' +
          i +
          '"></span><span style="display:none;" class="cliente_info_' +
          i +
          '"></span>'
      );

    $('td[data-campo="LST_HIJOS_CNX"]')
      .eq(i)
      .append(
        '<span style="display:none;" class="iptv_info_' +
          i +
          '"></span><span style="display:none;" class="conexao_info_' +
          i +
          '"></span>'
      );

    $.get($('[data-campo="LST_HIJOS_IDS"] a').eq(i).attr('href'), function (data) {
      var mac = $(data).find('#AT_ID-replica').text();
      var modelo = $(data).find('#MODELO-replica').text().split(' ')[1];
      var fsan = $(data).find('#FSAN-replica').text();
      var cliente_id = $(data).find('#CLIENTE_OC-replica').text().split(' ')[0];
      var cliente_nome = $(data)
        .find('#CLIENTE_OC-replica')
        .text()
        .substring($(data).find('#CLIENTE_OC-replica').text().indexOf(' ') + 1);

      $('.cliente_info_' + i).load(
        'INET_WEB_DISP?fns=WGCL_CCLI&acc=CREATE&rnd=1306197217&idSesWeb=' +
          getCookie('id_SesWeb') +
          '&ID_CLI=' +
          cliente_id +
          ' #CLASIF_COMERCIAL-replica'
      );

      $('.conexao_info_' + i).load(
        'INET_WEB_DISP?fns=WCNX_CONS&acc=CREATE&rnd=1306197217&idSesWeb=' +
          getCookie('id_SesWeb') +
          '&CONEX_CODS=' +
          $('[data-campo="LST_HIJOS_CNX"]').eq(i).text() +
          ' #WCNX_CONS_DIS'
      );

      $(document).ajaxStop(function () {
        $('[data-campo="LST_HIJOS_CNX"]').each(function (i) {
          if (
            $('.conexao_info_' + i)
              .text()
              .indexOf('22 Decoder IPTV') != -1
          ) {
            $('.iptv_info_' + i).text('SIM');
          } else {
            $('.iptv_info_' + i).text('NÃO');
          }
        });
      });

      var ipfixo = 'NÃO';
      var ip = '';
      if ($(data).find('[data-campo="INET_IP_IP"]').text()) {
        var ipfixo = 'SIM';
        var ip = $(data).find('[data-campo="INET_IP_IP"]').text();
      }

      var duaslinhas = 'NÃO';
      if (
        $(data).find('[data-campo="VOIP_LINEAS"]').eq(0).text() != '' &&
        $(data).find('[data-campo="VOIP_LINEAS"]').eq(1).text() != ''
      ) {
        var duaslinhas = 'SIM';
      }

      var temtelefone = 'NÃO';
      if (
        $(data).find('[data-campo="VOIP_LINEAS"]').eq(0).text() != '' ||
        $(data).find('[data-campo="VOIP_LINEAS"]').eq(1).text() != ''
      ) {
        var temtelefone = 'SIM';
      }

      $(document).ajaxStop(function () {
        var corporativo = 'NÃO';
        if (
          $('.cliente_info_' + i)
            .text()
            .trim() == 'Corporativo'
        ) {
          var corporativo = 'SIM';
        }

        if (
          $('td[data-campo="LST_HIJOS_EST"]').eq(i).text().trim() == 'Conectado' ||
          $('td[data-campo="LST_HIJOS_EST"]').eq(i).text().trim() == 'A Desconectar' ||
          $('td[data-campo="LST_HIJOS_EST"]').eq(i).text().trim() == 'Suspendido'
        ) {
          $('.dispositivo_info_' + i).html(
            '<textarea id="tudo_info_' +
              i +
              '" style="display:none; color: #000;" onclick="this.select();">' +
              mac +
              '	' +
              modelo +
              '	' +
              fsan +
              '		' +
              ip +
              '			' +
              ipfixo +
              '	' +
              corporativo +
              '	' +
              duaslinhas +
              '	' +
              cliente_id +
              '	' +
              cliente_nome +
              '	' +
              temtelefone +
              '	' +
              $('.iptv_info_' + i).text() +
              '</textarea>'
          );
        }

        $('.aleator-heading-desa small').html(
          `<textarea id="tudo_info_all" style="display:none; color: #000;" onclick="this.select();">` +
            $('#tudo_info_0').val() +
            `\n` +
            $('#tudo_info_1').val() +
            `\n` +
            $('#tudo_info_2').val() +
            `\n` +
            $('#tudo_info_3').val() +
            `\n` +
            $('#tudo_info_4').val() +
            `\n` +
            $('#tudo_info_5').val() +
            `\n` +
            $('#tudo_info_6').val() +
            `\n` +
            $('#tudo_info_7').val() +
            `</textarea>`
        );

        $('#tudo_info_all')
          .parent()
          .append(
            `<textarea id="tudo_info_copiar" style="display:none;color: #000;" onclick="this.select();">` +
              $('#tudo_info_all')
                .val()
                .replace('undefined', '')
                .replace('undefined', '')
                .replace('undefined', '')
                .replace('undefined', '')
                .replace('undefined', '')
                .replace('undefined', '')
                .replace('undefined', '')
                .replace('undefined', '')
                .replace('\n\n', '\n')
                .replace('\n\n', '\n')
                .replace('\n\n', '\n')
                .replace('\n\n', '\n')
                .replace('\n\n', '\n')
                .replace('\n\n', '\n')
                .replace('\n\n', '\n')
                .replace('\n\n', '\n') +
              `</textarea>`
          );

        $('#tudo_info_all')
          .parent()
          .append(
            '<span style="margin-top: 15px; margin-right: 10px;" id="tudo_info_btn" class="pull-right btn btn-success btn-sm">Copiar Dados</span>'
          );

        var clipboard = new ClipboardJS('#tudo_info_btn', {
          text: function () {
            return $('textarea#tudo_info_copiar').val();
          },
        });
      });
    });

    // }
  });

  //adiciona botoes de habilitar ger. remota e info dispositivo
  $('td[data-campo="LST_HIJOS_BOCAS"]').each(function (i) {
    $('td[data-campo="LST_HIJOS_IDS"]')
      .eq(i)
      .parent()
      .append(
        `
            <td style="width: 150px;">
            <div id="cria_funcoes_info_gerencia" style="display: none"></div>
            <span id="span_ger_remoto" style="display: none"><a class="clica_ger_remoto" style="font-size: 12px;" href="#">` +
          ($('[data-campo="LST_HIJOS_IDS"]').eq(i).text().length > 0 ? 'Hab. Ger. Remoto' : '') +
          `</a></span>
            </td>
            `
      );

    // $(".clica_ger_remoto").eq(i).mouseover(function() {
    //     $("#cria_funcoes_info_gerencia").load('INET_WEB_DISP?fns=WDCOM_ADIC&p_ret=0&acc=CREATE&idSesWeb=' + getCookie("id_SesWeb") + '&Id=' + $('td[data-campo="LST_HIJOS_IDS"] a').eq(i).text().trim() + '&OPER_DISP=Habilitar%20Gerenciamento%20Remoto #WDCOM_ADIC');
    // });

    $('.clica_ger_remoto')
      .eq(i)
      .on('click', function () {
        $('#cria_funcoes_info_gerencia').load(
          'INET_WEB_DISP?fns=WDCOM_ADIC&p_ret=0&acc=CREATE&idSesWeb=' +
            getCookie('id_SesWeb') +
            '&Id=' +
            $('td[data-campo="LST_HIJOS_IDS"] a').eq(i).text().trim() +
            '&OPER_DISP=Habilitar%20Gerenciamento%20Remoto #WDCOM_ADIC'
        );

        $('span#span_ger_remoto a').attr('style', 'opacity: .2; display: none');
        $('span#span_ger_remoto a').eq(i).attr('style', 'opacity: 0');
        $('span#span_ger_remoto')
          .delay(0)
          .animate({ opacity: '0' }, 1000, 'linear', function () {
            $('span#span_ger_remoto').eq(i).attr('style', 'opacity: .7');
            $('span#span_ger_remoto a').eq(i).attr('style', 'opacity: .7').html('Carregando...');
            $('#WDCOM_ADIC').submit();
          });
      });
  });
  $(document).ajaxStop(function () {
    $('span#span_ger_remoto').attr('style', '');
  });
}

/**
 * organiza dados do splitter para planilha de migração fim
 */
//---------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * exibe ip e l2
 */
if (
  document.title.indexOf('Comandos a Dispositivos') != -1 &&
  $('#COM_TIPO-replica').text() == 'Info Dispositivo em Plataforma'
) {
  var xmlviewer = $('#COM_RESPUESTA-replica pre code').text();
  var posicao = xmlviewer.split('show dhcp leases ont-port ').pop().split('/')[0];

  var l2 = 'NÃO';
  if (xmlviewer.search('L2') != -1) {
    var l2 = 'SIM';
  }

  var ip = xmlviewer.split('IP address/mask     : ').pop().split('/')[0];
  if (ip.search('xml') != -1) {
    var ip = 'Down ?';
    var l2 = '-';
  }

  $('#errores')
    .parent()
    .html(
      '<textarea style="color: #000;" onclick="this.select();">' +
        posicao +
        '	' +
        ip +
        '		' +
        l2 +
        '</textarea>'
    );
}

/**
 * exibe ip e l2 fim
 */
//---------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * remove ":" na consulta de dispositivos
 */
if (document.title.indexOf('Stock de Dispositivos Seriados') != -1) {
  $('#SERIE_DECO').keyup(function (evt) {
    this.value = this.value.toUpperCase().replace(/:/g, '').replace(/-/g, '');
  });
}
/**
 * remove ":" na consulta de dispositivos fim
 */

//---------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * adiciona busca para alerta
 */
if (
  document.title.indexOf('Consultar Endereços') != -1 &&
  $('#WCDOM_VIS .row .col-md-4 strong small').text()
) {
  $.moveColumn = function (table, from, to) {
    var rows = $('tr', table);
    var cols;
    rows.each(function () {
      cols = $(this).children('th, td');
      cols.eq(from).detach().insertBefore(cols.eq(to));
    });
  };

  const btn_template = `
<div style="position: absolute; right: 10px; top: 0;"><span style="color: #000; margin-top: 7px; margin-right: 10px;" id="abre_modal_alerta" class="btn btn-success btn-sm hidden">Listar todos</span></div>`;

  const modal_template = `
<div id="modal_conexoes_para_alerta" class="modal fade" tabindex="-1" role="dialog">
	<div class="modal-dialog modal-lg modal-dialog-centered" style="width: 80%">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">
					<span aria-hidden="true">&times;</span>
				</button>
				<h4 class="modal-title">Capturar clientes para gerar alerta</h4>
				<span style="color: #000; margin-top: 7px; margin-right: 10px;" id="btn_copiar_tabela" class="btn btn-success btn-sm">Selecionar para copiar</span>
			</div>
			<div class="modal-body">
				<table id="tabela_para_alerta" class="table table-hover table-striped table-bordered table-widthmin">
					<thead>
						<tr class="info">
							<th class="text-center"><small>Localidad</small></th>
							<th class="text-center"><small>Domicilio</small></th>
							<th class="text-center"><small>Grupo de Domicilios</small></th>
							<th class="text-center"></th>
							<th class="text-center"><small>Barrio</small></th>
							<th class="text-center"><small>Nodo</small></th>
							<th class="text-center"><small>Subnodo</small></th>
							<th class="text-center"><small>Conexion</small></th>
							<th class="text-center"><small>Cliente</small></th>
							<th class="text-center"><small>Apellido y Nombres / Razon Social</small></th>
							<th class="text-center"><small>Estado Conexion</small></th>
							<th class="text-center"><small>Plan Principal</small></th>
							<th class="text-center"><small>Deuda Cliente</small></th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div>
		</div>
	</div>
</div>`;

  $('[data-id="WCDOM_VIS"]').parent().append(btn_template);
  $('#barra-menu-ppal').parent().append(modal_template);

  $('#abre_modal_alerta').click(function () {
    // let table = $('#WCDOM_VIS .table tbody').html();
    // console.log(table);
    // $('#modal_conexoes_para_alerta .modal-body tbody').append(table);
    // alert(JSON.stringify(table));

    // let modal_data = 'teste';
    // let modal_data = $("#modal_data");

    // $('#modal_conexoes_para_alerta .modal-body').empty();
    // $('#modal_conexoes_para_alerta .modal-body').append(modal_data);
    // $("#modal_conexoes_para_alerta").find(".modal-dialog").removeClass("modal-lg").addClass("modal-md");
    // $("#version").removeClass("hidden");
    $('.mask').removeClass('hidden');
    $('#barra_shortcut').addClass('blur');
    $('#modal_conexoes_para_alerta').modal('show');
  });

  $('#modal_conexoes_para_alerta').on('hidden.bs.modal', function () {
    $('.mask').addClass('hidden');
    $('#barra_shortcut').removeClass('blur');
  });

  let paginas_total = parseInt($('.pagination').text().split('/')[1].trim());
  let pagina_inicial = parseInt(
    $('.pagination')
      .text()
      .split('/')[0]
      .trim()
      .replace(/[^0-9]/gi, '')
  );
  let action_url = 'INET_WEB_DISP';

  function doPageSearch(page) {
    $.ajax({
      type: 'POST',
      url: action_url,
      data: {
        DOMI_NODO: '2 NA04',
        DOMI_SECTOR: '8 NA04D',
        ESTADO_CONEXION: 'Conectado',
        fselAcc: 'MOSTRAR',
        fns: 'WCDOM',
        acc: 'BUSCAR',
        fselPag: page,
        idSesWeb: getCookie('id_SesWeb'),
      },
      success: function (response) {
        // var res = JSON.stringify($(response).find('#WCDOM_VIS .table').tableToJSON());
        let table = $(response).find('#WCDOM_VIS .table tbody').html();
        // $('#modal_conexoes_para_alerta .modal-body tbody').append(table);
        // alert(page + table);

        var rows = [];
        $(response)
          .find('#WCDOM_VIS .table tbody tr')
          .each(function (i, n) {
            var $row = $(n);
            rows.push({
              display_name: $row.find('td:eq(0)').text(),
              first_name: $row.find('td:eq(1)').text(),
              last_name: $row.find('td:eq(2)').text(),
              street: $row.find('td:eq(3)').text(),
              city: $row.find('td:eq(4)').text(),
              state: $row.find('td:eq(5)').text(),
              zip: $row.find('td:eq(6)').text(),
            });
          });

        // console.log(JSON.stringify(rows));

        $('#modal_conexoes_para_alerta .modal-body tbody').append(table);
      },
    });
  }

  if (paginas_total > 1) {
    let i = 1;
    while (i <= paginas_total) {
      doPageSearch(i);
      i++;
    }
  }

  $(document).ajaxStop(function () {
    $('#abre_modal_alerta').removeClass('hidden');
    var tbl = $('#tabela_para_alerta');
    $.moveColumn(tbl, 8, 0);
    $('#tabela_para_alerta tr').each(function () {
      $(this).children('td:eq(4)').remove();
    });
    $('#tabela_para_alerta tr').children('th:eq(4)').remove();
  });

  $('#btn_copiar_tabela').click(function () {
    selectElementContents(document.getElementById('tabela_para_alerta'));
  });
}
/**
 * adiciona busca para alerta - fim
 */

//---------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * redireciona para o resultado do info disp plataforma após processo cumprido
 */

if (
  document.title.indexOf('Monitor de Processos do Usuario') != -1 &&
  $('[data-campo="ESTADO"]').html() == 'Finalizado'
) {
  $('[data-campo="PROC_VAN"]').load(
    $('[data-campo="AT_ID"] a').attr('href') + ' [data-campo="DISP_COM_ID"]',
    function () {
      if ($('[data-campo="PROC_VAN"] a').attr('href')) {
        window.location.replace($('[data-campo="PROC_VAN"] a').attr('href'));
      }
    }
  );
}

/**
 * redireciona para o resultado do info disp plataforma após processo cumprido - fim
 */

//---------------------------------------------------------------------------------------------------------------------------------------------------------
