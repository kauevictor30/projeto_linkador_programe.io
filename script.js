document.addEventListener('mousemove', (e) => {
    const rastro = document.createElement('div');

    rastro.className = 'rastro-neon';
    rastro.style.left = `${e.pageX}px`;
    rastro.style.top = `${e.pageY}px`;
    
    document.body.appendChild(rastro);

    setTimeout(() => {
        rastro.style.opacity = '0'; 
        setTimeout(() => rastro.remove(), 500);
    }, 10);
});