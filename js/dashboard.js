// deposit section starts here

document.getElementById('deposit-button').addEventListener('click', function() {
    
    const depositInput = document.getElementById('deposit-amount');
    const depositAmount = depositInput.value;
    const depositTotal = document.getElementById('deposit-total');
    const balanceTotal = document.getElementById('balance-total')
    
    if (!isNaN(depositAmount)) {
        if (depositAmount >= 10) {
            depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositAmount);
            balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(depositAmount);
            depositInput.value = '';
        }
        else {
            alert('Minimum deposit amount $10');
        }
    }
    else {
        alert('Enter a valid amount...!!!');
    }
});


// withdraw section starts here

document.getElementById('withdraw-button').addEventListener('click', function() {
    
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawInput.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const balanceTotal = document.getElementById('balance-total');
    
    if (!isNaN(withdrawAmount)) {
        if (withdrawAmount >= 20) {
            if (withdrawAmount <= parseFloat(balanceTotal.innerText)) {
                withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount);
                balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(withdrawAmount);
                withdrawInput.value = '';
            }
            else {
                alert('Not enough money for withdraw...!!!');
            }
        }
        else {
            alert('Minimum withdraw amount $20');
        }
    }
    else {
        alert('Enter a valid amount...!!!');
    }
});