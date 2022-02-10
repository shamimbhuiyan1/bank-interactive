// handle deposit button event

document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount deposited

    const depositInput = document.getElementById('deposit-input') ;
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount); 

    // deposit total 

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    
    const previousDepositAmount=parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount+newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousBalancetotal =parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalancetotal + newDepositAmount ;
    balanceTotal.innerText = newBalanceTotal;

    // get the deposit input field 
    depositInput.value ='';
})



// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput =document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);


    // ste withdraw total 

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal; 

    // clear withdraw input

    withdrawInput.value = '';
})