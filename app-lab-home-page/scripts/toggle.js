document.addEventListener('DOMContentLoaded', function(){
    const toggleBtn = document.querySelectorAll('.ask-toggle__btn');
    const toggleBodies = document.querySelectorAll('.ask-toggle__body');

    if(!toggleBtn || !toggleBodies) return;

    toggleBtn.forEach((item, index) => {
        item.onclick = (e) => {
            if(item.classList.contains('collapse')){
                item.classList.remove('collapse')
                item.classList.add('expand')
            }
            else{
                item.classList.remove('expand')
                item.classList.add('collapse')
            }
            
            toggleBodies.forEach((body, bodyIndex) => {
                if(bodyIndex === index){
                    if(body.classList.contains('active')){
                        body.classList.remove('active')
                    }
                    else{
                        body.classList.add('active')
                    }
                }
            })
        }
    })

})