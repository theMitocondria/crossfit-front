import React from 'react'
import "./Socialhome.css"
const NewPost = () => {
    return (
        <div className='socialhome-main-div'>
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
                        <button className='socialhome-left-BUTTON'>MY POSTS</button>
                        <button className='socialhome-left-BUTTON'>NEW POST</button>
                        <button className='socialhome-left-BUTTON'>EDIT PROFILE</button>

                    </div>
                </div>
            </div>
            <div className='new-center-div'>
               <div className='new-post-form-div'>
               <form className='newPostForm' >
                    <h2 className='newpost-heading'>Express Yourself: Create a New Post on Our Social Media App Today!</h2>
                    <p className='newpost-para'>Ready to share your thoughts, feelings, and experiences with the world? Our social media app is the perfect platform for you to create a new post and let your voice be heard. So what are you waiting for? Create a new post today and start building your online community!</p>
                    <input
                        type="file"
                        accept="image/*"
                        placeholder='upload'
                    />
                    <input
                        type="text"
                        placeholder='Caption ..'
                    />
                    <button type="submit" className='btn-socialhome'>
                        Post
                    </button>
                </form>
               </div>
            </div>
        </div>
    )
}

export default NewPost