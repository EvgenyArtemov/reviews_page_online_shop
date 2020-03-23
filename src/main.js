import '../src/SCSS/main.scss';

(() => {
    const allEllipsis = document.querySelectorAll('.dots');
    //Adding dots at the end of multiline text block
    //text block must be limited in size
    function cutText (container) {
        let wordArray = container.innerHTML.split(' ');
        while(container.scrollHeight > container.offsetHeight) {
            wordArray.pop();
            container.innerHTML = wordArray.join(' ') + '...';
        }
    };
    
    allEllipsis.forEach(div => {
        let isOpen;
        const fullText = div.innerHTML;
        cutText(div);
        document.querySelectorAll('.moreLessBtn').forEach( (el, i, arr) => {
            el.addEventListener('click', ev => {
                const txtContainer = ev.target.previousSibling.previousSibling;
                if(!isOpen){
                    txtContainer.innerHTML = fullText;
                    txtContainer.style.height = 'auto';
                    isOpen = true;
                    arr[i].innerHTML = 'Скрыть';
                } else {
                    txtContainer.style.height = '80px';
                    isOpen = false;
                    cutText(div);
                    arr[i].innerHTML = 'Подробнее <span class="arrow"></span>';
                }
            });
        });
    });
})();

//image gallery lib
new SimpleLightbox('.gallery a', { /* options */ });
