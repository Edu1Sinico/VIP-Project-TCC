export function inputValidationRegister(user, email, password, confirmPassword, setMessageAlert, setUserError, setEmailError, setPasswordError, setConfirmPasswordError, setModalVisible) {
    let isValid = true;
    let message = "";

    // Verifica se todos os campos estão vazios
    if (!(user === '' && email === '' && password === '' && confirmPassword === '')) {
        // Validações para o campo de 'Usuário'
        if (user === '') {
            setUserError(true);
            message = 'O campo de usuário não pode ser vazio!';
            isValid = false;
        }
        else {
            setUserError(false);
        }

        // Validação para Email
        if (!(email === '')) {
            // Verifica se o campo de Email contém o "@"
            if (!email.includes('@') || !email.includes('.com')) {
                message = 'O campo de e-mail precisa conter o (@) ou (.com)!';
                setEmailError(true);
                isValid = false;
            }
            else {
                setEmailError(false);
            }
        } else {
            message = 'O campo de e-mail não pode ser vazio!';
            isValid = false;
            setEmailError(true);
        }

        // Validação do Campo de senha
        if (!(password === '')) {
            if (password === confirmPassword) {
                if (password.length < 8) {
                    message = 'O campo de senha precisar ser maior que 8 caracteres!';
                    setPasswordError(true);
                    isValid = false;
                }
                else {
                    setPasswordError(false);
                    setConfirmPasswordError(false);
                }
            }
            else {
                message = 'O campo de "senha" e "confirmar senha" precisam ser iguais!';
                setPasswordError(true);
                setConfirmPasswordError(true);
                isValid = false;
            }
        } else {
            message = 'O campo de senha não pode ser vazio!';
            isValid = false;
            setPasswordError(true);
        }


    }
    else {
        // Insere a mensagem de validação
        message = 'Por favor, preenche todos os campos!';
        isValid = false;
        setUserError(true);
        setEmailError(true);
        setPasswordError(true);
        setConfirmPasswordError(true);
    }

    if (!isValid) {
        setMessageAlert(message); // Inseri a mensagem de alerta no setState
        setModalVisible(true); // Exibe o modal se houver erro
    }

    return isValid; // Retorna se o formulário é válido ou não
};
