// Table Rows - Hover

const table1 = document.querySelector(".table-1");
const table1Rows = table1.querySelectorAll('tr');


function hoverBackground() {
    this.classList.add('row-hover');    
    const thisRowColumn1 = this.children[1];
    const button = thisRowColumn1.querySelector('.notes-button');
    button.style.display = "inline";
}

function hoverBackgroundEnd() {
    this.classList.remove('row-hover');  
    const thisRowColumn1 = this.children[1];
    const button = thisRowColumn1.querySelector('.notes-button');
    button.style.display = "none";  
}

table1Rows.forEach(row => row.addEventListener('mouseenter', hoverBackground));
table1Rows.forEach(row => row.addEventListener('mouseleave', hoverBackgroundEnd));


// Checkbox
const colCheck = document.querySelectorAll('.col-check');
const checkbox = document.querySelectorAll('.checkbox');

function checked() {
    const parent = this.parentElement;
    if(this.checked) {
        parent.style.background = "rgba(238,132,52, 0.65)";
    } else {
        parent.style.background = "rgba(238,132,52, 0.25)"
    }
}

checkbox.forEach(check => check.addEventListener('change',checked));


