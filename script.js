// Case Increase Event Handler
document.getElementById("case-increase").addEventListener('click', function () {
    handleCaseChange(true);
});

// Case decrease event handler
document.getElementById("case-decrease").addEventListener('click', function () {
    handleCaseChange(false);
});

function handleCaseChange(isIncrease) {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    // const caseNewCount = caseCount - 1;
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = caseTotal;
}


// Phone increase Event handler
document.getElementById("phone-increase").addEventListener('click', function () {
    handlePhoneChange(true);
});

// Phone decrease Event handler
document.getElementById("phone-decrease").addEventListener('click', function () {
    handlePhoneChange(false);
});


function handlePhoneChange(isIncrease) {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if (isIncrease == true) {
        phoneNewCount = phoneCount + 1;
    }
    if (isIncrease == false && phoneCount > 0) {
        phoneNewCount = phoneCount - 1;
    }

    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = phoneTotal;

}



// // Phone increase Event handler
// document.getElementById("phone-increase").addEventListener('click', function () {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = phoneTotal;
// });

// // Phone decrease Event handler
// document.getElementById("phone-decrease").addEventListener('click', function () {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = phoneTotal;
// });


// // Case Increase Event Handler
// document.getElementById("case-increase").addEventListener('click', function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;

//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = caseTotal;
// });


// // Case decrease event handler
// document.getElementById("case-decrease").addEventListener('click', function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;

//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = caseTotal;
// });