import React from 'react'
import './Login.css'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function LoginScreen() {

    return (
        <div className='block'>
            <div className='flex-container'>
                <div className="flex-item1">
                    {/* <div >1 of 1</div> */}
                </div>
                <div className="flex-item2">
                    <div className='datafields'>
                        <h2><strong>Hello</strong>, Grab seats for your upcoming fav event!</h2>
                        <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<SignIn />}></Route>
                            <Route path='/SignUp' element={<SignUp />}></Route>
                        </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen