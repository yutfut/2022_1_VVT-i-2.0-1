const header = (auth = false) => {
    const template =  `
        <header>
            <div data-section="main">
                <img src="icons/delivery_icon.svg" data-section="main">
                <a data-section="main">Delivery Club</a>
            </div>
            <div id="search">
            </div>
            {{#auth}}
                <div id="logoutButton">
                    <img src="icons/profile.svg">
                    <a>Выйти</a>
                </div>
            {{/auth}}
            {{^auth}}
                <div data-section="login">
                    <img src="icons/profile.svg" data-section="login">
                    <a data-section="login">Войти</a>
                </div>
            {{/auth}}
        </header>
    `;
    return Mustache.render(template, {auth});
};

export default header;