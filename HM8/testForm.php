<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>

    const div1 = document.createElement('div');
    const label1 = document.createElement("LABEL");
    const textLabel1 = document.createTextNode("Название сайта:");
    label1.setAttribute('name', 'sitename');
    label1.appendChild(textLabel1);
    const input1 = document.createElement("INPUT");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "title");

    document.body.appendChild(div1);
    div1.appendChild(label1);
    div1.appendChild(input1);

</script>

</body>
</html>


<?php


?>