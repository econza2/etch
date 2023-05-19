let gridNumber = prompt('How many grid squares?');


if (gridNumber > 100){
  alert('You have entered grid more than 100 squares');
  location.reload();
}






buttonsdiv = document.querySelector('#buttonsdiv');

vertical = document.querySelector('.container-vertical');



function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 



for (let i = 0; i < gridNumber; i++){
    
    horizontal = document.createElement('div');
    horizontal.setAttribute("class", "container-horizontal");

    for(let j=0; j < gridNumber; j++){
        intoHorizontal = document.createElement('div');
        intoHorizontal.setAttribute("class","innerH");
        //intoHorizontal.style.border = 'solid 2px';
        horizontal.append(intoHorizontal);
    }

    vertical.append(horizontal);
}



const innerH = document.querySelectorAll('.innerH');


erase = document.querySelector('#erase');

eraseBackground = document.createElement('div');
eraseBackground.textContent = "You have Selected Eraser";

erase.addEventListener('click',
  function(){
    buttonsdiv.append(eraseBackground);
    rainbowEffect.remove();
    blacken.remove();

    innerH.forEach((item) => {
      item.addEventListener('mouseover',
      function(){
        item.style.background = 'white';
      }
      )
    }
    );
  }
);

rainbow = document.querySelector('#rainbow');

rainbowEffect = document.createElement('div');
rainbowEffect.textContent = 'You have Selected Rainbow Effect';

rainbow.addEventListener('click',
  function(){
    buttonsdiv.append(rainbowEffect);
    eraseBackground.remove();
    blacken.remove();

    innerH.forEach((item)=> {
      item.addEventListener("mouseover",
        function(){
          item.style.backgroundColor = randomColor();
        }
      )
  }
  );
  }
);


black = document.querySelector('#black');

blacken  = document.createElement('div');
blacken.textContent = 'You have Selected Blacken Effect';

black.addEventListener('click',
  function(){
    buttonsdiv.append(blacken);
    eraseBackground.remove();
    rainbowEffect.remove();

    innerH.forEach((item) => {
      item.addEventListener('mouseover',
        function(){
          item.style.backgroundColor = 'black';
          let opacity = Number(item.style.opacity);
          item.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
        }
      )
    }
    )
  }
)

const body = document.querySelector('body');

const refreshPage = document.createElement('div');
refreshPage.innerHTML = '<button onClick="window.location.reload();">Change Number of Grid Squares</button>';
body.append(refreshPage);


