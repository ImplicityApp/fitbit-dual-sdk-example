import document from 'document';

console.log('Initializing app...');

const popupSvg = document.getElementById('my-popup') as ContainerElement;
popupSvg.style.display = 'inline';

const leftButtonSvg = document.getElementById('button-left') as Element;
leftButtonSvg.onclick = (_) => {
  console.log('Left button clicked!');
  popupSvg.style.display = 'none';
};

const rightButtonSvg = document.getElementById('button-right') as Element;
rightButtonSvg.onclick = (_) => {
  console.log('Right button clicked!');
  popupSvg.style.display = 'none';
};
