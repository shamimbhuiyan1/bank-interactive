// handle deposit button event

document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount deposited

    const depositInput = document.getElementById('deposit-input') ;
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    
    const previousDepositAmount=parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount+newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // get the deposit input field 
    depositInput.value ='';
})