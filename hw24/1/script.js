let DYN_FORM = (formArray) => {
    const typeForm = {
        longtext: (form, ob) => {
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', ob.name);
            input.setAttribute('id', ob.name);
            form.appendChild(input);
        },
        number: (form, ob) => {
            let input = document.createElement('input');
            input.setAttribute('type', 'number');
            input.setAttribute('name', ob.name);
            input.setAttribute('id', ob.name);
            form.appendChild(input);
        },
        shorttext: (form, ob) => {
            let input = document.createElement('input');
            input.setAttribute('type', 'email');
            input.setAttribute('name', ob.name);
            input.setAttribute('id', ob.name);
            form.appendChild(input);
        },
        combo: (form, ob) => {
            let select = document.createElement('select');
            select.setAttribute('name', ob.name);
            select.setAttribute('id', ob.name);
            form.appendChild(select);
            ob.variants.forEach((ob) => {
                let option = document.createElement('option');
                option.setAttribute('value', ob['value']);
                option.textContent = ob['text'];
                select.appendChild(option);
            });
        },
        radio: (form, ob) => {
            let name = ob.name;
            ob.variants.forEach((ob) => {
                let radio = document.createElement('input');
                radio.setAttribute('value', ob['value']);
                radio.setAttribute('name', name);
                radio.setAttribute('type', 'radio');
                form.appendChild(radio);
                let label = document.createElement('label');
                label.setAttribute('type', 'radio');
                label.textContent = ob['text'];
                form.appendChild(label);
            });
        },
        check: (form, ob) => {
            let input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('name', ob.name);
            input.setAttribute('id', ob.name);
            form.appendChild(input);
        },
        memo: (form, ob) => {
            let textarea = document.createElement('textarea');
            textarea.setAttribute('name', ob.name);
            textarea.setAttribute('id', ob.name);
            form.appendChild(textarea);
        },
        submit: (form, ob) => {
            let input = document.createElement('input');
            input.setAttribute('type', 'submit');
            input.addEventListener('click', clickSubmit);
            form.appendChild(input);
        },
    };

    if (Array.isArray(formArray)) {
        const newForm = document.createElement('form');
        newForm.setAttribute('method', 'POST');
        newForm.setAttribute('action', 'http://fe.it-academy.by/TestForm.php');
        document.body.appendChild(newForm);

        let table = document.createElement('table');
        newForm.appendChild(table);

        formArray.forEach((ob) => {
            let tableRow = document.createElement('tr');
            table.appendChild(tableRow);

            let tLabel = document.createElement('td');
            tableRow.appendChild(tLabel);

            let line = document.createElement('label');
            line.setAttribute('for', ob.name);
            line.textContent = ob.label;
            tLabel.appendChild(line);

            let tFormLine = document.createElement('td');
            tableRow.appendChild(tFormLine);

            let f = typeForm[ob['kind']];
            f(tFormLine, ob);
        });
    };
};
