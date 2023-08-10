import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid ">

                    <div className="navbar-brand col-2" >
                        <img src="ing1.png" alt="logo" />
                    </div>

                    <ul className="navbar-nav me-auto  ">

                        <li className="nav-item ">
                            <a className="text-white bg-dark p-3 d-flex" aria-current="page" href="Home">HOME</a>
                        </li>

                        <li className="nav-item ">
                            <a className="text-white bg-dark p-3 d-flex " href="ABOUT US">ABOUT US</a>
                        </li>

                        <li className="nav-item ">
                            <a className="text-white bg-dark p-3 d-flex" href="SOLUTIONS">SOLUTIONS</a>
                        </li>

                        <li className="nav-item">
                            <a className="text-white bg-dark p-3 d-flex" href="PRODUCTS">PRODUCTS</a>
                        </li>

                        <li className="nav-item">
                            <a className="text-white bg-dark p-3 d-flex" href="RESOURCES">RESOURCES</a>
                        </li>

                        <li className="nav-item">
                            <a className="text-white bg-dark p-3 d-flex" href="CONTACT US">CONTACT US</a>
                        </li>

                        <li className="nav-item">
                            <a className=" bi bi-twitter text-white bg-dark p-3 d-flex" href="https://twitter.com/i/flow/login?redirect_after_login=%2Fgetpeppermint"></a>
                        </li>

                        
                        <li className="nav-item">
                            <a className=" bi bi-linkedin text-white bg-dark p-3 d-flex" href="https://www.linkedin.com/company/getpeppermint/"></a>
                        </li> 

                        <li className="nav-item">
                            <a className="bi bi-youtube text-white bg-dark p-3 d-flex" href="https://www.youtube.com/channel/UCsBgxvgDYRPHEKPp_tU-Qyw"></a>
                        </li>    

                        <li className="nav-item">
                            <a className=" bi bi-envelope-at-fill text-white bg-dark p-3 d-flex" href="gmail.com"></a>
                        </li>       

                            
                            
                        

                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar