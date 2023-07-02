const Slider = {
  GlazingSlider : {
    triger : document.querySelector('.glazing_slider'),
    content : document.querySelectorAll('.glazing_content'),
    selectorElement : document.querySelectorAll('.glazing_block'),
    class : 'active',
  },
  DecorationOrder : {
    triger : document.querySelector('.decoration_slider'),
    content : document.querySelectorAll('.decoration_content > div > div'),
    selectorElement : document.querySelectorAll('.no_click'),
    class : 'after_click'
  },
  itemIndex : '.slick-slide',
  index : 'slickIndex',
};
const hideTabContent = (element, tabSelector, classElement) => {
  element.forEach((item) => {
    item.style.display = 'none';
  });
  tabSelector.forEach((item) => {
    item.classList.remove(classElement);
  });
};

const showTabContent = (contentElement, tabSelector, classElement) => {
  contentElement.style.display = 'block';
  tabSelector.classList.add(classElement);
};


const bindTabs = ({data}) => {

  data.triger.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target) {
      const index = evt.target.parentNode.closest(Slider.itemIndex).dataset[Slider.index];
      hideTabContent(data.content, data.selectorElement, data.class);
      showTabContent(data.content[index], data.selectorElement[index], data.class);
    }
  });
};

const handlerSliders = () => {
  bindTabs({data : Slider.GlazingSlider});
  bindTabs({data : Slider.DecorationOrder});
};

export {handlerSliders};
