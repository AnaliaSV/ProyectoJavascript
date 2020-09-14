const DOMBuilder = function (){
    this.h5  = function(title) {
        const h5 = document.createElement('h5');
        h5.classList.add('title');
        h5.classList.add('card-title');
        h5.textContent=title;

        return h5;
    }
    this.img = function(src) {
        const img =document.createElement('img');
        img.classList.add('card-img-top');
        img.src =src;

        return img;
    }    

    this.p = function (content) {
        const p = document.createElement('p');
        p.classList.add('card-text');
        p.textContent=content;
        return p;
    }

    this.button = function (content,classNameOne,classNameTwo,classNameThree, id) {
        const button = document.createElement('button');
        button.textContent=content;
        button.classList.add(classNameOne);
        button.classList.add(classNameTwo);
        button.classList.add(classNameThree);
        button.setAttribute('data-id', id)

        return button;
    }

}
