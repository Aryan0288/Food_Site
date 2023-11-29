import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';
import '../componentCss/NavCss.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { auth } from '../Firebase';

import { getAuth, signOut } from "firebase/auth";
export default function Nav(props) {
    const [toggle, setToggle] = useState(false);
    const { user, isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();
    const [userName, setUserName] = useState('');
    const [setup, setSetup] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setSetup(true);
                // setUserName(user.displayName.charAt(0));
                // console.log('error');
                if (user.displayName) {
                    setUserName(user.displayName);
                } else {
                    // Handle the case where displayName is null or undefined
                    setUserName('');
                }
                console.log("No error");
            } else {
                setUserName('');
                setSetup(false);
            }
        }, [])
    });

    const logOutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("singout");
        }).catch((error) => {
            // An error happened.
        });
        setToggle(false);
    }

    return (
        <div>
            <div className='absolute z-40 right-12 sm:flex hidden  sm:justify-end gap-[2.5rem] py-[3rem] pr-12 sm:items-center cursor-pointer text-white '>

                {
                    setup && (<span className='px-5 py-1 border-[1px] bg-blue-600 self-center rounded-full text-white mr-[15.8rem]  text-[2rem]'>{userName.charAt(0).toUpperCase()}</span>)
                }


                <ul className='flex gap-[3rem] text-[1.12rem] font-bold items-center'>
                    <li>

                    </li>
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/Menu">Menu</NavLink></li>
                    <li><NavLink to="/Story">Our Story</NavLink></li>
                    <li><NavLink to="/Contact">Contact Us</NavLink></li>
                    <li>
                        {
                            !setup && (
                                <NavLink to="/SignUp">
                                    <li><button className='border-[1px] border-white hover:dark:bg-neutral-800 transition-all duration-200 px-2 py-[5px] rounded'   >
                                        Sign Up
                                    </button></li>
                                </NavLink>
                            )

                        }
                        {
                            setup && (
                                // onClick={() => loginWithRedirect()}
                                <li><button className='border-[0.5px] border-white hover:bg-blue-800 transition-all duration-200 px-2 py-[5px] rounded' onClick={logOutHandler} ><Link to="/Home">Log Out</Link></button></li>

                            )
                        }

                    </li>


                </ul>
                <div className='md:flex hidden items-center box-border  relative '>
                    <input type="text" className="text-[14px] rounded-[60px] h-[34px] text-gray-700 w-36" placeholder='Search...' />
                    <img src="images/search.png" className='absolute right-3 w-4' alt="" />
                </div>
            </div>


            <div className='absolute  z-10 flex justify-between w-[90%] mx-auto md:hidden pb-[2rem] pl-5 pt-5'>
                {/* <img src="images/italic_food-removebg-preview.png" className='w-[100px] rounded-full' /> */}
                {
                    setup && (<span className=' px-5 py-1 border-[1px] bg-blue-600 self-center rounded-full text-white ml-5  text-[2rem]'>{userName.charAt(0).toUpperCase()}</span>)
                }
                {
                    !setup && <img src="images/italic_food-removebg-preview.png" className='w-[95px] rounded-full' />
                }
                <button onClick={e => setToggle(!toggle)}>
                    <i className="fa-solid fa-bars z-10" style={{ color: 'white', fontSize: '25px' }} />
                </button>
            </div>

            {toggle && (
                <div className=' sm:hidden flex flex-col items-center gap-[2rem] pb-[2rem] sm:items-center cursor-pointer fixed left-0 right-0 bottom-0 top-0  z-30  bg-[#28292d] text-white '>

                    <div className='absolute flex justify-between w-[90%] mx-auto md:hidden'>
                        <img src="images/italic_food-removebg-preview.png" className='w-[100px] rounded-full' />
                        <button onClick={e => setToggle(!toggle)}>
                            <i className="fa-solid fa-bars z-10" style={{ color: 'white', fontSize: '25px' }} />
                        </button>
                    </div>
                    <ul className='flex flex-col gap-5 text-[1.2rem] font-bold self-stretch text-center mt-28'>
                        <li className='border-2 border-white w-full py-4 hover:bg-black' onClick={e => setToggle(!toggle)}><NavLink to="/">Home</NavLink></li>
                        <li className='border-2 border-white w-full py-4 hover:bg-black' onClick={e => setToggle(!toggle)}><NavLink to="/Menu">Menu</NavLink></li>
                        <li className='border-2 border-white w-full py-4 hover:bg-black' onClick={e => setToggle(!toggle)}><NavLink to="/Story">Our Story</NavLink></li>
                        <li className='border-2 border-white w-full py-4 hover:bg-black' onClick={e => setToggle(!toggle)}><NavLink to="/Contact">Contact Us</NavLink></li>
                        {

                            setup && (
                                <li><div className='border-2 border-white w-full  bg-[#702121] transition-all duration-200 px-2 py-[5px] rounded text-[1.3rem]' onClick={e => setToggle(!toggle)}  >
                                    Welcome  {userName}
                                </div></li>
                            )

                        }
                        <li>
                            {
                                !setup && (
                                    <li><button className='border-2 w-full border-blue-500 bg-blue-500 hover:bg-blue-600 transition-all duration-200 px-2 py-[5px] rounded' onClick={e => setToggle(!toggle)}  >
                                        <Link to="/SignUp">Sign Up</Link>
                                    </button></li>
                                )

                            }
                            {
                                setup && (
                                    // onClick={() => loginWithRedirect()}
                                    <li><button className='bg-blue-500 hover:bg-blue-600 px-2 py-[5px] w-full rounded' onClick={logOutHandler} ><Link to="/Home">Log Out</Link></button></li>

                                )
                            }

                        </li>


                    </ul>
                    {/* <div className='flex items-center relative self-stretch'>
                        <input type="text" className="rounded-[50px] text-gray-700 font-400 w-full remove-outline" placeholder='Search...' />
                        <img src="images/search.png" className='absolute right-3 w-7' alt="" />
                    </div> */}
                </div>

            )}
        </div>
    )
}
