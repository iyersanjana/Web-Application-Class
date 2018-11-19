  let invoiceamt:number;
  let tax:number;
  let numb:number;
  let desc:string;
  let qty:number;
  let item:number;
  let dis:number;
  let itemr;
  let droplist;
  let selectindex;
  let discount;
  let rate = new Array();
  rate=[20,25,10,30];
  
function generateinvoice()
{
    
    numb = parseInt((<HTMLInputElement>document.getElementById("partno")).value);
    desc = (<HTMLInputElement>document.getElementById("partdesc")).value;
    qty = parseInt((<HTMLInputElement>document.getElementById("quantity")).value);
    item = parseInt((<HTMLInputElement>document.getElementById("priceperitem")).value);
    itemr = item.toFixed(2);
    dis = parseInt((<HTMLInputElement>document.getElementById("discount")).value);
    droplist = (document.getElementById("country")) as HTMLSelectElement;
    selectindex = droplist.selectedIndex;

    if(item<0)
    {
         alert('Enter Valid Amount');

    }
    else{
       
        InvoiceAmt();
    }
}
function InvoiceAmt()
{
    invoiceamt = item*qty;
    tax=invoiceamt+((rate[selectindex]/100)*invoiceamt);

    alert("The amount after tax is "+tax);

    discount = tax-( (dis/100)*(invoiceamt));
    alert(discount+" is the discount after tax");

}