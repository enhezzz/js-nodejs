function carousel(container,slider,leftArrow,rightArrow,circleControlers){
    let picIndex = 0;
    let timer = null;
    console.log(container,slider,leftArrow,rightArrow,circleControlers)
    let circleControlersLength = circleControlers.length;
    timer = setInterval(function () {
        if (picIndex > circleControlersLength-1) {
            picIndex = 0;
        }
        slider.style.left = -picIndex * 600 + 'px';
        circleControlers.forEach((controler) => {
            controler.classList.remove('active');
        })
        circleControlers[picIndex].classList.add('active')
        picIndex++;
        // console.log(picIndex > 4)
        // console.log(picIndex)
    }, 2000);
    container.onmouseenter = function () {
        clearInterval(timer);
    }
    container.onmouseleave = function () {
        timer = setInterval(function () {
            if (picIndex > circleControlersLength-1) {
                picIndex = 0;
            }
            slider.style.left = -picIndex * 600 + 'px';
            circleControlers.forEach((controler) => {
                controler.classList.remove('active');
            })
            circleControlers[picIndex].classList.add('active')
            picIndex++;
            // console.log(picIndex > 4)
            // console.log(picIndex)
        }, 2000);
    }
    leftArrow.onclick = function () {
        picIndex--;
        if (picIndex < 0)
            picIndex = circleControlersLength-1;
        console.log(picIndex)
        slider.style.left = -picIndex * 600 + 'px';
        circleControlers.forEach((controler) => {
            controler.classList.remove('active');
        })
        circleControlers[picIndex].classList.add('active')
    }
    rightArrow.onclick = function () {
        picIndex++;
        if (picIndex > circleControlersLength-1)
            picIndex = 0;
        slider.style.left = -picIndex * 600 + 'px';
        circleControlers.forEach((controler) => {
            controler.classList.remove('active');
        })
        circleControlers[picIndex].classList.add('active')
    }
    controlers.forEach((controler, index) => {
        controler.onclick = function () {
            picIndex = index;
            slider.style.left = -picIndex * 600 + 'px';
            circleControlers.forEach((controler) => {
                controler.classList.remove('active');
            })
            circleControlers[picIndex].classList.add('active')
        }
    })
}