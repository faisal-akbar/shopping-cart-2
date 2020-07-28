function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + '-count');
  // const productCount = parseInt(productInput.value);
  const productCount = getInputValue(product);
  // const caseNewCount = caseCount - 1;
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  // const caseTotal = caseNewCount * 59;
  let productTotal = 0;
  if (product == 'phone') {
    productTotal = productNewCount * 1219;
  }
  if (product == 'case') {
    productTotal = productNewCount * 59;
  }

  document.getElementById(product + '-total').innerText = productTotal;

  calculateTotal();
}

function calculateTotal() {
  const phoneCount = getInputValue('phone');
  const caseCount = getInputValue('case');

  const totalPrice = phoneCount * 1219 + caseCount * 59;
  document.getElementById('sub-total').innerText = totalPrice;

  const taxAmount = Math.round(totalPrice * (5 / 100));
  document.getElementById('tax').innerText = taxAmount;

  const grandTotal = totalPrice + taxAmount;
  document.getElementById('total').innerText = grandTotal;
}

function getInputValue(product) {
  const productInput = document.getElementById(product + '-count');
  const productCount = parseInt(productInput.value);
  return productCount;
}

// checkout product
document
  .getElementById('checkout-product')
  .addEventListener('click', function () {
    document.getElementById('cart-area').style.display = 'none';
    document.getElementById('order-confirm-area').style.display = 'block';
  });

const removeItem = document.getElementsByClassName('remove-item');
for (let i = 0; i < removeItem.length; i++) {
  removeItem[i].addEventListener('click', function (event) {
    event.target.parentElement.parentElement.parentElement.style.display =
      'none';
  });
}

// function calculateTotal() {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);

//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);

//     const totalPrice = phoneCount * 1219 + caseCount * 59;
//     document.getElementById("total-price").innerText = totalPrice;

// }
