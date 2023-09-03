/* ADULTS SECTION */
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

/* SENIORS SECTION */
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

/* STUDENTS SECTION */
const studentDecreaseBtn = document.querySelector(
  '.counter__decrease--student'
);
const studentTicketNumber = document.querySelector(
  '.counter__quantity--student'
);
const studentIncreaseBtn = document.querySelector(
  '.counter__increase--student'
);

let quantityOfStudentTickets = 0;

const studentDecrease = () => {
  quantityOfStudentTickets--;
  updateStudentSection();
};

const studentIncrease = () => {
  quantityOfStudentTickets++;
  updateStudentSection();
};

const updateStudentSection = () => {
  studentTicketNumber.innerText = quantityOfStudentTickets;

  if (quantityOfStudentTickets === 0) {
    studentDecreaseBtn.setAttribute('disabled', '');
    studentTicketNumber.classList.remove('highlighted');
  } else if (quantityOfStudentTickets > 0) {
    studentDecreaseBtn.removeAttribute('disabled');
    studentTicketNumber.classList.add('highlighted');
  }

  updateTotalPaymentAmount();
};

studentDecreaseBtn.addEventListener('click', studentDecrease);
studentIncreaseBtn.addEventListener('click', studentIncrease);

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
