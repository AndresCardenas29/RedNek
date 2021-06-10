window.addEventListener('load', () => {
    const boton_abrir = document.querySelector('body > div.container.contenido > div > div:nth-child(1) > div > form > a.btn.btn-success');
    const boton_cerrar = document.querySelector('.btn-cerrar');
    const ventana = document.querySelector('.registro');
    const contenedor = document.querySelector('.container.contenido');

    boton_cerrar.addEventListener('click', e => {
        ventana.style.display = 'none';
    });

    boton_abrir.addEventListener('click', () => {
        ventana.style.display = 'flex';
    });

 let prueba = document.querySelectorAll('#prueba');

 prueba.forEach(btnPrueba => {
    btnPrueba.addEventListener('click', () => {
        let w = screen.width;
        let h = screen.height;
        alert(`Ancho: ${w}. Alto ${h}`);
     });
    
 });


});