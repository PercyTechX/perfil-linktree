


    // Almacenamos el nombre del perfil en una constante
    const nombrePerfil = "Percy Nazario";
    // Almacenamos la descripción del perfil en una constante
    const descripcionPerfil = "💻 Desarrollo Full Stack, Análisis de Datos 🦾";
  
    // Obtenemos el elemento HTML con el ID "profile-info" (este elemento debe existir en tu HTML)
    const profileInfo = document.getElementById("profile-info");
  
    // Creamos un nuevo elemento HTML de tipo "h1" (encabezado)
    const nameElement = document.createElement("h1");
    // Asignamos el nombre del perfil al contenido del encabezado
    nameElement.textContent = nombrePerfil;
  
    // Creamos un nuevo elemento HTML de tipo "p" (párrafo)
    const descriptionElement = document.createElement("p");
    // Asignamos la descripción del perfil al contenido del párrafo
    descriptionElement.textContent = descripcionPerfil;
  
    // Agregamos el encabezado (nombre) como hijo del elemento "profile-info"
    profileInfo.appendChild(nameElement);
    // Agregamos el párrafo (descripción) como hijo del elemento "profile-info"
    profileInfo.appendChild(descriptionElement);
