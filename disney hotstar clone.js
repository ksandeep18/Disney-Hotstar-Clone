let movies = [
    {
    name: "falcon and the winter solider",
    des:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nulla ad aut incidunt perspiciatis a.",
    image: "C:\Users\SandeepK\OneDrive\Desktop\Projects & Certificates\disny hotstar clone\resources disney clone\slider 2.PNG"
},
{
    name: "loki",
    des:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nulla ad aut incidunt perspiciatis a.",
    image:"C:\Users\SandeepK\OneDrive\Desktop\Projects & Certificates\disny hotstar clone\resources disney clone\slider 1.PNG"    
},
{
    name: "wanda vision",
    des:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nulla ad aut incidunt perspiciatis a.",
    image:"C:\Users\SandeepK\OneDrive\Desktop\Projects & Certificates\disny hotstar clone\resources disney clone\slider 3.PNG"  
},
{
    name: "luca",
    des:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nulla ad aut incidunt perspiciatis a.",
    image:"C:\Users\SandeepK\OneDrive\Desktop\Projects & Certificates\disny hotstar clone\resources disney clone\slider 5.PNG"  
}
];


const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0;// tracking current slide

constcreatSlide= () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    //create DOM elements
    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slidIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel,appendChild(slide);

    //setting up images
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    //setting elements classnames
    slide.className= 'slider';
    content.className='slide-content';
    h1.className='movie-title';
    p.className='movie-des';

    sliders.push(slide);
    
    if(slide.length){
        sliders[0].style.marginleft=`calc(-${sliders.length-2}%- ${
            30* (sliders.length-2)
        }px)`;
    }   
}

for(let i=0;i<3;i++){
    constcreatSlide();
}

setInterval(()=> {
    constcreatSlide();
},3000);

//video cards

const videoCards= [...document.querySelectorAll('.video-card')];
videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video =item.children[1];
        video.play()
    })
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    });
});

//card sliders
