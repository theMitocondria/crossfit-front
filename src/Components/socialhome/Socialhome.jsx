import React from 'react'
import "./Socialhome.css"
import CardPost from './CardPost'
import { useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AllPostsReducers } from '../../redux/slices/socialSlice';

const Socialhome = () => {

    const dispatch=useDispatch();
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);
    const phone = window.innerWidth < 600 ? true : false;
    const buttonClicked = () => {
        console.log("mobile button clicked");
        setClicked(!clicked)
    }
    const newpostbuttonClicked = () => {
        navigate('/newpost')
    }
    const allpostclickbtn = () => {
        navigate('/community')
    }
    useEffect(()=>{
        const my="post function called";
        dispatch(AllPostsReducers({my}));
    },[]);
    const posts=useSelector(state=>state.social?.posts);
    console.log(posts);

    return (
        <div>

            {
                phone ? <div className='mobile-parent-div'>
                    <div className='mobile-navbar-div'>
                        <button className="navbar-mobile-crossfit-button"><p className='cross-mobile-para'>cross<span className='fit-mobile-para'>fit</span></p></button>
                        <button className="navbar-mobile-hamburger-button" onClick={buttonClicked}><GiHamburgerMenu /></button>

                    </div>

                    <div className={clicked ? "active-mobile-user-info" : "unactive-mobile-user-info"}>
                        <div className='socialhome-left-profile-div'>
                            <img className='socialhome-left-img' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar" />
                            <h2 className='socialhome-left-name'>Dhruv Mehta</h2>
                            <h4 className='socialhome-left-desc'>Artist,Trainer,Web Developer</h4>
                            <h1 className='socialhome-left-no-post'>4 Posts</h1>
                            <div className='socialhome-left-BUTTON-div'>
                                <button onClick={allpostclickbtn} className='socialhome-left-BUTTON'>MY POSTS</button>
                                <button onClick={allpostclickbtn} className='socialhome-left-BUTTON'>ALL POSTS</button>
                                <button onClick={newpostbuttonClicked} className='socialhome-left-BUTTON'>NEW POST</button>
                                <button className='socialhome-left-BUTTON'>EDIT PROFILE</button>

                            </div>
                        </div>
                    </div>
                    <div>
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                    </div>
                </div> : <div className='socialhome-main-div'>
                    <div className='socialhome-left-div'>
                        <div className='socialhome-left-heading-div'>
                            <p className='socialhome-left-heading-para-cross'>cross<span className='socialhome-left-heading-para-fit'>fit</span></p>
                        </div>
                        <div className='socialhome-left-profile-div'>
                            <img className='socialhome-left-img' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar" />
                            <h2 className='socialhome-left-name'>Dhruv Mehta</h2>
                            <h4 className='socialhome-left-desc'>Artist,Trainer,Web Developer</h4>
                            <h1 className='socialhome-left-no-post'>4 Posts</h1>
                            <div className='socialhome-left-BUTTON-div'>
                                <button onClick={allpostclickbtn} className='socialhome-left-BUTTON'>MY POSTS</button>
                                <button onClick={allpostclickbtn} className='socialhome-left-BUTTON'>ALL POSTS</button>
                                <button onClick={newpostbuttonClicked} className='socialhome-left-BUTTON'>NEW POST</button>
                                <button className='socialhome-left-BUTTON'>EDIT PROFILE</button>

                            </div>
                        </div>
                    </div>
                    <div className='socialhome-center-div'>
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                    </div>
                    <div className='socialhome-right-div'>
                        <h2 className='socialhome-right-heading-para'>Users</h2>
                        <div className='user-palette'>
                            <div className='img-palette-div'>
                                <img className='social-post-user-palette-img' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar" />

                            </div>
                            <div className='userpalette-right'>
                                <h3 className='social-palette-username'>Dhruv Mehta</h3>
                                <h5 className='social-palette-username'>6 Posts</h5>
                            </div>


                        </div>

                        <div className='user-palette'>
                            <div className='img-palette-div'>
                                <img className='social-post-user-palette-img' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar" />

                            </div>
                            <div className='userpalette-right'>
                                <h3 className='social-palette-username'>Dhruv Mehta</h3>
                                <h5 className='social-palette-username'>6 Posts</h5>
                            </div>


                        </div>

                        <div className='user-palette'>
                            <div className='img-palette-div'>
                                <img className='social-post-user-palette-img' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar" />

                            </div>
                            <div className='userpalette-right'>
                                <h3 className='social-palette-username'>Dhruv Mehta</h3>
                                <h5 className='social-palette-username'>6 Posts</h5>
                            </div>


                        </div>
                        <div className='user-palette'>
                            <div className='img-palette-div'>
                                <img className='social-post-user-palette-img' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar" />

                            </div>
                            <div className='userpalette-right'>
                                <h3 className='social-palette-username'>Dhruv Mehta</h3>
                                <h5 className='social-palette-username'>6 Posts</h5>
                            </div>


                        </div> <div className='user-palette'>
                            <div className='img-palette-div'>
                                <img className='social-post-user-palette-img' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar" />

                            </div>
                            <div className='userpalette-right'>
                                <h3 className='social-palette-username'>Dhruv Mehta</h3>
                                <h5 className='social-palette-username'>6 Posts</h5>
                            </div>


                        </div> <div className='user-palette'>
                            <div className='img-palette-div'>
                                <img className='social-post-user-palette-img' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar" />

                            </div>
                            <div className='userpalette-right'>
                                <h3 className='social-palette-username'>Dhruv Mehta</h3>
                                <h5 className='social-palette-username'>6 Posts</h5>
                            </div>


                        </div> <div className='user-palette'>
                            <div className='img-palette-div'>
                                <img className='social-post-user-palette-img' src="https://imgs.search.brave.com/c6mxW67x8ep641hmIzs_dwZhjuUCeCIVAhwQXlaQ1i0/rs:fit:464:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/RXNCZTJ1ZEhCaWVG/ZVpWbXVzOHFBSGFI/ayZwaWQ9QXBp" alt="user-avavtar" />

                            </div>
                            <div className='userpalette-right'>
                                <h3 className='social-palette-username'>Dhruv Mehta</h3>
                                <h5 className='social-palette-username'>6 Posts</h5>
                            </div>


                        </div>
                    </div>
                </div>
            }

        </div>

    )
}

export default Socialhome