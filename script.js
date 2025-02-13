function huir() {
    const btnNo = document.getElementById('btnNo');
    const containerWidth = document.querySelector('.container').offsetWidth;
    const containerHeight = document.querySelector('.container').offsetHeight;
    
    const newX = Math.random() * (containerWidth - btnNo.offsetWidth);
    const newY = Math.random() * (containerHeight - btnNo.offsetHeight);
    
    btnNo.style.transform = `translate(${newX}px, ${newY}px)`;
    btnNo.style.transition = 'all 0.5s ease';
}

function mostrarRespuesta() {
    const respuesta = document.getElementById('respuesta');
    const botones = document.querySelector('.botones');
    
    botones.style.display = 'none';
    respuesta.style.display = 'block';
    
    // Crear corazones animados
    for(let i = 0; i < 20; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon-animado';
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.animation = `flotar ${2 + Math.random() * 3}s infinite`;
        document.querySelector('.corazones-container').appendChild(corazon);
    }
}

// Efecto inicial de corazones
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    for(let i = 0; i < 10; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon-animado';
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.animation = `flotar ${2 + Math.random() * 3}s infinite`;
        container.appendChild(corazon);
    }
});
