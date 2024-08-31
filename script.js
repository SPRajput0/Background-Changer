const button = document.querySelectorAll('.box');
const body = document.querySelector("body");


button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = '#7C93C3'
            
           }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = '#41B3A2'
           }
           if(color.target.id === 'box3'){
            body.style.backgroundColor = '#BDE8CA'
           }
           if(color.target.id === 'box4'){
            body.style.backgroundColor = '#D7C3F1'
           }
           if(color.target.id === 'box5'){
            body.style.backgroundColor = '#5F6F65'
           }
    })
})