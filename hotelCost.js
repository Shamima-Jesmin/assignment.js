function hotelcost(stay){
    var amount =0;
    if (stay<=10){
        amount = stay*100;
    }
    else if(stay<=20){
        var first10Days = 10*100;
        var more = stay-10;
        var second10Days = more*80;
        amount = first10Days + second10Days;
    }
    else{
        var first10Days = 10*100;
        var second10Days = 10*80;
        var more = stay-20;
        var third10days = more*50;
        amount = first10Days + second10Days + third10days;
    }
    return amount;
}
var calculation = hotelcost(47);
console.log(calculation);