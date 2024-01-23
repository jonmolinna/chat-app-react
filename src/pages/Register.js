import React, { useEffect, useState } from 'react';
import useForm from '../hooks/useForm';
import useValidRegister from '../hooks/useValidRegister';
import axios from '../utils/axios';
import { useRegisterDispatch, useRegisterState } from '../context/register.context';
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';

const initialForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const initialFormFocus = {
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
};

const Register = () => {
    const { form, handleChange, handleFocus, handleBlur, formFocus, creanForm } = useForm(initialForm, initialFormFocus);
    const { nameValid, emailValid, passwordValid, confirmPasswordValid } = useValidRegister(form);
    const dispatch = useRegisterDispatch();
    const { loading, errors, register } = useRegisterState();
    const [isMounted, setIsMounted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch({ type: 'REGISTER_START' })

            let options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                },
                data: JSON.stringify(form),
            };

            const res = await axios('register', options);
            setIsMounted(true);
            if (res.data?.user) {
                dispatch({ type: 'REGISTER_SUCCESS' });
            };
            creanForm();
        } catch (err) {
            const error = err.response;
            if (error?.data?.errors?.email) {
                dispatch({ type: 'REGISTER_FAILURE', payload: error.data.errors.email })
            } else {
                dispatch({ type: 'REGISTER_FAILURE', payload: 'Ocurrió un error' });
            }
        };
    };

    useEffect(() => {
        return () => {
            setIsMounted(false);
        }
    }, []);

    return (
        <section className='min-h-full px-3'>
            <div className='max-w-md mx-auto mt-10 space-y-5'>
                {errors && isMounted && <Alert message={errors} type='msg__error' />}
                {register && isMounted && <Alert message='Se creo un nuevo usuario' type='msg__success' />}
                <div className='flex justify-center'>
                    <p className='font-semibold text-lg'>
                        Crea tu cuenta
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className='space-y-6 bg-white px-3 py-6 rounded-md shadow-md'
                >
                    <div>
                        <label
                            htmlFor="name"
                            className='block mb-2 text-sm font-medium text-gray-900'
                        >
                            Nombres:
                        </label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            autoComplete='off'
                            onChange={handleChange}
                            value={form.name}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className='input__form'
                        />
                        <p className={formFocus.name && form.name && !nameValid ? 'input__msg-error' : 'hidden'}>
                            Solo se permiten lentras y espacios. <br />
                            Solo acepta de 3 a 17 caracteres.
                        </p>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className='block mb-2 text-sm font-medium text-gray-900'
                        >
                            Email:
                        </label>
                        <input
                            type="text"
                            id='email'
                            name='email'
                            autoComplete='off'
                            onChange={handleChange}
                            value={form.email}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className='input__form'
                        />
                        <p className={formFocus.email && form.email && !emailValid ? 'input__msg-error' : 'hidden'}>
                            Ingrese un correo electrónico válido.
                        </p>
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className='block mb-2 text-sm font-medium text-gray-900'
                        >
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            onChange={handleChange}
                            value={form.password}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className='input__form'
                        />
                        <p className={formFocus.password && form.password && !passwordValid ? 'input__msg-error' : 'hidden'}>
                            Solo acepta de 5 a 12 caracteres.
                        </p>
                    </div>
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className='block mb-2 text-sm font-medium text-gray-900'
                        >
                            Confirma Contraseña:
                        </label>
                        <input
                            type="password"
                            id='confirmPassword'
                            name='confirmPassword'
                            onChange={handleChange}
                            value={form.confirmPassword}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className='input__form'
                        />
                        <p className={formFocus.confirmPassword && form.confirmPassword && !confirmPasswordValid ? 'input__msg-error' : 'hidden'}>
                            las contraseñas no coinciden. inténtalo de nuevo
                        </p>
                    </div>
                    <div>
                        <button
                            className='btn__form btn__form-disabled'
                            disabled={!nameValid || !emailValid || !passwordValid || !confirmPasswordValid || loading}
                        >
                            {loading ? 'Cargando...' : 'Crea tu Cuenta'}

                        </button>
                    </div>
                </form>
                <div className='bg-white px-3 py-4 space-y-2 shadow-md rounded-md'>
                    <p className='text-center'>¿Tienes una cuenta?</p>
                    <Link to='/login' className='block'>
                        <button className='btn__link'>
                            Inicia Sesión
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default Register;