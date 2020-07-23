class Jquery {
    constructor(selector) {
        this.selector = selector;
    }

    on(eventType, callback) {
        this.selector.addEventListener(eventType, callback);
        return this;
    }
    // *Манипуляции
    // С помощью функций из этого раздела вы можете узнавать и изменять состояние и содержимое
    // элементов DOM.Это может быть изменение атрибутов(в том числе классов и идентификаторов),
    // разнообразная работа с содержимым элементов(создание, удаление и добавление элементов и текста).
    // Кроме того вы сможете узнавать такие параметры как размер элементов и скроллинга.

    //* Работа с аттрибутами и свойствами:

    attr(attrName, value = '') {
        // Возвращает или изменяет значение атрибутов у выбранных элементов страницы.
        if (typeof (attrName) == 'object') {
            for (let key in attrName) {
                console.log(key, attrName[key]);
                this.selector.setAttribute(key, attrName[key]);
            }
            return this;
        } else if (value === '') {
            return this.selector.getAttribute(attrName);
        }
        this.selector.setAttribute(attrName, value);
        return this;
    }

    removeAttr(attrName) {
        // Метод для удаления атрибутов (таких как id, class, title и.т.д) у элементов страницы.
        this.selector.removeAttribute(attrName);
        return this;
    }

    // prop(propName, value = '') {
        // Возвращает или изменяет значение свойств выбранных элементов страницы.
        // TODO
    // }

    // removeProp(propName) {
        // Удаляет свойства у выбранных элементах страницы (разница и связь между атрибутами и свойствами).
        // TODO
    // }

    addClass(className) {
        // Добавляет класс(ы) выбранным элементам страницы.
        this.selector.classList.add(className);
        return this;
    }

    removeClass(className) {
        // Удаляет заданные классы у элементов на странице.
        this.selector.classList.remove(className);
        return this;
    }

    toggleClass(className) {
        // Добавляет или удаляет заданный класс(ы) по принципу переключателя (добавляет, если элемент не содержит класса, и удаляет, если класс есть).
        this.selector.classList.toggle(className);
        return this;
    }

    hasClass(className) {
        // Проверяет наличие класса у элементов страницы.
        return this.selector.classList.contains(className);
    }

    val(newVal = '') {
        // Метод позволяет получать и изменять значения элементов форм.
        if (newVal !== '') {
            this.selector.value = newVal;
            return this;
        }
        return this.selector.value;
    }

    // *Работа с параметрами и стилями:

    css(string = '') {
        // Возвращает или изменяет значения css-величин у выбранных элементов страницы.
        // Пример использования:
        // $('.class').css('position:relative; top:100; left:100;')
        if (string !== '') {
            this.selector.style.cssText += string;
            return this;
        }
        return this.selector.style.cssText;
    }

    height(newHeight = '') {
        // высота элемента без учета отступов и толщины рамки.
        if (newHeight !== '') {
            this.selector.style.height = `${newHeight}px`;
            return this;
        }
        return getComputedStyle(this.selector).height;
    }

    innerHeight(newHeight = '') {
        // высота элемента с учетом размера внутренних отступов (padding).
        return this.selector.clientHeight;
    }

    outerHeight(newHeight = '') {
        //  высота элемента с учетом внутренних отступов, рамки (border-width)
        return this.selector.offsetHeight;
    }

    width(newWidth = '') {
        // высота элемента без учета отступов и толщины рамки.
        if (newWidth !== '') {
            this.selector.style.width = `${newWidth}px`;
            return this;
        }
        return getComputedStyle(this.selector).width;
    }

    innerWidth(newWidth = '') {
        // высота элемента с учетом размера внутренних отступов (padding).
        return this.selector.clientWidth;
    }

    offset(){

    }

    position(){
        
    }

    outerWidth(newWidth = '') {
        //  высота элемента с учетом внутренних отступов, рамки (border-width)
        return this.selector.offsetWidth;
    }

    ready(callback) {
        document.addEventListener('DOMContentLoaded', callback);
        return this;
    }

    parent() {
        return this.selector.parentNode;
    }

    text(newText = "") {
        if (newText === "") {
            return this.selector.textContent;
        }
        this.selector.textContent = newText;
        return this;
    }

    html(newHTML = "") {
        if (newHTML === "") {
            return this.selector.innerHTML;
        }
        this.selector.innerHTML = newHTML;
        return this;
    }

    hide(ms) {
        this.selector.style.transition = `${ms}ms`;
        this.selector.style.opacity = '0';
        return this;
    }

    show(ms) {
        this.selector.style.transition = `${ms}ms`;
        this.selector.style.opacity = '1';
        return this;
    }

    resize(callback) {
        this.selector.addEventListener('resize', callback);
        return this;
    }
    
    animate(string, ms = 0) {
        console.log(this.selector);
        this.selector.style.transition = `${ms}ms`;
        this.selector.style.cssText += string;
        return this;
    }

    delay(ms) {
        // TODO
    }

}
const $ = function (selector) {
    if (typeof (selector) === 'string') {
        return new Jquery(document.querySelector(selector));
    } else {
        return new Jquery(selector);
    }
}