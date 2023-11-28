import React from 'react';
import useForm from '../hooks/useForm';
import useValidLogin from '../hooks/useValidLogin';
import { useLoginDispatch, useLoginState } from '../context/login.context';
import axios from '../utils/axios';
import Alert from '../components/Alert';

const initialForm = {
    email: '',
    password: '',
};

const initialFormFocus = {
    email: false,
    password: false,
}

const Login = () => {
    const { form, handleChange, handleFocus, handleBlur, formFocus, creanForm } = useForm(initialForm, initialFormFocus);
    const { emailValid, passwordValid } = useValidLogin(form);
    const dispatch = useLoginDispatch();
    const { loading, errors } = useLoginState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch({ type: 'LOGIN_START' });

            let options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                },
                data: JSON.stringify(form),
            }

            const res = await axios('auth', options);
            dispatch({ type: 'LOGIN_SUCCESS', payload: { user: res.data?.user, token: res.data?.token } });
            creanForm();
        } catch (err) {
            const error = err.response;
            if (error?.data?.errors?.message) {
                dispatch({ type: 'LOGIN_FAILURE', payload: error.data.errors.message });
            }
            else if (error?.data?.errors?.email || error?.data?.errors?.password) {
                dispatch({ type: 'LOGIN_FAILURE', payload: 'Ingrese todos los campos' });
            }
            else {
                dispatch({ type: 'LOGIN_FAILURE', payload: 'Bad Request' });
            }
        }
    };

    return (
        <section className='min-h-full px-3'>
            <div className='max-w-md mx-auto mt-10 space-y-5'>
                {errors && <Alert message={errors} type='msg__error' />}
                <div className='flex justify-center'>
                    <p className='font-semibold text-lg'>
                        Iniciar sesión
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className='space-y-6 bg-white px-3 py-6 rounded-md shadow-md'
                >
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
                            Ingrese una Contraseña
                        </p>
                    </div>
                    <div>
                        <button
                            className='btn__form btn__form-disabled'
                            disabled={!emailValid || !passwordValid || loading}
                        >
                            {loading ? 'Cargando...' : 'Iniciar Sesión'}
                        </button>
                    </div>
                </form>
                <div className='bg-white px-3 py-4 space-y-2 shadow-md rounded-md'>
                    <p className='text-center'>¿Aún no tienes una cuenta?</p>
                    <button className='btn__link'>
                        Crea tu Cuenta
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Login;