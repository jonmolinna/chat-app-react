import { useEffect, useState } from 'react';

const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,17}$/;
const emailRegex = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const passwordRegex = /^[A-Za-z0-9!@#$%]{5,12}$/;

const useValidRegister = (form) => {
    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

    useEffect(() => {
        const result = nameRegex.test(form.name);
        setNameValid(result);
    }, [form.name]);

    useEffect(() => {
        const result = emailRegex.test(form.email);
        setEmailValid(result);
    }, [form.email]);

    useEffect(() => {
        const result = passwordRegex.test(form.password)
        setPasswordValid(result);

        const compare = form.password === form.confirmPassword;
        setConfirmPasswordValid(compare)
    }, [form.password, form.confirmPassword]);


    return {
        nameValid,
        emailValid,
        passwordValid,
        confirmPasswordValid,
    };

}

export default useValidRegister;