import React from 'react';

const Login = () => {
    return (
        <section className='min-h-full px-3'>
            <div className='max-w-md mx-auto mt-10 space-y-5'>
                <div className='flex justify-center'>
                    <p className='font-semibold text-lg'>
                        Iniciar sesión
                    </p>
                </div>
                <form className='space-y-6 bg-white px-3 py-6 rounded-md shadow-md'>
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
                            className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg outline-pink-500 focus:ring-pink-500 focus:border-pink-500 block w-full p-1.5'
                        />
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
                            className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg outline-pink-500 focus:ring-pink-500 focus:border-pink-500 block w-full p-1.5'
                        />
                    </div>
                    <div>
                        <button
                            className='text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full px-5 py-1.5 '
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
                <div className='bg-white px-3 py-4 space-y-2 shadow-md rounded-md'>
                    <p className='text-center'>¿Aún no tienes una cuenta?</p>
                    <button className='text-pink-700 hover:text-white border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm py-1.5 text-center w-full'>
                        Crea tu Cuenta
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Login;