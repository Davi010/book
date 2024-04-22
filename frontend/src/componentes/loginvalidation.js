
function Valida(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const senha_pattern = /^.{3,}$/;


    if (values.email === "") {
        error.email = "Email está vazio";
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email não bate";
    }
    else {
        error.email = "";
    }

    if (values.senha === "") {
        error.senha = "Senha está vazia";
    }
    else if (!senha_pattern.test(values.senha)) {
        error.senha = "Senha não bate";
    }
    else {
        error.senha = "";
    }
    return error;
}
export default Valida;

