var invoiceamt;
var tax;
var numb;
var desc;
var qty;
var item;
var dis;
var itemr;
var droplist;
var selectindex;
var discount;
var rate = new Array();
rate = [20, 25, 10, 30];
function generateinvoice() {
    numb = parseInt(document.getElementById("partno").value);
    desc = document.getElementById("partdesc").value;
    qty = parseInt(document.getElementById("quantity").value);
    item = parseInt(document.getElementById("priceperitem").value);
    itemr = item.toFixed(2);
    dis = parseInt(document.getElementById("discount").value);
    droplist = (document.getElementById("country"));
    selectindex = droplist.selectedIndex;
    if (item < 0) {
        alert('Enter Valid Amount');
    }
    else {
        InvoiceAmt();
    }
}
function InvoiceAmt() {
    invoiceamt = item * qty;
    tax = invoiceamt + ((rate[selectindex] / 100) * invoiceamt);
    alert("The amount after tax is " + tax);
    discount = tax - ((dis / 100) * (invoiceamt));
    alert(discount + " is the discount after tax");
}
