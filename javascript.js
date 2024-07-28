document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const navMenu = document.querySelector('.navMenu');
    const header = document.querySelector('header');
    const navItems = document.querySelectorAll('.navItem');
    const footerCaptions = document.querySelectorAll('.footerCaption');

    // for the burger button and dwopdownmenu
    hamburgerMenu.addEventListener('click', () => {
        if (navMenu.style.display === 'flex' || navMenu.style.display === '') {
            navMenu.style.display = 'none';
            header.style.backgroundColor = 'white';
        } else {
            navMenu.style.display = 'flex';
            header.style.backgroundColor = '#f9fafa';
        }
    });

    
    navItems.forEach(item => {
        const link = item.querySelector('a');
        const navDropdown = item.querySelector('.navDropdown');

        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            document.querySelectorAll('.navDropdown').forEach(dropdown => {
                if (dropdown !== navDropdown) {
                    dropdown.style.display = 'none';
                }
            });

            if (navDropdown.style.display === 'flex' || navDropdown.style.display === '') {
                navDropdown.style.display = 'none'; 
            } else {
                navDropdown.style.display = 'flex'; 
            }
        });
    });
//  for the footer dwopdown menu
    footerCaptions.forEach(caption => {
        caption.addEventListener('click', () => {
            const block = caption.nextElementSibling;

            if (block.classList.contains('footerInner > div:last-child .block')) {
                return; 
            }
            if (block.classList.contains('visible')) {
                block.classList.remove('visible');
            } else {
                document.querySelectorAll('.block:not(.footerInner > div:last-child .block)').forEach(b => b.classList.remove('visible'));
                block.classList.add('visible');
            }
        });

    });
});


