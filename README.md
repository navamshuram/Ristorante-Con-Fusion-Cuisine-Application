# Ristorante-Con-Fusion-Cuisine-Application
# Restaurant Webpage

## Overview

### Links

- Live Site URL: [https://ristorante-con-fusion-javascript.netlify.app/](https://ristorante-con-fusion-javascript.netlify.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- [JavaScript](https://www.javascript.com/)

### What I learned

This project helped me in revising some of the core javascript concepts like DOM manipulations and styling.

```js
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', (e) => {
        //to close other questions while accessing one particular question
        questions.forEach((item) => {
            if(item !== question) {
                item.classList.remove('show-text')
            }
        })

        //toggling the show-hide functionality
        question.classList.toggle('show-text')
    })
})

```
## Author

- Github - [@navamshuram](https://github.com/navamshuram)






 
