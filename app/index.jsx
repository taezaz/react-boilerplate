import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './containers/HomePage';

const render = (Component) => {
    ReactDOM.render(
        <Component />,
        document.getElementById('app'),
    );
};

document.addEventListener('DOMContentLoaded', () => {
    render(HomePage);
});

if (module.hot) {
    module.hot.accept();
}
