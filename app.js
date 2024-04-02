// Funcion asincrona
const getData = async () => {
  const URL = "https://jsonplaceholder.typicode.com/photos/";  

  try{
    const respuesta =  await fetch(URL);

    if(!respuesta.ok){
      console.log(respuesta.status);
    }

    const titulos = await respuesta.json();
    titulos.forEach((titulo) => {
      if(titulo.id <= 20){
        console.log(titulo.title);
      }
    });
    asynFuncion();
  }
  catch(error){
    console.log(error)
  }
}

// Funcion promesa
const enviaMensaje = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Informacion Enviada")
    }, 3000);
  })
}

// Funcion async que resulve la funcion promesa
const asynFuncion = async () => {
  const respuesta = await enviaMensaje();
  console.log(respuesta)
};

getData();