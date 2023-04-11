const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

function setModalMaxHeight() {
  if (!modalContent) {
    // Если элемент не найден, выходим из функции
    return;
  }

  const contentHeight = modalContent.scrollHeight;
  const windowHeight = window.innerHeight;
  const maxModalHeight = windowHeight * 0.8;

  if (contentHeight > maxModalHeight) {
    modal.style.maxHeight = maxModalHeight + 'px';
    modal.style.overflow = 'auto';
  } else {
    modal.style.maxHeight = contentHeight + 'px';
    modal.style.overflow = 'visible';
  }
}


document.addEventListener('DOMContentLoaded', function() {
  setModalMaxHeight();
});

window.addEventListener('resize', setModalMaxHeight);

export default setModalMaxHeight;
