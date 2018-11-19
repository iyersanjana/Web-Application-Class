var sum = new Array();
var i = 0;
var p;
function removeit() {
    var val = document.getElementById("myval").value;
    sum[p] = 0;
    var list = document.getElementById("List");
    list.removeChild(list.childNodes[p]);
}
function adder() {
    var food = document.getElementById("food").value;
    var cal = document.getElementById("cal").value;
    sum[i] = cal;
    i = i + 1;
    var node = document.createElement("LI");
    var txtnode = document.createTextNode(food);
    var calnode = document.createTextNode(cal);
    node.appendChild(txtnode);
    node.appendChild(calnode);
    document.getElementById("List").appendChild(node);
}
function sumit() {
    var s = 0;
    for (var p = 0; p < sum.length; p++) {
        var s = s + parseInt(sum[p]);
    }
    alert("The sum is " + s);
}
