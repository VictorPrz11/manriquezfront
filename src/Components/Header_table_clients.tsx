interface Props{
    estatico?: boolean
    children: React.ReactNode|React.ReactNode[];
}
const Header_table_clients = ({children, estatico=false}:Props)=>{
    return estatico?<>
        
        <div className="header_tabla_clientes" style={{height:"50px", marginBottom:"20px"}}>
            {children}
        </div>
    </>:
        <div className="header_tabla_clientes">
            {children}
        </div>

}
export default Header_table_clients