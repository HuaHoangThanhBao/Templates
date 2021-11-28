document.addEventListener("DOMContentLoaded", function () {
    const clients = document.querySelectorAll('.client-content');
    const prevBtn = document.querySelector('#left-arrow');
    const rightBtn = document.querySelector('#right-arrow');

    if (!clients || !prevBtn || !rightBtn) return;

    var index = 0;
    activeClient(index)

    prevBtn.onclick = function () {
        index = index - 1 < 0 ? clients.length - 1: index - 1;
        activeClient(index)
    }
    
    rightBtn.onclick = function () {
        index = index + 1 < clients.length ? index + 1: 0;
        activeClient(index)
    }

    function activeClient(clientIndex){
        clients.forEach((item, index) => {
            if(index !== clientIndex){
                item.style.display = 'none'
            }
            else{
                item.style.display = 'block'
            }
        })
    }
});

