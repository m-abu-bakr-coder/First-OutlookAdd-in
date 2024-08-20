import React, { useEffect, useState } from 'react';
import Loading from './EachComp.jsx/Loading';

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [allData, setAllData] = useState([]);
    const [getText, setGetText] = useState('');
    const storeName = localStorage.getItem("NAME");

    useEffect(() => {
        setIsLoading(true);
        fetchApi();
    }, []);

    const fetchApi = async () => {
        try {
            const response = await fetch("https://dummyapi.online/api/users");
            const finalRes = await response.json();
            console.log(finalRes);
            setAllData(finalRes);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };





    function getSelectedData() {
        Office.context.mailbox.item.getSelectedDataAsync(Office.CoercionType.Text, function(asyncResult) {
          if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
            const text = asyncResult.value.data;
            setGetText(text);
          } else {
            console.error(asyncResult.error);
          }
        });
      }








    const getItem = () => Office.context.mailbox.item;



    function setTo(v) {
        const email = v.email;
        const emailArray = [email];
        Office.context.mailbox.item.to.setAsync(emailArray, function(asyncResult) {
          if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
            console.log("Succeeded in setting To field.");
          } else {
            console.error(asyncResult.error);
          }
        });
      }







    function setSubject(v) {
        const subject = v.name;
        let item = getItem();
        item.subject.setAsync(
            subject,
            { asyncContext: { optionalVariable1: 1, optionalVariable2: 2 } },
            (asyncResult) => {
                if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                    write(asyncResult.error.message);
                    return;
                }
    
                /*
                  The subject was successfully set.
                  Run additional operations appropriate to your scenario and
                  use the optionalVariable1 and optionalVariable2 values as needed.
                */
            });
    }





    const prependItemBody = (v) => {
        let item = getItem();
        item.body.getTypeAsync((asyncResult) => {
            if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                console.log(asyncResult.error.message);
                return;
            }

            if (asyncResult.value === Office.CoercionType.Html) {
                item.body.prependAsync(
                    `<b>${v.address.street} <br />
                    ${v.address.city} <br />
                    ${v.address.state} <br />
                    ${v.address.zipcode} </b>`,
                    { coercionType: Office.CoercionType.Html, asyncContext: { optionalVariable1: 1, optionalVariable2: 2 } },
                    (asyncResult) => {
                        if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                            console.log(asyncResult.error.message);
                            return;
                        }
                    }
                );
            } else {
                item.body.prependAsync(
                    'Greetings!',
                    { coercionType: Office.CoercionType.Text, asyncContext: { optionalVariable1: 1, optionalVariable2: 2 } },
                    (asyncResult) => {
                        if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                            console.log(asyncResult.error.message);
                            return;
                        }
                    }
                );
            }
        });
    };

    const clickHandler = (v) =>{
        prependItemBody(v);
        setSubject(v);
        setTo(v);
    }

    const item = allData.map((v, i) => (
        <li 
            onClick={() => {clickHandler(v)}} 
            key={i} 
            className='list-none bg-green-600 p-2 rounded-sm hover:bg-green-800 cursor-pointer mt-2 text-gray-100'
        >
            {v.name} <br /> {v.email}
        </li>
    ));

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <div className='px-4'>
                    <h1 className='text-center text-green-600 text-xl font-semibold'>{storeName}! Welcome</h1>
                    <p>{getText}</p>
                    <button onClick={getSelectedData} className='bg-green-600 px-3 py-1 rounded-sm text-gray-100 text-lg w-[38%] block ms-auto me-auto mt-4 hover:bg-green-800 font-semibold'>
                        Get Text
                    </button>
                    <ul>{item}</ul>
                </div>
            )}
        </div>
    );
}

export default Home;
