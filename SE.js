const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const Description = accordian.querySelector('.Description');

    accordian.addEventListener('click', () => {
        
        if(icon.classList.contains('active')) {
            icon.classList.remove('active');
            Description.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            Description.style.maxHeight = Description.scrollHeight + 'px';
        }


    })
})