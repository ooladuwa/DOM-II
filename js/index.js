// Your code goes here
// * `mouseenter / mouseleave`
const head = document.querySelector('.logo-heading')
    head.addEventListener('mouseenter', (event) => {
        head.style.color = 'dodgerBlue';
    });
    head.addEventListener('mouseleave', (event) => {
        head.style.color = 'black'
    });

    // * 'mouseover / mouseout 
const img = document.querySelector('img')
    img.addEventListener('mouseover', (event) => {
        img.style.border = '2px dotted blue'
    });
    img.addEventListener('mouseout', (event) => {
        img.style.border = 'none'
    })

    // * 'dblclick'
let signUpButton = document.querySelectorAll('.btn');
signUpButton.forEach(button => {
    button.addEventListener('dblclick', (event) => {     
        alert("You're ready to ride the bus!")
})
});

// * 'click'
let link = document.querySelectorAll('a')
    link.forEach(link => {
        link.addEventListener('click', (event) => {
            link.style.color = 'purple'
    })
    }); 
 // links.classList.add('sky');
        // links.classList.remove('sky');
        // setInterval(() => links.classList.toggle('sky'), 1000)
    
//   * `keydown`


//   * `wheel`


//   * `load`


//   * `focus`


//   * `resize`


//   * `scroll`


//   * `select`


//   * `drag / drop`