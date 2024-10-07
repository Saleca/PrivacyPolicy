/** Adds the content of the file `components/${name}.html` to the element with the ID `name` at start up.
 *  dispatches an event with name `${name}-added` when completes successfully.
 * @param {string} name 
 * */
function addContent(name) {
    fetch(`components/${name}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(name).innerHTML = data;
            window.dispatchEvent(new Event(`${name}-added`));
        })
        .catch(error => console.error(`Error fetching ${name}:`, error));
}

function addStateForm() {
    addContent('state-form');
}

function addHeader() {
    addContent('header');
}

function addFooter() {
    addContent('footer');
}

window.addEventListener('add-state-form', addStateForm);
window.addEventListener('add-header', addHeader);
window.addEventListener('add-footer', addFooter);


