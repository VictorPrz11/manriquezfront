import Header_homeScreen from "../Components/Header_homeScreen";
const people = [
    { name: 'Juan Perez', vencimiento: '04/10/2025' },
    { name: 'Maria Gomez', vencimiento: '04/10/2025' },
    { name: 'Carlos Rodriguez', vencimiento: '10/10/2025' },
    { name: 'Ana Martinez', vencimiento: '12/10/2025' },
    { name: 'Luis Fernandez', vencimiento: '15/10/2025' },
    { name: 'Sofia Lopez', vencimiento: '18/10/2025' },
    { name: 'Miguel Sanchez', vencimiento: '20/10/2025' },
    { name: 'Laura Ramirez', vencimiento: '22/10/2025' },
    { name: 'Diego Torres', vencimiento: '25/10/2025' },
    { name: 'Elena Flores', vencimiento: '28/10/2025' },
    { name: 'Andres Gutierrez', vencimiento: '30/10/2025'},
    { name: 'Camila Diaz', vencimiento: '02/11/2025' },
    { name: 'Javier Morales', vencimiento: '05/11/2025' },
    { name: 'Valentina Ortiz', vencimiento: '08/11/2025' },
    { name: 'Santiago Castro', vencimiento: '10/11/2025' },
    { name: 'Isabella Rojas', vencimiento: '12/11/2025' },
    { name: 'Sebastian Vega', vencimiento: '15/11/2025' },
    { name: 'Natalia Silva', vencimiento: '18/11/2025' },
    { name: 'Fernando Herrera', vencimiento: '20/11/2025' },
    { name: 'Gabriela Mendoza Hernandez', vencimiento: '22/11/2025' }

]
const listItems = people.map((person, index) =>
    <Header_homeScreen key={index} tabla>
        <h3>{person.name}</h3>
        <h3 style={{marginRight:"70px"}}>{person.vencimiento}</h3>
    </Header_homeScreen>
)

function Home_screen() {

    return <>
        <div className="Screen_container">
            <input type="text" placeholder="Busqueda de cliente" className="search_client_input" />
            <div className="memberships_expiring_container">
                <div>
                    <Header_homeScreen>
                        <h3>Proximas membresias a vencer</h3>
                    </Header_homeScreen>
                    <Header_homeScreen tabla>
                        <h3>Nombre</h3>
                        <h3>Fecha de nacimiento</h3>
                    </Header_homeScreen>
                    <div className="memberships_expiring_list">
                        {listItems}
                    </div>
                </div>
                <div className="estadisticas_clientes"/>

            </div>
        </div>

    </>
}
export default Home_screen;