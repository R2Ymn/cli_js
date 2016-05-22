$(function () {

    // ---初期化エリア--- //

    var $area = $('');
    var dataTXT = "";
    var txtArr = dataTXT.split("");
    var count = 0;
    var inputValName = $('#inputName').val("");
    var inputValNum = $('#inputNum').val("");
    $('#inputForm').hide();
    $('#menuForm').hide();
    $('#contents').hide();
    
    // --HTML表示フローエリア-- //
    $(function () {

        flow_A();

        $('#inputName').on("keydown", function (e) {

            inputValName = $(this).val();

            if (e.keyCode === 13) {
                if (inputValName === "") {
                    B_strErr();
                    return false;
                } else if (inputValName != "") {
                    flow_B();
                    return false;
                }
            }
        });

        $('#menuNum').on("keydown", function (e) {

            var strNum = $(this).val();
            inputValNum = Number(strNum);

            if (e.keyCode === 13) {
                flow_C();
                return false;
            }
        });

    });

    // ---表示フローの内部動作エリア---
    function flow_A() {

        $area = $('#A > .txt');
        $('#A > .curs').html("_");
        dataTXT = "Hello,World!\n名前を入力してください";
        printTXT();

        setTimeout(function () {
            $('#inputForm').show();
            $('#inputName').focus();
            $('#A > .curs').html("");
        }, 5000);
    }

    function flow_B() {

        var menuTXT = {
            "0": "##########\n",
            "1": "メインメニューです\n",
            "2": "##########\n",
            "3": "\n# 1.おみくじ\n\n# 2.BMI計算\n\n# 3.じゃんけん\n",
            "4": "\n番号を入力してください（半角数字）\n"
        };

        $area = $('#B > .txt');
        $('#B > .curs').html("_");
        inputValName = $('#inputName').val();
        dataTXT = "ようこそ、" + inputValName + " さん！\n"
            + menuTXT[0] + menuTXT[1] + menuTXT[2] + menuTXT[3] + menuTXT[4];
        $('#inputName').blur();
        $('#inputForm > .err').text("");
        printTXT();

        setTimeout(function () {
            $('#menuForm').show();
            $('#menuNum').focus();
            $('#B > .curs').html("");
        }, 20000);

    }

    function B_strErr() {
        $area = $('#inputForm > .err');
        dataTXT = " !:名前を入力してください:!";
        printTXT();
    }

    function flow_C() {
        $('#menuForm > .err').text("");
        $('#menuNum').blur();
        $('#B > .curs').html("");
        $('#contents > .curs').html("_");

        if (inputValNum === 1 || inputValNum === 2 || inputValNum === 3) {
            if (inputValNum === 1) {
                $('#contents').show();
                if ($('#contents').show()) {
                    mainFunc_C_1();
                }
            }

            if (inputValNum === 2) {
                $('#contents').show();
                if ($('#contents').show()) {
                    mainFunc_C_2();
                }
            }

            if (inputValNum === 3) {
                $('#contents').show();
                if ($('#contents').show()) {
                    mainFunc_C_3();
                }
            }
        } else {
            $area = $('#menuForm > .err');
            $('#menuNum').blur();
            dataTXT = " !:正しい番号を入力してください:!";
            printTXT();
            setTimeout(function () {
                $('#menuNum').val("");
                $('#menuNum').focus();
            }, 3500);
        }

    }

    // ---全てに共通する動作エリア--- //
    function printTXT() {
        txtArr = dataTXT.split("");
        var timer = setTimeout(printTXT, 200);
        $area.append(txtArr[count].replace(/\n/, '<br>'));
        count++;

        if (count == txtArr.length) {
            clearTimeout(timer);
            count = 0;
        }
    }

    setInterval(function () {
        $('.curs').fadeIn(250).fadeOut(250);
    }, 500);

    // ---各プログラム内部動作エリア--- //
    
    var mainFunc_C = function() {
        $('#menuNum').blur();
        $area = $('#contents > .txt');
    };
    
    function mainFunc_C_1() {
        //$('#menuNum').blur();
        //$area = $('#contents > .txt');
        mainFunc_C();
        dataTXT = "C_1_print_OK";
        printTXT();
        return false;
    }

    function mainFunc_C_2() {
        $('#menuNum').blur();
        $area = $('#contents > .txt');
        dataTXT = "C_2_print_OK";
        printTXT();
        return false;
    }

    function mainFunc_C_3() {
        $('#menuNum').blur();
        $area = $('#contents > .txt');
        dataTXT = "C_3_print_OK";
        printTXT();
        return false;
    }
    // --end--
});