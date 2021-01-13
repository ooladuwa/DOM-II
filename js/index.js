// Your code goes here
// * `mouseenter / mouseleave`
const head = document.querySelector('.logo-heading')
    head.addEventListener('mouseenter', () => {
        head.style.color = 'dodgerBlue';
    });
    head.addEventListener('mouseleave', () => {
        head.style.color = 'black'
    });

    // * 'mouseover / mouseout 
const img = document.querySelectorAll('img')
    img.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.border = '2rem solid white'
    })
    });

    img.forEach(item => {
        item.addEventListener('mouseout', () => {
            item.style.border = 'none'
    })
    });

   // 'dblclick'
let destination = document.querySelectorAll('.btn');
let newDestination = Array.from(destination)
newDestination.forEach(item => {
    item.addEventListener('dblclick', () => {
       alert("ride the bus!")
    })
})


// * 'click'
let link = document.querySelectorAll('a')
    link.forEach(link => {
        link.addEventListener('click', () => {
            link.style.color = 'purple'
    })
    }); 
    
    const headings = document.querySelectorAll("h2") 

        headings.forEach(heading => {
            heading.addEventListener("mousemove", (event) => {
                heading.style.color = "orange"
            })
        })


      


    let header = document.querySelector('header')
        header.addEventListener('mouseover', () => {
            header.classList.add('dodgerblue');
            header.classList.remove('dodgerblue');
            setInterval(() => header.classList.toggle('dodgerblue'), 1000)
        })
        
    
//   * `keydown`


//   * `wheel`


//   * `load`


//   * `focus`


//   * `resize`


//   * `scroll`


//   * `select`


//   * `drag / drop`