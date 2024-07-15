const buttons = document.querySelectorAll('.btn');
const answers = document.querySelectorAll('.answer');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const currentQuestion = e.currentTarget.closest('.faq-box');
    const currentAnswer = currentQuestion.querySelector('.answer');

    //hide answer
    answers.forEach(answer => {
      answer.style.display = 'none';
      answer.previousElementSibling.querySelector('.btn').src = './assets/images/icon-plus.svg';
    });

    //toggle between FAQ'S
    if (currentAnswer.style.display === 'block') {
      currentAnswer.style.display = 'none';
      e.currentTarget.src = './assets/images/icon-plus.svg';
    } else {
      currentAnswer.style.display = 'block';
      e.currentTarget.src = './assets/images/icon-minus.svg';
    }
  });
});
