var reg = /[a-z]/ig;
// var reg2 = new RegExp(/[a-z]/, 'i');

const inputs = document.querySelectorAll('input');

const pattern = {
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, pattern[e.target.attributes.name.value])
    });
});

