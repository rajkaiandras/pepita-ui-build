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
