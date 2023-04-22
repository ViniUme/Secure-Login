import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useDarkMode from "use-dark-mode";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styles from "@/styles/index.module.scss";

export default function Home() {

    const [checked, setChecked] = useState(false)
    const [visible, setVisible] = useState({
        login: {
            password: false
        }
    })
    const { value: isDarkMode } = useDarkMode();

    return (
        <main className="w-screen min-h-screen absolute flex justify-center items-center z-1 font-inter">
            <section className="h-min background-preset-1 rounded-3xl">

                {/* =======================
                        Login Form
                    =======================
                */}
                <div className="flex h-96">
                    <form className="flex flex-col justify-end items-center min-h-full min-h-96 pr-8 pl-8 py-8 rounded-s-3xl bg-black-theme dark:bg-white-theme" action="#">
                        <div className="h-full flex flex-col justify-center items-center">
                            <div>
                                <input className={`bg-transparent w-56 my-5 placeholder:font-bold placeholder:text-gray-500 dark:placeholder:text-gray-400 border-b-2 border-gray-500 hover:border-gray-300 hover:dark:border-gray-500 focus:border-dark-red-theme focus:dark:border-light-red-theme dark:border-gray-400 outline-none text-white dark:text-black transition-all duration-300 ease-in-out ${styles.form_input_text}`} type="text" placeholder="Email or Username" />
                            </div>
                            <div>
                                <input className={`bg-transparent w-48 my-5 placeholder:font-bold placeholder:text-gray-500 dark:placeholder:text-gray-400 border-b-2 border-gray-500 hover:border-gray-300 hover:dark:border-gray-500 focus:border-dark-red-theme focus:dark:border-light-red-theme dark:border-gray-400 outline-none text-white dark:text-black transition-all duration-300 ease-in-out ${styles.form_input_text}`} type={visible.login.password ? 'text' : 'password'} placeholder="Password" />
                                <div className="inline-block w-8 text-right">
                                    {   visible.login.password ?
                                        <VisibilityIcon className="inline-block text-center text-dark-red-theme dark:text-light-red-theme" onClick={() => setVisible({...visible, login: {password: false}})} /> :
                                        <VisibilityOffIcon className="inline-block text-center text-dark-red-theme dark:text-light-red-theme" onClick={() => setVisible({...visible, login: {password: true}})}/>
                                    }
                                </div>
                            </div>
                            <div className="w-full flex justify-start">
                                {   checked ? 
                                    <>
                                        <input className="hidden" type="checkbox" checked />
                                        <button className={`${styles.form_checkbox} ${styles.form_checkbox_checked}`} onClick={() => setChecked(!checked)} id="stay_logged" />
                                    </> :
                                    <>
                                        <input className="hidden" type="checkbox" />
                                        <button className={styles.form_checkbox} onClick={() => setChecked(!checked)} id="stay_logged" />
                                    </>
                                }
                                <label className="text-white dark:text-gray-500 font-bold text-xs ml-1 cursor-pointer" htmlFor="stay_logged">Remember me</label>
                            </div>
                        </div>
                        <div className="flex justify-around my-2">
                            <button className="bg-light-red-theme dark:bg-dark-red-theme px-6 py-2 rounded-full font-bold tracking-wider font-inter text-sm hover:scale-110 transition-all duration-300 ease-in-out" type="submit">Log In</button>
                        </div>
                        <div className="flex justify-around mt-1">
                            <Link href="#" className="text-dark-red-theme dark:text-light-red-theme text-xs font-bold underline">I forgot my password</Link>
                        </div>
                    </form>
                    <div className="max-w-xs min-h-full min-h-96 text-center relative bg-white-theme dark:bg-black-theme pl-4 pr-8 py-8 rounded-e-3xl">
                        <h2 className="font-black text-3xl mx-auto mb-9 cursor-default rounded-full text-light-red-theme dark:text-dark-red-theme">Log In</h2>

                        <p className="font-normal text-sm mx-2">
                            Please enter your credentials to access your account.
                        </p>

                        <Image className="mt-5 scale-75" src={isDarkMode ? "/img/illustration/illustration-01-dark.svg" : "/img/illustration/illustration-01-light.svg"} width={304} height={240} alt="welcome" />

                        <p className="absolute m-auto inset-x-0 bottom-7 text-sm">
                            You don't have an account ? <br/>
                            <button className="font-normal text-light-red-theme dark:text-dark-red-theme underline">Let's create one</button>
                        </p>
                    </div>
                </div>

                {/* =======================
                        Register Form
                    =======================
                */}
                <form className="hidden" action="#">
                    <div>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div>
                        <input type="text" placeholder="Birth" />
                    </div>
                    <div>
                        <input type="text" placeholder="Password" />
                    </div>
                    <div>
                        <input type="text" placeholder="Confirm password" />
                    </div>
                </form>
                <div className="hidden">
                    <h2>Register</h2>
                    <p>
                        Create your account to login
                    </p>
                    <p>
                        Do you have an account ? Let's <button>log in</button>
                    </p>
                </div>
            </section>
        </main>
    )
}
