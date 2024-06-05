//en esta seccion esta el encabezado con logo y lista 
function Header() {
    return (
        <header className="main-header">
            <section className="encabezado">
                <img src="img/activision.png" alt="logo" className="logo" />
                <h1 className="titulo">Activision</h1>
            </section>
            <section>
                <img src="img/call.png" alt="call" className="call" />
            </section>
            <nav className="menu">
                <ul className="menu-lista">
                    <li className="menu-li">Detalles</li>
                    <li className="menu-li">Galeria</li>
                    <li className="menu-li">Informacion</li>
                </ul>
            </nav>
        </header>
    );
}


//el cuerpo
function Informacion() {
    return (
        <>
            <section className="informacion">
                <img src="img/cod.jpg" alt="portada" className="portada" />
                <section className="info-portada">
                    <h1 className="color">Call Of Duty Black Ops</h1>
                    <h2 className="color">Descripcion</h2>
                    <p>La versión de Juegos a petición es compatible con inglés y con los packs de contenido [EN]. Call of Duty®: Black Ops te lleva tras las líneas enemigas, al mundo de las operaciones secretas, como miembro de una unidad de élite de las fuerzas especiales especializada en enfrentamientos encubiertos, operaciones clasificadas y conflictos explosivos en todo el mundo. Con acceso a diverso armamento y equipamiento secreto, tus actos inclinarán la balanza en la época más peligrosa jamás vivida por la humanidad. Black Ops incluye: - Una campaña y una historia épicas que te mantendrán al borde del infarto de principio a fin. - La experiencia multijugador única de Call of Duty, con más niveles de personalización y nuevos modos, como partidas de apuesta, el cine o la instrucción, a los que podrás jugar en individual o en cooperativa. - ¡Zombis! Diviértete durante horas sin fin masacrando zombis en individual o en cooperativa.</p>
                    <h3>Se Puede Jugar en:</h3>
                    <p>Consolas De Modelo Xbox</p>
                </section>
                <img src="img/xbox.png" alt="portada" className="portada" />
            </section>
            <Galeria />
        </>
    );
}

function Galeria() {
    return (
        <section className="Galeria">
            <h1>Galeria</h1>
            <img src="img/galeria1.jpg" alt="sena logo" className="portada" />
            <img src="img/galeria2.jpg" alt="sena logo" className="portada" />
            <img src="img/galeria3.jpg" alt="sena logo" className="portada" />
            <img src="img/galeria4.jpg" alt="sena logo" className="portada" />
            <img src="img/galeria5.jpg" alt="sena logo" className="portada" />
            <img src="img/galeria6.jpg" alt="sena logo" className="portada" />
        </section>  
    );
}


function Empresa() {
    return (
        <section className="distribucion">
            <div className="consola">
                <h2>Empresa Distribuidora:</h2>
                <p> Activision Publishing, Inc. es una empresa de videojuegos estadounidense propiedad de Activision Blizzard. Fue el primer desarrollador y distribuidor independiente de este tipo de juegos, fundado el 1 de octubre de 1979 y con sede en Santa Mónica, California.</p>
            </div>
        </section>
        
    );
}

function Distribucion() {
    return (
        <article className="distribucion">
            <section className="consola">
                <h2>Consola</h2>
                <p>Xbox es una marca de videojuegos creada por y propiedad de Microsoft que incluye una serie de videoconsolas desarrolladas por la misma compañía, de sexta a novena generación, así como aplicaciones (juegos), servicios de streaming y el servicio en línea Xbox Live. La marca fue introducida por primera vez el 8 de noviembre de 2001 en los Estados Unidos, con el lanzamiento de la consola Xbox.</p>
            </section>
            <section className="opiniones">
                <h2>Opiniones</h2>
                <p>La clasificación promedio aún no está disponible
                No hay suficientes calificaciones para mostrar una clasificación promedio.</p>
            </section>
        </article>
        
    );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <>
        <Header />
        <Informacion />
        <Empresa />
        <Distribucion />
    </>
);
