const cntVal=document.querySelector('#counter');

const increament=()=>{
 
    let value=parseInt(cntVal.innerText);

    value=value+1;

    cntVal.innerText=value;
};

const decreament=()=>{
 
    let value=parseInt(cntVal.innerText);

    value=value-1;

    cntVal.innerText=value;
};