const btn = document.getElementById("GenPass");
const pass = document.getElementById("pass");
const range = document.getElementById("range");
const rangeVal = document.getElementById("rangeVal");

const UpperCase = document.getElementById("UpperCase");
const LowerCase = document.getElementById("LowerCase");
const Number = document.getElementById("Number");
const Symbol = document.getElementById("Symbol");

const copyBtn = document.getElementById("copyBtn")

rangeVal.innerText = range.value;


range.addEventListener("input", (e)=>{
    e.preventDefault();
    rangeVal.innerText = e.target.value;
})


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    let CapitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let SmallLetter = 'abcdefghijklmnopqrstuvwxyz';
    let symbols = '~!#$%^&*()_-+:{|}';
    let numbers = '0123456789'

    let FinalStr =  ''

    if(UpperCase.checked){
        FinalStr += CapitalLetter
    }
    if(LowerCase.checked){
        FinalStr += SmallLetter
    }
    if(Number.checked){
        FinalStr += numbers
    }
    if(Symbol.checked){
        FinalStr += symbols
    }
    if(FinalStr === ''){
        alert("Check atleast One Field!!!")
        pass.innerText = ''
        return
    }

    let latestPass = '';

    for (let i = 0; i < range.value; i++){

        let radomNum = Math.floor(Math.random()* FinalStr.length)
        // console.log(radomNum)
        latestPass +=FinalStr[radomNum];
    }

    pass.innerText = `${latestPass}`
})

copyBtn.addEventListener("click",()=>{
    window.navigator.clipboard.writeText(pass.innerText)
    alert('Password copied to Clipboard')
})
