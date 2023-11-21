import React from 'react';
import useForm from '../hooks/useForm';
import useValidRegister from '../hooks/useValidRegister';


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
    const { form, handleChange, handleFocus, handleBlur, formFocus } = useForm(initialForm, initialFormFocus);
    const { nameValid, emailValid, passwordValid, confirmPasswordValid } = useValidRegister(form);

    const handleSubmit = (e) => {
        e.preventDefault();

        try {

        } catch (err) {

        }
    };

    return (
        <section className='min-h-full px-3'>
            <div className='max-w-md mx-auto mt-10 space-y-5'>
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
                            disabled={!nameValid || !emailValid || !passwordValid || !confirmPasswordValid}
                        >
                            Crea tu Cuenta
                        </button>
                    </div>
                </form>
                <div className='bg-white px-3 py-4 space-y-2 shadow-md rounded-md'>
                    <p className='text-center'>¿Tienes una cuenta?</p>
                    <button className='btn__link'>
                        Inicia Sesión
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Register;