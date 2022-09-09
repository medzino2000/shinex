import React from 'react'
import "./cr.css";
import {BsFacebook, BsLinkedin, BsGithub, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs";

function CopyRight() {
  return (
    <div className='cr'>
        <a href="web3pros.dev">
            <img src="/assets/web3pros_logo.png" alt="" />
        </a>
        <div className='crp'>
            <p>
                © 2022 Web3 Pros, All Rights Reserved.
            </p>
            <p>
                Dubai Internet City
            </p>
        </div>
        <div className='w3p_media'>
            <a href="https://www.facebook.com/web3pros">
                <BsFacebook />
            </a>
            <a href="https://twitter.com/web3pros">
                <BsTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UCvZ7nz0WyDDP6NkIcJLi0uQ">
                <BsYoutube />
            </a>
            <a href="https://www.github.com/web3pros">
                <BsGithub />
            </a>
            <a href="https://www.instagram.com/web3pros.dev">
                <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/company/77625922">
                <BsLinkedin />
            </a>
        </div>
    </div>
  )
}

export default CopyRight