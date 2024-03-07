const navlist = document.querySelector('.nav-list');
const section = document.querySelectorAll('.section');

const Sidebar = (function Sidebar(){
    const Coordinates = (function Coordinates() {
        let y = 0;

        return {
            y,
        }
    })

    const updateDiv = function updateDiv() {
        window.addEventListener('scroll', ()=> {
            Sidebar.y = window.scrollY
            // console.log(Sidebar.y)

            const directChildren = navlist.children;
            // if(Sidebar.y >)

            for(let i = 0; i < directChildren.length; i++) {
                switch(i) {
                    case 0: 
                        if(section[i].getBoundingClientRect().top < -75 && section[i].getBoundingClientRect().top - 10 > -section[i].getBoundingClientRect().height) {
                            directChildren[i].classList.add('active');
                            console.log(section[i].getBoundingClientRect().top)
                        }
                        else {
                            directChildren[i].classList.remove('active');
                        }
                        break;
                    case 5: 
                        if(section[i].getBoundingClientRect().top < -10 && section[i].getBoundingClientRect().top + -150 > -section[i].getBoundingClientRect().height) {
                            directChildren[i].classList.add('active');
                            console.log(section[i].getBoundingClientRect().top)
                        }
                        else {
                            directChildren[i].classList.remove('active');
                        }
                        break;
                    
                    default:
                        if(section[i].getBoundingClientRect().top < 10 && section[i].getBoundingClientRect().top + 10 > -section[i].getBoundingClientRect().height) {
                            directChildren[i].classList.add('active');
                            console.log(section[i].getBoundingClientRect().top)
                        }
                        else {
                            directChildren[i].classList.remove('active');
                        }
                }

            }
        })
    }

    const init = function init() {
        updateDiv();
    };

    return {
        init: init,
    };
})();

window.addEventListener('load', function() {
    Sidebar.init()
})

function addDynamicFooterDate() {
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear();
    footer.textContent = year;
}
addDynamicFooterDate()