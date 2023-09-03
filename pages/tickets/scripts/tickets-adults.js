const adultDecreaseBtn = document.querySelector('.counter__decrease--adult');
const adultTicketNumber = document.querySelector('.counter__quantity--adult');
const adultIncreaseBtn = document.querySelector('.counter__increase--adult');

let quantityOfAdultTickets = 2;
adultTicketNumber.innerText = quantityOfAdultTickets;

const adultDecrease = () => {
  quantityOfAdultTickets--;
  updateAdultSection();
};

const adultIncrease = () => {
  quantityOfAdultTickets++;
  updateAdultSection();
};

const updateAdultSection = () => {
  adultTicketNumber.innerText = quantityOfAdultTickets;

  if (quantityOfAdultTickets === 0) {
    adultDecreaseBtn.setAttribute('disabled', '');
    adultTicketNumber.classList.remove('highlighted');
  } else if (quantityOfAdultTickets > 0) {
    adultDecreaseBtn.removeAttribute('disabled');
    adultTicketNumber.classList.add('highlighted');
  }

  updateTotalPaymentAmount();
};

adultDecreaseBtn.addEventListener('click', adultDecrease);
adultIncreaseBtn.addEventListener('click', adultIncrease);
