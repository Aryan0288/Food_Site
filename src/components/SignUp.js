import React, { useState } from 'react'
import { TEInput, TERipple } from "tw-elements-react";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../Firebase';
import Nav from './Nav';
import '../App.css'
export default function SignUp() {
  const navigate = useNavigate();
  const [values, setValue] = useState({
    name: "",
    email: "",
    pass: ""
  });

  const [error, setError] = useState('');
  const [sbBtn, setsbBtn] = useState(false);

  const handleSubmission = () => {

    if (!values.name || !values.email || !values.pass) {
      setError("Fill all Fields");
      return;
    }
    if (!values.email.includes('@') || !values.email.includes('.')) {
      setError('Invalid Email Address');
      return;
    }
    if (values.pass.length < 8) {
      setError('Password is too Short');
      return;
    }
    setError('');
    setsbBtn(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass).then(async (res) => {
      const user = res.user;
      setsbBtn(false);
      await updateProfile(user, {
        displayName: values.name,
      });
      console.log(user);
      console.log("i am near toast");
      toast.success('Welcome ' + values.name.toUpperCase());
      navigate('/Home');
    })
      .catch((err) => {
        setsbBtn(false);
        console.log("Error-", err)
        setError(err.message);
        toast.error("Email Already Used");
        toast.info("Try SignIn");
        return;
      });

  }
  return (
    <>
      <Nav />

      <section className="h-full pt-24 bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* <!-- Left column container--> */}
                  <div className="px-4 md:px-0 lg:w-6/12 mx-auto">
                    <div className="md:mx-6 md:p-12">
                      {/* <!--Logo--> */}
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="images/italic_food-removebg-preview.png"
                          alt="logo"
                        />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          We are The Team
                        </h4>
                      </div>

                      <form >
                        <p className="mb-4">Please login to your account</p>
                        {/* <!--Username input--> */}
                        <TEInput
                          type="text"
                          label="Username"
                          className="mb-4 focus:outline-none!important"
                          onChange={(event) => setValue((prev) => ({ ...prev, name: event.target.value }))}

                        ></TEInput>
                        <TEInput
                          type="email"
                          label="Email"
                          className="mb-4"
                          onChange={(event) => setValue((prev) => ({ ...prev, email: event.target.value }))}
                        ></TEInput>

                        {/* <!--Password input--> */}
                        <TEInput
                          type="password"
                          label="Password"
                          className="mb-4"
                          onChange={(event) => setValue((prev) => ({ ...prev, pass: event.target.value }))}
                        ></TEInput>



                        <p className='text-red-500'>{error}</p>



                        {/* <!--Submit button--> */}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <TERipple rippleColor="light" className="checkAuth w-full ">
                            <button
                              className=" mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                              type="button"
                              style={{
                                background:
                                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                              }}
                              onClick={handleSubmission}
                              disabled={sbBtn}
                            >
                              Sign Up
                            </button>
                          </TERipple>

                          {/* <!--Forgot password link--> */}
                          {/* <a href="#!">Forgot password?</a> */}
                        </div>

                        {/* <!--Register button--> */}
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Already have an account?</p>
                          <Link to="/Login">
                            <TERipple rippleColor="light">
                              <button
                                type="button"
                                className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                              >
                                Sign In
                              </button>
                            </TERipple>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* <!-- Right column container with background and description--> */}
                  {/* <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none "
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                    Great Companies allow their employees to make mistakes, figure things out, to get good at things, and solve problems without breaking their spirit and drive. Great Companies reward and celebrate successes while encouraging their employees to stretch their skills and their capabilities.
                    </p>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
