const hamburger = document.querySelector('.hamburger');
        const navbar = document.querySelector('ul');
        const body = document.querySelector('body')
        let firstline = document.getElementById('firstline');
        let secondline = document.getElementById('secondline');
        let thirdline = document.getElementById('thirdline');


        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('slide');
            firstline.classList.toggle('line1');
            secondline.classList.toggle('line2');
            thirdline.classList.toggle('line3');
        })

        