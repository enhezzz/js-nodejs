  function carousel(wraper,banners,prever,nexter,controlers){
        for(let i = 0;i<controlers.length;i++){
        controlers[i].addEventListener('click',function(){
            for(let i = 0;i<banners.length;i++){
                banners[i].classList.remove('active');
                controlers[i].classList.remove('on');
            }
            banners[i].classList.add('active');
            this.classList.add('on');
            currentIndex = i;
        });
    }
        let currentIndex = 0;
        let timer = setGap();
        nexter.addEventListener('click',function(){
            for(let i = 0;i<banners.length;i++){
                banners[i].classList.remove('active');
                controlers[i].classList.remove('on');
            }
           
            if(currentIndex<2)
            currentIndex++;
            else
            currentIndex = 0;
            banners[currentIndex].classList.add('active');
            controlers[currentIndex].classList.add('on')
            
        })
        prever.addEventListener('click',function(){
            for(let i = 0;i<banners.length;i++){
                banners[i].classList.remove('active');
                controlers[i].classList.remove('on');
            }
            if(currentIndex == 0)
            currentIndex = 2
            else
            currentIndex--;
            banners[currentIndex].classList.add('active');
            controlers[currentIndex].classList.add('on')
        })
        wraper.addEventListener('mouseenter',function(){
            clearInterval(timer)
        })
        wraper.addEventListener('mouseleave',function(){
            timer = setGap();
        })
        function setGap(){
            return setInterval(function () {
                if(currentIndex == 2)
                currentIndex = -1
            for(let i = 0;i<banners.length;i++){
                if(i === currentIndex+1){
                    banners[i].classList.add('active');
                    controlers[i].classList.add('on');
                }
                
                else{
                    banners[i].classList.remove('active');
                    controlers[i].classList.remove('on');
                }
                
                
            }
            if(currentIndex<2)
            currentIndex++;
            else{
                currentIndex = -1;
            }
          },2000)
        }
       
    }