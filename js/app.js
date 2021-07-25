
const persona = [
    new Persona('Juan','Perez'),
    new Persona('Karla','Lara')
];

function mostrarPersonas(){
    console.log('mostrar personas...');

    let texto = '';
    for(let personas of persona){
        texto += `<li> ${personas.nombre} ${personas.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersonas(){

    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];

    if(nombre.value != '' && apellido.value != '' ){

        const persona1  = new Persona(nombre.value,apellido.value);
        console.log(persona1);
        persona.push(persona1);
        mostrarPersonas();

    }
    else{
        console.log('No hay informacion que agregar');
    }
    //persona.push(new Persona(nombre.value,apellido.value));
}