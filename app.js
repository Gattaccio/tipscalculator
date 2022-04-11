var inputVal = document.getElementById('bill');
var tip = document.querySelectorAll('.tip');
let total = document.getElementById('total');
let tipAmount = document.getElementById('tipAmount');
var nrPeople = document.getElementById('nrPeople');
let reset = document.getElementById('reset');
let personalizzato = document.querySelector('.custom');
let allerta = document.querySelector('.alert');
var bill;
var tipEuro;

reset.addEventListener('click', () => {
    inputVal.value="";
    nrPeople.value="";
    tipAmount.innerHTML="$0.00";
    total.innerHTML="$0.00";
    personalizzato.value="";
})


tip.forEach(i => {
    i.addEventListener('click', () => {
        personalizzato.value="";
        bill=inputVal.value;
        if (i.firstChild.data=='5%') {
            tipEuro = bill*5/100;
            console.log(tipEuro)
        } else if (i.firstChild.data=='10%') {
            tipEuro = bill*10/100;
        } else if (i.firstChild.data=='15%') {
            tipEuro = bill*15/100;
        } else if (i.firstChild.data=='25%') {
            tipEuro = bill*25/100;
        } else if (i.firstChild.data=='50%') {
            tipEuro = bill*50/100;
        }
        if (nrPeople.value=="") {
            tipAmount.innerHTML ='$'+(tipEuro).toFixed(2);
        } else {
            tipAmount.innerHTML ="$"+(tipEuro/nrPeople.value).toFixed(2);
        }
        total.innerHTML='$'+(tipEuro).toFixed(2);
        
    })
})

inputVal.addEventListener('input', () => {
    if (nrPeople.value=='' && inputVal.value !='') {
        allerta.classList.add('active');
        nrPeople.classList.add('border-alert')
    }
    if (inputVal.value =='') {
        allerta.classList.remove('active');
        nrPeople.classList.remove('border-alert')
    }
})

nrPeople.addEventListener('input', calculateCustom);

personalizzato.addEventListener('input', calculateCustom);

function calculateCustom() {
    if (nrPeople.value !='') {
        allerta.classList.remove('active');
        nrPeople.classList.remove('border-alert')
    } else {
        allerta.classList.add('active');
        nrPeople.classList.add('border-alert')  
    }
    bill=inputVal.value;
    tipEuro=bill*personalizzato.value/100;
    if (nrPeople.value=="") {
        tipAmount.innerHTML ='$'+(tipEuro).toFixed(2);
    } else {
        tipAmount.innerHTML ="$"+(tipEuro/nrPeople.value).toFixed(2);
    }
    total.innerHTML='$'+(tipEuro).toFixed(2);
}






