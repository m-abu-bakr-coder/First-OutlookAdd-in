import React, {useState, useEffect} from 'react';
import Loading from './EachComp.jsx/Loading';
import { Link, useNavigate } from 'react-router-dom';
import LoadingBall from './EachComp.jsx/LoadingBall';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [isLoading, setIsLoading] = useState(true);
    const [logEmail, setLogEmail] = useState('');
    const [logPwd, setLogPwd] = useState('');
    const navigator = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    },[])


    const logIn = () =>{
        let storeEmail = localStorage.getItem("EMAIL");
        let storePwd = localStorage.getItem("PWD");

        if( !logEmail || !logPwd ) {
            toast.info("fill in all filled");
            return;
        }

        if(storeEmail !== logEmail || storePwd !== logPwd) {
            toast.error("Email or Password is incorrect");
            return;
        }
        navigator("/home");
    }

  return (
    <div>
    {isLoading ? (
        <Loading />
    ):(
        <div className='flex flex-col justify-between'>
            <h1 className='text-green-600 text-3xl font-bold text-center'>Sign Up</h1>
            
            <div className='px-8 mt-2'>
                <label htmlFor='email'>Email</label> <br />
                <input value={logEmail} onChange={(e)=>setLogEmail(e.target.value)} className='border border-gray-400 rounded-sm w-full p-[2px]' id='email' type="email" />
            </div>
            <div className='px-8 mt-2'>
                <label htmlFor='pwd'>Password</label> <br />
                <input value={logPwd} onChange={(e)=>setLogPwd(e.target.value)} className='border border-gray-400 rounded-sm w-full p-[2px]' id='pwd' type="password" />
            </div>
           
            <button onClick={logIn} className='bg-green-600 px-3 py-1 rounded-sm text-gray-100 text-lg w-[28%] block ms-auto me-auto mt-4 hover:bg-green-800 font-semibold'>
                Log In
            </button>
            <p className='text-center mt-4'>If you have not an account? <span className='text-blue-600 underline'><Link to={"/"}>Sign Up</Link></span> </p>
            <LoadingBall />
            <ToastContainer />
        </div>
    )}
    </div>
  )
}

export default Login