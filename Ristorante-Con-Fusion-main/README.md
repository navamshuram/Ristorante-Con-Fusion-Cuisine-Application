# Restaurant Webpage

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### Screenshot

![](./images/desktop1.png)
![](./images/mobile1.png)

### Links

- Solution URL: [https://github.com/NandodkarAmogh/Ristorante-Con-Fusion](https://github.com/NandodkarAmogh/Ristorante-Con-Fusion)
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

- Github - [@NandodkarAmogh](https://github.com/NandodkarAmogh)






 
