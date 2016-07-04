$(function () {

    // -----初期化----- //
    var $txtArea = $('');
    var dataTXT = "";
    var txtArr = dataTXT.split("");
    var count = 0;
    var valName = $('#inputName').val("");
    var valNum = $('#menuNum').val("");
    var numEnd = $('#endNum').val("");
    $('#form_Name').hide();
    $('#form_Menu').hide();
    $('#form_end').hide();
    $('#contents').hide();
    //var flag = 0;

    // -----動作の流れ----- //
    $(function () {

        firstMes(); // 最初のメッセージ
        /*
        $('#form_Name').submit(function () {
            showMenu();
            return false;
        });
        */
        $('#inputName').on("keydown", function (e) {
            if (e.keyCode === 13) {
                //alert("ok");
                showMenu();
                return false;
            }
        });

        $('#menuNum').on("keydown", function (e) {
            if (e.keyCode === 13) {

                valNum = $('#menuNum').val();

                if (Number(valNum) === 1) {
                    prog_1();
                    return false;
                }

                if (Number(valNum) === 2) {
                    $('#contents').show();
                    $area = $('#contents > .txt');
                    dataTXT = "testtesttest2";
                    printTXT();
                    return false;
                }

                if (Number(valNum) === 3) {
                    $('#contents').show();
                    $area = $('#contents > .txt');
                    dataTXT = "testtesttest3";
                    printTXT();
                    return false;
                }

                //return false;
            }
        });

        $('#endNum').on("keydown", function (e) {
            if (e.keyCode === 13) {
                //alert("ok");
                numEnd = $('#endNum').val();
                $('#endNum').blur();
                alert(numEnd);
                return false;
            }
        });

    });


    // -----内部動作関数----- //
    // 最初のメッセージ - firstMes
    function firstMes() {
        $area = $('#first > .txt');
        $('#first > .curs').html("_");
        dataTXT = "Hello,World!\n名前を入力してください";
        printTXT();

        setTimeout(function () {
            $('#form_Name').show();
            $('#inputName').focus();
            $('#first > .curs').html("");
        }, 5000);
    }

    // メニュー表示
    function showMenu() {

        var menuTXT = {
            a: "\n##############\n",
            b: "メインメニューです\n",
            c: "##############\n",
            d: "\n# 1.おみくじ\n\n# 2.BMI計算\n\n# 3.じゃんけん\n",
            e: "\n番号を入力してください（半角数字）\n"
        };

        $area = $('#menu > .txt');
        $('#menu > .curs').html("_");
        valName = $('#inputName').val();
        $('#inputName').blur();
        $('#form_Name > .err').text("");
        dataTXT = "ようこそ、" + valName + " さん！\n"
            + menuTXT.a + menuTXT.b + menuTXT.c + menuTXT.d + menuTXT.e;
        printTXT();

        setTimeout(function () {
            $('#form_Menu').show();
            $('#menuNum').focus();
            $('#menu > .curs').html("");
        }, 24000);
    }

    var showProg = function () {
        $('#menuNum').blur();
        $('#contents').show();
        $('#contents > .curs').html("_");
        $area = $('#contents > .txt');
    };

    var showEnd = function () {
        $('#form_end').show();
        $('#endNum').focus();
        $('#contents > .curs').html("");
    };

    var endingTxt = "\n1.もう一度／2.終了する\n番号を入力してください";

    // おみくじ
    function prog_1() {
        showProg();
        var lot_data = ["「大吉」", "「中吉」", "「小吉」", "「凶」"];
        var i = Math.floor(Math.random() * lot_data.length);
        dataTXT = "\n# 1.おみくじ を開始します\n\n"
            + valName + " さんの運勢は・・・・・\n"
            + "・・・・・・・・・・・・・・\n" + "・・・・・・・・・・・・・・\n"
            + lot_data[i] + "です。\n"
            + endingTxt;
        printTXT();
        //flag = 1;

        setTimeout(function () {
            showEnd();
            //$('#form_end').show();
            //$('#endNum').focus();
            //$('#contents > .curs').html("");
        }, 20000);

        showEndform();
        return false;
    }


    // テキスト表示の動作
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

    // カーソル点滅の動作
    setInterval(function () {
        $('.curs').fadeIn(250).fadeOut(250);
    }, 500);


    /*
    // ---初期化エリア--- //

    var $area = $('');
    var dataTXT = "";
    var txtArr = dataTXT.split("");
    var count = 0;
    var valName = $('#inputName').val("");
    var valNum = $('#inputNum').val("");
    $('#inputForm').hide();
    $('#menuForm').hide();
    $('#contents').hide();

    // --HTML表示フローエリア-- //
    $(function () {

        flow_A();

        $('#inputName').on("keydown", function (e) {

            valName = $(this).val();

            if (e.keyCode === 13) {
                if (!valName) {
                    B_strErr();
                    return false;
                } else {
                    flow_B();
                    return false;
                }
            }
        });

        $('#menuNum').on("keydown", function (e) {

            var n = $(this).val();
            valNum = Number(n);

            if (e.keyCode === 13) {
                if (valNum <= 3 && valNum != 0) {
                    flow_C();
                    return false;
                } else {
                    flow_C_Err();
                    return false;
                }
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
            a: "\n##############\n",
            b: "メインメニューです\n",
            c: "##############\n",
            d: "\n# 1.おみくじ\n\n# 2.BMI計算\n\n# 3.じゃんけん\n",
            e: "\n番号を入力してください（半角数字）\n"
        };

        $area = $('#B > .txt');
        $('#B > .curs').html("_");
        valName = $('#inputName').val();
        $('#inputName').blur();
        $('#inputForm > .err').text("");
        dataTXT = "ようこそ、" + valName + " さん！\n"
            + menuTXT.a + menuTXT.b + menuTXT.c + menuTXT.d + menuTXT.e;
        printTXT();

        setTimeout(function () {
            $('#menuForm').show();
            $('#menuNum').focus();
            $('#B > .curs').html("");
        }, 24000);

    }

    function B_strErr() {
        $('#inputForm > .err').text(" Err!: empty! 名前を入力してください");
    }

    function flow_C() {
        $('#menuForm > .err').text("");
        $('#menuNum').blur();
        $('#B > .curs').html("");
        $('#contents > .curs').html("_");

        if (valNum === 1) {
            mainFunc_C_1();
            setTimeout(function() {
                test();
            },15000);
        }

        if (valNum === 2) {
            mainFunc_C_2();
        }

        if (valNum === 3) {
            mainFunc_C_3();
        }

    }

    function flow_C_Err() {
        $('#menuForm > .err').text(" Err!: " + valNum + " does not exist");
        $('#menuNum').val("");
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
    var mainFunc_C = function () {
        $('#menuNum').blur();
        $('#contents').show();
        $area = $('#contents > .txt');
    };
    
    function test() {
        $('#contents > .curs').html("");
        $('.test > .curs').html("_");
        $area = $('.test > .txt');
        dataTXT = "\nテストです";
         printTXT();
        return false;
    }

    function mainFunc_C_1() {
        mainFunc_C();
        var lot_data = ["「大吉」", "「中吉」", "「小吉」", "「凶」"];
        var i = Math.floor(Math.random() * lot_data.length);
        dataTXT = "\n# 1.おみくじ を開始します\n\n"
            + valName + " さんの運勢は・・・・・\n"
            + "・・・・・・・・・・・・・・\n" + "・・・・・・・・・・・・・・\n"
            + lot_data[i] + "です。";
        printTXT();
        return false;
    }

    function mainFunc_C_2() {
        mainFunc_C();
        dataTXT = "C_2_print_OK";
        printTXT();
        return false;
    }

    function mainFunc_C_3() {
        mainFunc_C();
        dataTXT = "C_3_print_OK";
        printTXT();
        return false;
    }
    // --end--

    */
});