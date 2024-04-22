import '../css/cadastro.css';

function Select({text, name, options, handleOnChange, value}) {

    return (
        <div className="selecion">
            <select name={name} id={name} >
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                        </option>
                ))}
            </select>
        </div>
    )
}
export default Select;