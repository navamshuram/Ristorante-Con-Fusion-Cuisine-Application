const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 70,
    img: "./images/item-1.jpeg",
    desc: `A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 180,
    img: "./images/item-2.jpeg",
    desc: ` Minced flavoured Vegetable deep fried and dressed with mayo and Lettuce.A cut of Julienne potatoes deep fried, salted and served with tomato sauce.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 80,
    img: "./images/item-3.jpeg",
    desc: `A milkshake is a sweet drink made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 40,
    img: "./images/item-4.jpeg",
    desc: `Egg toast or egg bread toast recipe made with eggs, bread, onions, chilies and herbs. Egg toast is one of the most popular street foods from India. It is very much eaten in all regions as a breakfast or fast food. `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 60,
    img: "./images/item-5.jpeg",
    desc: `Minced flavoured Vegetable deep fried and dressed with mayo, egg and Lettuce. `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 180,
    img: "./images/item-6.jpeg",
    desc: `Oreo milkshake is an easy milkshake made with vanilla ice cream, milk, and Oreo biscuits and chocolate sauce`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 250,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "quarantine buddy",
    category: "shakes",
    price: 100,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//navbar
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

//event listeners
navToggle.addEventListener('click', () => {
  console.log(links.classList);

  // using if - else
  // if(links.classList.contains('show-links')){
  //     links.classList.remove('show-links')
  // } else {
  //     links.classList.add('show-links');
  // }

  // using toggle
  links.classList.toggle('show-links')
})

// about section

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

//menu
const sectionCenter = document.querySelector('.section-center-menu');
const container = document.querySelector('.btn-container');

//Event listeners
//load Items
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  
  const categories = menu.reduce((values, item) => {
    // if(!values.includes(item.category)){
      //   values.push(item.category)
      // }
      (!values.includes(item.category) ? values.push(item.category) : null)
      return values;
    },['all'])
    const categoryBtns = categories.map((category) =>(
      `<button class="filter-btn" data-id="${category}">${category}</button>`
      ) ).join("");
      container.innerHTML = categoryBtns;
      const filterBtns = document.querySelectorAll('.filter-btn');
      displayMenuBtns(filterBtns)
});


//Filter Items function
const displayMenuBtns = (filterBtns) => {
  filterBtns.forEach((btn) => btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItem) => {
      if(menuItem.category === category){
        return menuItem;
      }
    } 
      
    )
    {category !== 'all'? displayMenuItems(menuCategory) : displayMenuItems(menu) }
  }))
}




//functions
const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {

    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">₹${item.price}</h4>
      </header>
      <p class="item-text">
      ${item.desc}
      </p>
    </div>
  </article>`;

  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML= displayMenu;
}


//using selectors inside the element - questions

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
