'use strict';

function generateForm(value) {
    const newForm = document.createElement('form');
    newForm.method = 'post';
    newForm.action = "http://fe.it-academy.by/TestForm.php ";
    let script = document.getElementById("script");
    document.body.insertBefore(newForm, script);
    let counter = 0;

    value.forEach(item => {
        let label = item['label'],
            kind = item['kind'],
            name = item['name'],
            inputChange = 'input';

        switch (kind) {
            case kind = 'longtext':
                kind = 'text';
                newForm.innerHTML += `<br><label></label>${label}<${inputChange} id = "${counter++}" type="${kind}" name="${name}">`;
                break;
            case kind = 'number':
                newForm.innerHTML += `<br><label></label>${label}<${inputChange} id = "${counter++}" type="${kind}" name="${name}">`;
                break;
            case kind = 'shorttext':
                kind = 'text';
                newForm.innerHTML += `<br><label></label>${label}<${inputChange} id = "${counter++}" type="${kind}" name="${name}">`;
                break;
            case kind = 'check':
                kind = 'checkbox';
                newForm.innerHTML += `<br><label></label>${label}<${inputChange} id = "${counter++}" type="${kind}" name="${name}">`;
                break;
            case kind = 'combo':
                inputChange = 'select';
                newForm.innerHTML += createSelect(item, name, label);
                break;
            case kind = 'radio':
                inputChange = 'span';
                newForm.innerHTML += createRadio(item, name, label);
                break;
            case kind = 'memo':
                inputChange = 'textarea';
                newForm.innerHTML += `<br><label></label>${label}<${inputChange} id = "${counter++}" type="${kind}" name="${name}">`;
                break;
            case kind = 'submit':
                newForm.innerHTML += `<br><label></label>${label}<${inputChange} id = "${counter++}" type="${kind}" name="${name}">`;
                break;
            case kind = 'email':
                newForm.innerHTML += `<br><label></label>${label}<${inputChange} id = "${counter++}" type="${kind}" name="${name}">`;
                break;
            default:
                alert("error");
        }
    });

    function createSelect(item, name, label) {
        let options = [];
        options.push(`<br><label></label>${label}<select id = "${counter++}" type="select" name="${name}">`);

        if (`variants` in item) {
            item.variants.forEach(val => {
                options.push(`<option value="${val.value}">${val.text}</option>`);
            });
        }
        options.push(`</select>`);

        return options.join(``);
    }

    function createRadio(item, name, label) {
        let options = [];
        options.push(`<br><label></label>${label}<span id = "${counter++}">`);

        if (`variants` in item) {
            item.variants.forEach(val => {
                options.push(`<input type="radio" name="${name}" value="${val.value}">${val.text}</input>`);
            });
        }
        options.push(`</span>`);

        return options.join(``);
    }

    document.getElementById('5').firstChild.checked = true;
    document.getElementById('6').checked = true;
}