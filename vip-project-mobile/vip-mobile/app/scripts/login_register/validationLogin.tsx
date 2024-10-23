export function inputValidationLogin(user, email, password, setMessageAlert, setUserError, setEmailError, setPasswordError, setModalVisible) {
    let isValid = true;
    let message = "";

    // Verifica se todos os campos estão vazios
    if (!(user === '' && email === '' && password === '')) {

        // Validações para o campo de 'Usuário'
        if (user === '') {
            setUserError(true);
            message = 'O campo de usuário não pode ser vazio!';
            setMessageAlert(message);
            setModalVisible(true);
            return false; // Interrompe a execução aqui
        }
        else {
            setUserError(false);
        }

        // Validação para Email
        if (email === '') {
            message = 'O campo de e-mail não pode ser vazio!';
            setEmailError(true);
            setMessageAlert(message);
            setModalVisible(true);
            return false; // Interrompe a execução aqui
        }
        else if (!email.includes('@') || !email.includes('.com')) {
            message = 'O campo de e-mail precisa conter o (@) ou (.com)!';
            setEmailError(true);
            setMessageAlert(message);
            setModalVisible(true);
            return false; // Interrompe a execução aqui
        }
        else {
            setEmailError(false);
        }

        // Validação do Campo de senha
        if (password === '') {
            message = 'O campo de senha não pode ser vazio!';
            setPasswordError(true);
            setMessageAlert(message);
            setModalVisible(true);
            return false; // Interrompe a execução aqui
        }
        else if (password.length < 8) {
            message = 'O campo de senha precisar ser maior que 8 caracteres!';
            setPasswordError(true);
            setMessageAlert(message);
            setModalVisible(true);
            return false; // Interrompe a execução aqui
        }
        else {
            setPasswordError(false);
        }

    }
    else {
        // Se todos os campos estiverem vazios
        message = 'Por favor, preenche todos os campos!';
        setUserError(true);
        setEmailError(true);
        setPasswordError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução aqui
    }

    return true; // Se todas as validações passarem
}

