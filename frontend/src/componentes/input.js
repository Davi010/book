import '../css/cadastro.css';

function Input({ type, name, placeholder, handleInput}) {
    return (
         <div className="inputbox">
            <input type={type} 
            name={name} 
            placeholder={placeholder} 
            onChange={handleInput} 
            
             ></input>
        </div>
       
    )
}
export default Input;
//handleOnChange manipula os dados do input