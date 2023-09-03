/* TOTAL PAYMENT SECTION */
const totalPaymentAmount = document.querySelector('.payment__total-amount');
let totalPayment = 16;

const updateTotalPaymentAmount = () => {
  totalPayment =
    quantityOfAdultTickets * 8 +
    quantityOfSeniorTickets * 6 +
    quantityOfStudentTickets * 4;

  totalPaymentAmount.innerText = totalPayment;
  if (totalPayment === 0) {
    totalPaymentAmount.classList.remove('highlighted');
  } else if (totalPayment > 0) {
    totalPaymentAmount.classList.add('highlighted');
  }
};
