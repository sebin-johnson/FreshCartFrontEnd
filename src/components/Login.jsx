import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Login = () => {
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const isLogin = state === "login";
    const { setShowUserLogin, setUser } = useAppContext()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setUser({
            email: "sebin@gmail.com",
            name: "sebin"
        })
        setShowUserLogin(false)
    }

    return (
        <div className='fixed inset-0 z-30 flex items-center justify-center bg-white text-sm px-4 py-12' onClick={() => setShowUserLogin(false)}>
            <div className="flex md:w-[800px] w-full bg-white shadow-lg rounded-lg overflow-hidden" onClick={(e) => { e.stopPropagation() }} onSubmit={onSubmitHandler}>
                <div className="hidden md:block w-1/2">
                    <img className="h-full w-full object-cover" src={assets.login_banner} alt="leftSideImage" />
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                    <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
                        <h2 className="text-3xl font-semibold text-gray-900 text-center">
                            <span className="text-green-600">User</span> {isLogin ? "Login" : "Sign Up"}
                        </h2>

                        <p className="text-sm text-gray-500/90 text-center mt-2">
                            {isLogin ? "Welcome back! Please log in to continue" : "Create your account to get started"}
                        </p>

                        <button type="button" className="w-full mt-6 bg-gray-100 flex items-center justify-center h-11 rounded-full">
                            <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="googleLogo" />
                        </button>

                        <div className="flex items-center w-full my-5">
                            <div className="flex-grow h-px bg-gray-300/90"></div>
                            <span className="px-2 whitespace-nowrap text-sm text-gray-500/90">
                                or sign {isLogin ? "in" : "up"} with email
                            </span>
                            <div className="flex-grow h-px bg-gray-300/90"></div>
                        </div>


                        {!isLogin && (
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full h-11 px-4 rounded-full border border-gray-300/60 text-sm placeholder-gray-500/80 outline-none"
                                    required
                                />
                            </div>
                        )}

                        <div className="mb-3">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-11 px-4 rounded-full border border-gray-300/60 text-sm placeholder-gray-500/80 outline-none"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-11 px-4 rounded-full border border-gray-300/60 text-sm placeholder-gray-500/80 outline-none"
                                required
                            />
                        </div>

                        {isLogin && (
                            <div className="flex items-center justify-between text-gray-500/80 text-sm mb-4">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="h-4 w-4" />
                                    Remember me
                                </label>
                                <a href="#" className="underline">Forgot password?</a>
                            </div>
                        )}

                        <button type="submit" className="w-full h-11 bg-green-500 text-white rounded-full hover:opacity-90 transition-opacity">
                            {isLogin ? "Login" : "Sign Up"}
                        </button>

                        <p className="text-sm text-gray-500/90 text-center mt-4">
                            {isLogin ? (
                                <>Don't have an account? <button type="button" onClick={() => setState("signup")} className="text-indigo-500 hover:underline">Sign up</button></>
                            ) : (
                                <>Already have an account? <button type="button" onClick={() => setState("login")} className="text-indigo-500 hover:underline">Login</button></>
                            )}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
