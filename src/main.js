var dis = document.getElementById("result");
var upper = document.getElementById("subtext");
var marr = [];
var op = ['+', '-', '*', '/', '%', '.'];
function display(val) {
    var oldop = dis.value.slice(-1);
    if (op.includes(val) && op.includes(oldop)) {
        dis.value = dis.value.slice(0, -1);
        dis.value += val;
    }
    else {
        dis.value += val;
    }
}
function textChange() {
    var btntxt = document.getElementById("btntxt").innerHTML;
    if (btntxt == 'DEG') {
        document.getElementById("btntxt").innerHTML = 'RAD';
    }
    else {
        document.getElementById("btntxt").innerHTML = 'DEG';
    }
}
function fe() {
    var cb = document.getElementById('btn-check');
    if (cb.checked == true) {
        if (dis.value != '') {
            var fE = parseFloat(dis.value);
            dis.value = fE.toExponential();
        }
        else {
            var fE = 0;
            dis.value = fE.toExponential();
        }
    }
}
function ms() {
    if (dis.value == '') {
        marr.push(0);
    }
    if (marr[marr.length - 1] != parseFloat(dis.value)) {
        marr.push(parseFloat(dis.value));
        localStorage.setItem("Product", JSON.stringify(marr));
    }
    document.querySelector('#mc').disabled = false;
    document.querySelector('#mr').disabled = false;
    document.querySelector('#m').disabled = false;
    console.log(marr);
}
function mr() {
    dis.value = marr[marr.length - 1].toString();
    console.log(marr);
}
function mc() {
    marr.splice(0, marr.length);
    document.querySelector('#mc').disabled = true;
    document.querySelector('#mr').disabled = true;
    document.querySelector('#m').disabled = true;
    console.log(marr);
}
function mplus() {
    marr[marr.length - 1] += parseFloat(dis.value);
    console.log(marr);
}
function mminus() {
    marr[marr.length - 1] -= parseFloat(dis.value);
    console.log(marr);
}
function m() {
    var html = "<table>";
    for (var i = marr.length - 1; i >= 0; i--) {
        html += "<tr>";
        html += "<td>" + marr[i] + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById('memory').innerHTML = html;
}
// document.getElementById("second")!.addEventListener("click", function(e) {
//     e.stopPropagation();
// });
// document.getElementById("second1")!.addEventListener("click", function(e) {
//     e.stopPropagation();
// });
//CE
function dlt() {
    if (dis.value == '') {
        upper.value = '';
    }
    dis.value = '';
}
//Backspace
function pop() {
    if (dis.value == 'Error!' || dis.value == 'Infinity' || dis.value == 'NaN') {
        dis.value = '';
    }
    else {
        dis.value = dis.value.slice(0, dis.value.length - 1);
    }
}
function sqr() {
    var squr = document.getElementById('sqr').innerHTML;
    if (squr == 'x<sup>3</sup>') {
        upper.value = 'cube(' + dis.value + ')';
        dis.value = Math.pow(parseFloat(dis.value), 3).toString();
    }
    else {
        upper.value = 'sqr(' + dis.value + ')';
        dis.value = Math.pow(parseFloat(dis.value), 2).toString();
    }
}
function sin() {
    var mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sin(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = Math.sin(parseFloat(dis.value)).toString();
    }
    else {
        dis.value = Math.sin(parseFloat(dis.value) * (Math.PI / 180)).toString();
    }
}
function cos() {
    var mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cos(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = Math.cos(parseFloat(dis.value)).toString();
    }
    else {
        dis.value = Math.cos(parseFloat(dis.value) * (Math.PI / 180)).toString();
    }
}
function tan() {
    var mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'tan(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = Math.tan(parseFloat(dis.value)).toString();
    }
    else {
        dis.value = Math.tan(parseFloat(dis.value) * (Math.PI / 180)).toString();
    }
}
function sec() {
    var mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sec(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = (1 / Math.cos(parseFloat(dis.value))).toString();
    }
    else {
        dis.value = (1 / Math.cos(parseFloat(dis.value) * (Math.PI / 180))).toString();
    }
}
function cosec() {
    var mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cosec(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = (1 / Math.sin(parseFloat(dis.value))).toString();
    }
    else {
        dis.value = (1 / Math.sin(parseFloat(dis.value) * (Math.PI / 180))).toString();
    }
}
function cot() {
    var mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cot(' + dis.value + ')';
    if (mode == 'RAD') {
        dis.value = (1 / Math.tan(parseFloat(dis.value))).toString();
    }
    else {
        dis.value = (1 / Math.tan(parseFloat(dis.value) * (Math.PI / 180))).toString();
    }
}
//Mod
function absolute() {
    upper.value = 'abs(' + dis.value + ')';
    dis.value = Math.abs(parseFloat(dis.value)).toString();
}
function floor() {
    upper.value = 'floor(' + dis.value + ')';
    dis.value = Math.floor(parseFloat(dis.value)).toString();
}
function ceil() {
    upper.value = 'ceil(' + dis.value + ')';
    dis.value = Math.ceil(parseFloat(dis.value)).toString();
}
function rand() {
    dis.value = Math.random().toString();
}
function dms() {
    upper.value = "dms(" + dis.value + ")";
    var degree = Math.floor(parseFloat(dis.value));
    var minutes = ((parseFloat(dis.value) - Math.floor(parseFloat(dis.value))) * 60.0);
    var seconds = (minutes - Math.floor(minutes)) * 60.0;
    dis.value = degree + "." + Math.floor(minutes) + seconds.toFixed(0);
}
function deg() { }
function inverse() {
    upper.value = '1/(' + dis.value + ')';
    dis.value = (1 / parseFloat(dis.value)).toString();
}
var btnCount = 1;
function changeBtn() {
    if (btnCount % 2 == 0) {
        document.getElementById('sqr').innerHTML = 'x<sup>2</sup>';
        document.getElementById('root').innerHTML = '2&#x221A;x';
        document.getElementById('expo').innerHTML = 'x<sup>y</sup>';
        document.getElementById('tenpow').innerHTML = '10<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log';
        document.getElementById('log').disabled = false;
        document.getElementById('ln').innerHTML = 'ln';
        btnCount++;
    }
    else {
        document.getElementById('sqr').innerHTML = 'x<sup>3</sup>';
        document.getElementById('root').innerHTML = '3&#x221A;x';
        document.getElementById('expo').innerHTML = 'y&#x221A;x';
        document.getElementById('tenpow').innerHTML = '2<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log<sub>y</sub>x';
        document.getElementById('log').disabled = true;
        document.getElementById('ln').innerHTML = 'e<sup>x</sup>';
        btnCount++;
    }
}
function expo() {
    if (dis.value != '') {
        var fE = parseFloat(dis.value);
        dis.value = fE.toExponential();
    }
    else {
        var fE = 0;
        dis.value = fE.toExponential();
    }
}
function sqroot() {
    var sqRoot = document.getElementById('root').innerHTML;
    if (sqRoot == '2√x') {
        upper.value = '√(' + dis.value + ')';
        dis.value = Math.sqrt(parseFloat(dis.value)).toString();
    }
    else {
        upper.value = 'cuberoot(' + dis.value + ')';
        dis.value = Math.pow(parseFloat(dis.value), 1 / 3).toString();
    }
}
function xtoy() {
    var xToY = document.getElementById('expo').innerHTML;
    if (xToY == 'x<sup>y</sup>') {
        dis.value += '**';
    }
    else {
        dis.value = dis.value + "**(1/";
    }
}
function tentox() {
    var tenToX = document.getElementById('tenpow').innerHTML;
    if (tenToX == '10<sup>x</sup>') {
        upper.value = '10^(' + dis.value + ')';
        dis.value = Math.pow(10, parseFloat(dis.value)).toString();
    }
    else {
        upper.value = '2^(' + dis.value + ')';
        dis.value = Math.pow(2, parseFloat(dis.value)).toString();
    }
}
function ln() {
    var ln = document.getElementById('ln').innerHTML;
    if (ln == 'ln') {
        upper.value = 'ln(' + dis.value + ')';
        dis.value = Math.log(parseFloat(dis.value)).toString();
    }
    else {
        upper.value = 'e^(' + dis.value + ')';
        dis.value = (Math.pow(Math.E, parseFloat(dis.value))).toString();
    }
}
function plusminus() {
    if (dis.value) {
        if (parseFloat(dis.value) > 0)
            dis.value = (0 - parseFloat(dis.value)).toString();
        else
            dis.value = (Math.abs(parseFloat(dis.value))).toString();
    }
}
function log() {
    upper.value = 'log(' + dis.value + ')';
    dis.value = Math.log10(parseFloat(dis.value)).toString();
}
function factorial() {
    if (parseFloat(dis.value) < 100000000000) {
        upper.value = 'fact(' + dis.value + ')';
        var fact = 1;
        if (parseFloat(dis.value) == 0 || parseFloat(dis.value) == 1) {
            fact = 1;
        }
        else {
            for (var i = 1; i <= parseFloat(dis.value); i++) {
                fact *= i;
            }
        }
        dis.value = fact.toString();
    }
    else {
        dis.value = 'Infinity';
    }
}
function answer() {
    try {
        upper.value = dis.value + '=';
        dis.value = '';
        var x = upper.value.slice(0, -1);
        var y = eval(x);
    }
    catch (_a) {
        y = 'Error!';
    }
    var cb = document.getElementById('btn-check');
    if (cb.checked == true) {
        dis.value = y.toExponential();
    }
    else {
        dis.value = y;
    }
}
