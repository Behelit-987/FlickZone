// Lista de películas con imágenes y enlaces
const peliculas = [
    {
      titulo: "Alita Battle Angel",
      descripcion: "En el 2563, trescientos años después de la Caída, el doctor Dyson Ido encuentra entre la chatarra la cabeza de una ciborg. Aunque la mayor parte de su cibercuerpo ya no existe, su cerebro, completamente humano, está milagrosamente intacto.",
      imagen: "img/Alita.jpeg",
      enlace: "Peliculas/AlitaBA.html" // Enlace para Interestellar
    },
    {
      titulo: "Oshi No Ko",
      descripcion: "La trama sigue a un médico y su paciente recientemente fallecidos que renacieron como gemelos de una famosa idol de pop japonés y navegan por los altibajos de la industria del entretenimiento del país a medida que crecen juntos a lo largo de sus vidas.",
      imagen: "img/oshi-ni-ko_1gvm.jpg",
      enlace: "Series/OshiNoKo.html" // Enlace para Oshi No Ko
    },
    {
        titulo: "Yu-Gi-Oh! Vrains",
        descripcion: "Es una historia de suspense donde Yusaku lucha por conocer la verdad de los sucesos del pasado. La sexta serie se centra en Yusaku Fujiki, un estudiante de secundaria y un hacker al que no le gusta sobresalir. Sin embargo, se ve arrastrado a encuentros con la gente mientras trata de llevar a cabo Duelos por una vez.",
        imagen: "img/fda53df58a17ce40b43d4a3648c9f34fe2ac6cc6f47e5c1370a82fb4a2287ec7.jpg",
        enlace: "Series/yugioh_vrains.html" // Enlace para Oshi No Ko
      }

    ,
    {
        titulo: "Godzilla 1954",
        descripcion: "Las misteriosas destrucciones de barcos en el Pacífico provocan el pánico. Los nativos de una isla afirman que el culpable es una criatura legendaria, Godzilla, un lagarto mutante convertido en un gigantesco monstruo a causa de unas radiaciones atómicas. Godzilla se dispone a atacar las principales ciudades del Japón.",
        imagen: "img/godzilla.jpg",
        enlace: "Peliculas/Godzilla_1954.html" // Enlace para Oshi No Ko
      }
    
      ,
      {
          titulo: "Shin Godzilla",
          descripcion: "Godzilla, fuerza destructiva insondable para el hombre, resucita en el Tokio de hoy en día para acosar de nuevo a la civilización. Un país aún atormentado por las secuelas de un desastre natural, experimenta de repente el horror catastrófico de Godzilla. Apremiado por la muerte y la desesperación, Japón deberá encontrar el poder para superar este desafío.",
          imagen: "img/Shin.jpg",
          enlace: "Peliculas/Shin_Godzilla.html" // Enlace para Oshi No Ko
        }
    
        ,
        {
            titulo: "Horizonte Final",
            descripcion: "En el año 2047, el doctor William Weir es un brillante científico marcado por la desaparición en el espacio de la nave Horizonte Final diseñada por él. La misión de la nave, cuando fue lanzada al espacio siete años atrás, había sido la de explorar los límites de la órbita de Neptuno y la extensión del espacio detrás de él.",
            imagen: "img/tw-28823.jpg",
            enlace: "Peliculas/Horizonte_Final.html" // connichi-special-perfect-blue-1-960x645
          }
          ,
          {
              titulo: "Perfect Blue",
              descripcion: "Mima, una cantante muy popular, decide abandonar su banda de música para empezar una carrera como actriz en una serie de televisión. La imagen sabia y endulzada de este icono del pop se rompe cuando la joven tiene que protagonizar escenas de violación colectiva y aparecer desnuda.",
              imagen: "img/connichi-special-perfect-blue-1-960x645.jpg",
              enlace: "Peliculas/PerfectBlue.html" // connichi-special-perfect-blue-1-960x645
            }
            ,
            {
                titulo: "Color que Cayo del Cielo",
                descripcion: "Después de que un meteorito aterriza en el patio delantero de su granja, Nathan Gardner y su familia luchan contra un organismo extraterrestre mutante que infecta sus mentes y cuerpos, transformando su tranquila vida en una pesadilla tecnicolor.",
                imagen: "img/Color.jpeg",
                enlace: "Peliculas/ColorFueraEspacio.html" // connichi-special-perfect-blue-1-960x645
              }
      

  ];
  
  // Función para seleccionar una película aleatoria
  function mostrarPeliculaAleatoria() {
    const peliculaAleatoria = peliculas[Math.floor(Math.random() * peliculas.length)];
  
    // Insertar datos de la película en el HTML
    document.getElementById("titulo-pelicula").textContent = peliculaAleatoria.titulo;
    document.getElementById("descripcion-pelicula").textContent = peliculaAleatoria.descripcion;
    
    // Cambiar la imagen de fondo de la sección
    const peliculaPrincipal = document.getElementById("pelicula-principal");
    peliculaPrincipal.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, .50) 0%, rgba(0, 0, 0, .50) 100%), url(${peliculaAleatoria.imagen})`;
    peliculaPrincipal.style.backgroundPosition = "center";
    peliculaPrincipal.style.backgroundSize = "cover";
    
    // Cambiar el enlace del botón de "Reproducir"
    const botonReproducir = document.getElementById("boton-reproducir");
    botonReproducir.onclick = function() {
      window.location.href = peliculaAleatoria.enlace;
    };
  }
  
  // Ejecutar la función al cargar la página
  document.addEventListener("DOMContentLoaded", mostrarPeliculaAleatoria);
  


  //img/backdrop.jpg -- img/oshi-ni-ko_1gvm.jpg -- img/fda53df58a17ce40b43d4a3648c9f34fe2ac6cc6f47e5c1370a82fb4a2287ec7.jpg
