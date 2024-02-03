import Typed from 'typed.js';

export default (username) => {
    let typed = new Typed('#whoami', {
        strings: [`$whoami - ${username}`],
        typeSpeed: 50,
        startDelay: 1000,
    });

    return typed
};