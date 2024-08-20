import React, { useEffect, useState } from 'react';
import Loading from './EachComp.jsx/Loading';
import { Link, useNavigate } from 'react-router-dom';
import LoadingBall from './EachComp.jsx/LoadingBall';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateAccount() {
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [rePwd, setRePwd] = useState('');
    const navgator = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    },[])


    const createAcc = () =>{
        if(!name || !email || !pwd || !rePwd) {
            toast.info("fill in all filled");
            return;
        }
        if( pwd !== rePwd ) {
            toast.error("Passwords not match");
            return;
        }
        localStorage.setItem("NAME", name);
        localStorage.setItem("EMAIL", email);
        localStorage.setItem("PWD", pwd);
        navgator("/login")
    }


  return (
    <div>
    {isLoading ? (
        <Loading />
    ):(
        <div className='flex flex-col justify-between'>
            <h1 className='text-green-600 text-3xl font-bold text-center'>Sign Up</h1>
            <div className='px-8 mt-2'>
                <label htmlFor='name'>Name</label> <br />
                <input value={name} onChange={(e)=>setName(e.target.value)} className='border border-gray-400 rounded-sm w-full p-[2px]' id='name' type="text" />
            </div>
            <div className='px-8 mt-2'>
                <label htmlFor='email'>Email</label> <br />
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className='border border-gray-400 rounded-sm w-full p-[2px]' id='email' type="email" />
            </div>
            <div className='px-8 mt-2'>
                <label htmlFor='pwd'>Password</label> <br />
                <input value={pwd} onChange={(e)=>setPwd(e.target.value)} className='border border-gray-400 rounded-sm w-full p-[2px]' id='pwd' type="password" />
            </div>
            <div className='px-8 mt-2'>
                <label htmlFor='re-pwd'>Confirm Password</label> <br />
                <input value={rePwd} onChange={(e)=>setRePwd(e.target.value)} className='border border-gray-400 rounded-sm w-full p-[2px]' id='re-pwd' type="password" />
            </div>
            <button onClick={createAcc} className='bg-green-600 px-3 py-1 rounded-sm text-gray-100 text-lg w-[33%] block ms-auto me-auto mt-4 hover:bg-green-800 font-semibold'>
                Sign Up
            </button>
            <p className='text-center mt-4'>If you have already an account? <span className='text-blue-600 underline'><Link to={"/login"}>Sign Up</Link></span>  </p>
            <LoadingBall />
            <ToastContainer />
        </div>
    )}
    </div>
  )
}

export default CreateAccount