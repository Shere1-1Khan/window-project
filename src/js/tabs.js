const Slider = {
  choiceGlazingType : document.querySelector('.glazing_slider'),
  choiceDefinitionType : document.querySelector('.slick-list')
};

const hideTabContent = (element, tabSelector) => {
  element.forEach((item) => {
    item.style.display = 'none';
  });
  tabSelector.forEach(item => {
    item.classList.remove('active');
});
};

const getTypeSliderItem = (evt) => {
  evt.preventDefault();
  if (evt.target) {
    const contentElement = document.querySelectorAll('.glazing_content');
    const sliderItem = document.querySelectorAll('.glazing_block');
    const itemIndex = evt.target.parentNode.closest('.slick-slide').dataset.slickIndex;

    hideTabContent(contentElement, sliderItem);
    contentElement[itemIndex].style.display = 'block';
    sliderItem[itemIndex].classList.add('active');
  }
};

const handlerSliders = () => {
  Slider.choiceGlazingType.addEventListener('click', getTypeSliderItem);
};

export {handlerSliders};
