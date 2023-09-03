const seniorDecreaseBtn = document.querySelector('.counter__decrease--senior');
const seniorTicketNumber = document.querySelector('.counter__quantity--senior');
const seniorIncreaseBtn = document.querySelector('.counter__increase--senior');

let quantityOfSeniorTickets = 0;

const seniorDecrease = () => {
  quantityOfSeniorTickets--;
  updateSeniorSection();
};

const seniorIncrease = () => {
  quantityOfSeniorTickets++;
  updateSeniorSection();
};

const updateSeniorSection = () => {
  seniorTicketNumber.innerText = quantityOfSeniorTickets;

  if (quantityOfSeniorTickets === 0) {
    seniorDecreaseBtn.setAttribute('disabled', '');
    seniorTicketNumber.classList.remove('highlighted');
  } else if (quantityOfSeniorTickets > 0) {
    seniorDecreaseBtn.removeAttribute('disabled');
    seniorTicketNumber.classList.add('highlighted');
  }

  updateTotalPaymentAmount();
};

seniorDecreaseBtn.addEventListener('click', seniorDecrease);
seniorIncreaseBtn.addEventListener('click', seniorIncrease);
