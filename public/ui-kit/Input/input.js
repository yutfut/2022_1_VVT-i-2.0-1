/**
 * @function Создает html-строку для создания ui-kit компонента input формы через шаблонатор Mustache.
 * @param {string} title - название поля input.
 * @param {string} type - значение атрибута type тега <input>.
 * @param {string} placeholder - значение атрибута placeholder тега <input>.
 * @param {string} id - значение атрибута id блока поля input и поля ошибки.
 * @param {string} error - текст ошибки валидации входных данных.
 * @return {string} HTML строка для отрисовки ui-kit компонента input.
 */
const input = (title, type, placeholder, id, error = 'Ошибка') => {
    const template = `
        <div class="input-block">
            <div class="title">{{title}}</div>
            <div {{#id}} id={{id}} {{/id}}>
                <input placeholder="{{placeholder}}" type="{{type}}">
                <div class="hidden">{{error}}</div>
            </div>
        </div>
    `;

    return Mustache.render(template, {title, type, placeholder, id, error});
};

export default input;