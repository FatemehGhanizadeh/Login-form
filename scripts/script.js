let eyeImg = document.querySelector('.myImg');
let typeAttr = document.querySelector('#password');

typeAttr.addEventListener('keyup', function(){
    let inputValue = typeAttr.value;

    if(inputValue!='')
    {
        eyeImg.style.display='inline-block';
    }

    else{
        eyeImg.style.display='none';}
});






eyeImg.addEventListener('click' , function(){

    let inputType = typeAttr.getAttribute('type');

    if(inputType=='password')
    {typeAttr.setAttribute('type' , 'text');
    eyeImg.setAttribute('src' , 'images/invisible-eye.png');}

    else
    {
        typeAttr.setAttribute('type' , 'password');
        eyeImg.setAttribute('src' , 'images/visible-eye.png');

    }

})