interface IconButtonProps {
    icono: React.ReactNode|React.ReactNode[];
    funcion: () => void;
    }
 const IconButton =  ({icono, funcion}: IconButtonProps)=>{
  return <button className="iconbutton"
      onClick={()=>funcion()}
      >
      {icono}
    </button>
  

}
export default IconButton;