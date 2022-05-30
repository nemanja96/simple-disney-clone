import React from 'react'
import Link from 'next/Link';
import Image from 'next/Image';
import logo from '../public/disney.png';

function NavBar({account}) {
  return (
    <div className="navbar">
        <Link href="/"><Image src={logo} alt="Disney Logo" width={100} height={40}></Image></Link>
        <div className="account-info">
          <p>Welcome {account?.username}</p>
          <img className="avatar" src={account?.avatar.url} />
        </div>
    </div>
  )
}

export default NavBar