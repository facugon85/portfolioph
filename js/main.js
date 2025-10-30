 // Contenedor de galería
    const gallery = document.getElementById('portfolio');

    // Cantidad de imágenes que tenés en la carpeta
    const totalImages = 96;

    // Generar array con nombres secuenciales .webp
    let images = [];
    for (let i = 1; i <= totalImages; i++) {
      images.push(`photos/photo${i}.webp`);
    }

    // Mezclar aleatoriamente
    images = images.sort(() => Math.random() - 0.5);

    // Renderizar en el DOM
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = "Fotografía de CUFA";
      img.loading = 'lazy';
      gallery.appendChild(img);
    });
