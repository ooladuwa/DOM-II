// Your code goes here
// * `mouseenter / mouseleave`
const head = document.querySelector('.logo-heading')
    head.addEventListener('mouseenter', (event) => {
        head.style.color = 'dodgerBlue';
    });
    head.addEventListener('mouseleave', (event) => {
        head.style.color = 'black'
    });


// * 'click'
const links = document.querySelectorAll('nav a')
    links.addEventListener('click', () => {
        links.style.color = 'purple'
        // links.classList.add('sky');
        // links.classList.remove('sky');
        // setInterval(() => links.classList.toggle('sky'), 1000)
    }); 


// * 'mouseenter  
const busImg = document.querySelector('header img')
    busImg.addEventListener('mouseenter', (event) => {
        busImg.style.border = '2px dotted blue'
    });
    
// * 'click
let signUpButton = document.querySelectorAll('.btn');
    signUpButton.addEventListener('dblclick', (event) => {     
 // signUpButton.style.backgroundColor = 'blue'
        alert("You're ready to ride the bus!")
    })
    
//   * `keydown`


//   * `wheel`


//   * `load`


//   * `focus`


//   * `resize`


//   * `scroll`


//   * `select`


//   * `dblclick`


//   * `drag / drop`