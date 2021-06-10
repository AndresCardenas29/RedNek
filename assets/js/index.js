window.addEventListener('load', () => {
    function redactar() {
        const cajon_redactar = document.querySelector('.redactar');
        const abrir_cajon = document.querySelector('.contenedor .base .content .publicar form .texto');
        const cerrar_cajon = document.querySelector('.btn-cerrar');

        cerrar_cajon.addEventListener('click', () => {
            cajon_redactar.style.display = 'none';
        })

        abrir_cajon.addEventListener('click', () => {
            cajon_redactar.style.display = 'flex';
        })
    }

    redactar();
});