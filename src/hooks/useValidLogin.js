import { useEffect, useState } from 'react';

const emailRegex = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const passwordRegex = /^[A-Za-z0-9!@#$%]{5,12}$/;

const useValidLogin = (form) => {
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    useEffect(() => {
        const result = emailRegex.test(form.email);
        setEmailValid(result);
    }, [form.email]);

    useEffect(() => {
        const result = passwordRegex.test(form.password);
        setPasswordValid(result);
    }, [form.password]);

    return {
        emailValid,
        passwordValid
    };
}

export default useValidLogin;