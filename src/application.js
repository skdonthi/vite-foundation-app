import 'foundation-sites'
import $ from 'jquery';

window.$ = $;

window.addEventListener('load', (event) => {
    initPage();
});

window.addEventListener('turbo:render', (event) => {
    initPage();
});

function initPage() {
    $(document).foundation();
    console.log('foundation ready');
}
