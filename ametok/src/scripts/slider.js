function Carousel(){
    const {data, limit, rootId, listId, itemClass, navigatorCustomClass, folder} = arguments[0];
    this.pageIndex = 0;
    this.data = data;
    this.limit = limit;
    this.rootId = rootId;
    this.listId = listId;
    this.itemClass = itemClass;
    this.navigatorCustomClass = navigatorCustomClass;
    this.folder = folder;
    this.root = document.querySelector(`#${rootId}`);
}

/*Init with option*/
Carousel.prototype.initImageCarousel = function(){
    if(!this.root) return;
    this.renderImageCarousel();
    this.root.innerHTML += this.attachNavigator();
    this.root.onclick = this.handleNavigatorSelection.bind(this);
}

Carousel.prototype.initTestimonialCarousel = function(){
    if(!this.root) return;
    this.renderTestimonialCarousel();
    this.root.innerHTML += this.attachNavigator();
    this.root.onclick = this.handleTestimonialNavigatorSelection.bind(this);
}

Carousel.prototype.initNewsCarousel = function(){
    if(!this.root) return;
    this.renderNewsCarousel();
    this.root.innerHTML += this.attachNavigator();
    this.root.onclick = this.handleNewsNavigatorSelection.bind(this);
}

Carousel.prototype.initShopCarousel = function(){
    if(!this.root) return;
    this.renderShopCarousel();
    this.root.innerHTML += this.attachNavigator();
    this.root.onclick = this.handleShopNavigatorSelection.bind(this);
}

Carousel.prototype.renderImageCarousel = function (){
    this.parent = document.querySelector(`#${this.listId}`);
    if(!this.parent) return;

    const min = this.limit * this.pageIndex;
    const max = min + this.limit;
    const newSlides = this.data.slice(min, max);

    const html = newSlides.map(item =>
        `<div class="${this.itemClass}"><img src='${this.folder}/${item.image}'/></div>`
    ).join('');

    this.parent.innerHTML = html;
}
/*End Init*/

/*Render with option*/
Carousel.prototype.renderTestimonialCarousel = function(){
    this.parent = document.querySelector(`#${this.listId}`);
    if(!this.parent) return;

    const min = this.limit * this.pageIndex;
    const max = min + this.limit;
    const newSlides = this.data.slice(min, max);

    const html = newSlides.map(item =>
        `
            <div class="${this.itemClass}">
                <img class="testimonial-avatar" src="${this.folder}/${item.image}" />
                <p class="testimonial-description">
                    ${item.content}
                </p>
                <p class="testimonial-name">
                    ${item.title}
                </p>
                <p class="testimonal-position text--small">
                    ${item.caption}
                </p>
            </div>
        `
    ).join('');

    this.parent.innerHTML = html;
}

Carousel.prototype.renderNewsCarousel = function(){
    this.parent = document.querySelector(`#${this.listId}`);
    if(!this.parent) return;

    const min = this.limit * this.pageIndex;
    const max = min + this.limit;
    const newSlides = this.data.slice(min, max);

    const html = newSlides.map(item =>
        `
            <div class="${this.itemClass}">
                <div class="news-top">
                    <a>
                        <img src="${this.folder}/${item.image}" alt="" class="news-img">
                    </a>
                    <a class="news-time">
                        <p class="news-day">${item.day}</p>
                        <div class="news-month">${item.month}</div>
                    </a>
                </div>
                <div class="news-body">
                    <a>
                        <p class="news-authur">
                        ${item.caption}
                        </p>
                    </a>
                    <a>
                        <h4 class="news-heading">
                        ${item.title}
                        </h4>
                    </a>
                    <p class="news-brief">
                    ${item.content}
                    </p>
                </div>
            </div>
        `
    ).join('');

    this.parent.innerHTML = html;
}

Carousel.prototype.renderShopCarousel = function(){
    this.parent = document.querySelector(`#${this.listId}`);
    if(!this.parent) return;

    const min = this.limit * this.pageIndex;
    const max = min + this.limit;
    const newSlides = this.data.slice(min, max);

    const html = newSlides.map(item =>
        `
            <div class="${this.itemClass}">
                <div class="content-list__main">
                    <div class="content-list__overlay">
                        <div class="content-list__detail">
                            <a class="content-list__btn text--small" href='${item.link}'>Add to Cart</a>
                        </div>
                    </div>
                    <img src="${this.folder}/${item.image}" alt="" class="content-list__img">
                </div>

                <h3 class="content-list__name">${item.title}</h3>
                <p class="content-list__price">$${item.price}</p>
                <span class="stars">
                    ${
                        Array.from(Array(item.star).keys()).map(() => 
                            `<i class="fa fa-star"></i>`
                        ).join('')
                    }
                </span>
            </div>
        `
    ).join('');

    this.parent.innerHTML = html;
}
/*End Render with option*/

/*Handle selection event with option*/
Carousel.prototype.handleNavigatorSelection = function(e){
    this.activeNavigatorLink(e);
    this.renderImageCarousel();
}

Carousel.prototype.handleTestimonialNavigatorSelection = function(e){
    this.activeNavigatorLink(e);
    this.renderTestimonialCarousel();
}

Carousel.prototype.handleNewsNavigatorSelection = function(e){
    this.activeNavigatorLink(e);
    this.renderNewsCarousel();
}

Carousel.prototype.handleShopNavigatorSelection = function(e){
    this.activeNavigatorLink(e);
    this.renderShopCarousel();
}
/*End Handle selection event with option*/

Carousel.prototype.attachNavigator = function(){
    const pageAmount = Math.ceil(this.data.length / this.limit);
    const amountArray = Array.from(Array(pageAmount).keys());
    return `
        <div class="navigator ${this.navigatorCustomClass}">
            ${amountArray.map(number =>
                    `<a data-index=${number} class='navigator-link ${number === this.pageIndex ? 'active' : ''}'></a>`
                ).join('')
            }
        </div>
    `;
}

Carousel.prototype.activeNavigatorLink = function(e){
    const navigatorLink = e.target.closest('.navigator-link');
    if (!navigatorLink) return;

    const index = navigatorLink.dataset.index;
    this.pageIndex = index;
    navigatorLink.classList.add('active');

    this.unActiveOtherNavigatorLinks(index);
}

Carousel.prototype.unActiveOtherNavigatorLinks = function(index){
    const navigatorLinks = this.root.querySelectorAll('.navigator-link');
    navigatorLinks.forEach(item => {
        if (item.dataset.index !== index) {
            item.classList.remove('active')
        }
    });
}