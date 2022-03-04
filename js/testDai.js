//函数——用于创建对象
function createTest(question, optionA, optionB, optionC, optionD, answer) {
    var o = new Object();
    o.question = question;
    o.optionA = optionA;
    o.optionB = optionB;
    o.optionC = optionC;
    o.optionD = optionD;
    o.answer = answer;
    return o;
}

//初始化题库
var arr = new Array(5);
arr[0] = createTest("1、鲁迅先生出生于浙江__________。", "A.杭州", "B.绍兴", "C.金华", "D.海宁", "B");
arr[1] = createTest("2、1918年5月，首次用'周树人'做笔名，发表中国文学史上第一篇白话小说______。",
    "A.《狂人日记》", "B.《风波》", "C.《呐喊》", "D.《语丝》", "A");
arr[2] = createTest("3、《梦》：暗里不知，身热头痛。你来我来，______。",
    "A.深夜的梦", "B.晚夜的歌", "C.晚夜的梦", "D.深夜的歌", "A");
arr[3] = createTest("4、鲁迅的《爱之神》是一首以_______为主题的新诗",
    "A.亲情", "B.友情", "C.爱情", "D.爱国", "C");
arr[4] = createTest("5、鲁迅在现代诗《桃花》中采用了_______的手法来抒发内心的开朗乐观。",
    "A.虚实结合", "B.直抒胸臆", "C.欲扬先抑", "D.借景抒情", "D");
//全局变量计数
var count = 0;
var myAnswer = new Array(5);
for (var i = 0; i < myAnswer.length; i++)
    myAnswer[i] = "无";

//上一题
function showLastQuestion() {

    if (count <= 0) {
        alert("当前是第一题！");
        count = 0;
    } else
        count--;
    Print();//打印题目
    img();
}

//下一题
function showNextQuestion() {
    console.log(count)
    if (count == 5) {
        alert("当前已是最后一题！");
        count = 4;
    } else {
        count++;
        console.log(count);
        var div = document.getElementById("rt");
        console.log(div.className);
        div.setAttribute("class", "rt-img");
        img();
    }
    Print();//打印题目
}

//打印题目
function Print() {

    console.log("print");
    var content = document.getElementById("qst");
    content.firstChild.nodeValue = arr[count].question;
    var opa = document.getElementById("opa");
    opa.lastChild.nodeValue = arr[count].optionA;
    var opb = document.getElementById("opb");
    opb.lastChild.nodeValue = arr[count].optionB;
    var opc = document.getElementById("opc");
    opc.lastChild.nodeValue = arr[count].optionC;
    var opd = document.getElementById("opd");
    opd.lastChild.nodeValue = arr[count].optionD;

}
function img() {
    document.getElementById("optionA").style.backgroundImage = 'url('+'../images/a.png'+')';
    document.getElementById("optionB").style.backgroundImage = 'url('+'../images/b.png'+')';
    document.getElementById("optionC").style.backgroundImage = 'url('+'../images/c.png'+')';
    document.getElementById("optionD").style.backgroundImage = 'url('+'../images/d.png'+')';
}
function imgChange(myanswer) {
    if (myanswer=="A"){
        document.getElementById("optionA").style.backgroundImage = 'url('+'../images/aR.png'+')';
    }
    if (myanswer=="B"){
        document.getElementById("optionB").style.backgroundImage = 'url('+'../images/bR.png'+')';
    }
    if (myanswer=="C"){
        document.getElementById("optionC").style.backgroundImage = 'url('+'../images/cR.png'+')';
    }
    if (myanswer=="D"){
        document.getElementById("optionD").style.backgroundImage = 'url('+'../images/dR.png'+')';
    }
}
function showResult(getObjs) {
    console.log(getObjs);
    if (getObjs == arr[count].answer) {
        img();
        console.log("right");
        var div = document.getElementById("rt");
        console.log(div.className);
        div.setAttribute("class", "bg");
        imgChange(getObjs);

    } else {
        img();
        var wrong = document.getElementById("rt");
        console.log(wrong.className);
        wrong.setAttribute("class", "wrongBg");
        imgChange(getObjs);
    }

}