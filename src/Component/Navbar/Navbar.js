import './Navbar.css'


function Navbar({ img, navbarListLeft, navbarListRight, navbarIconSearch }) {
    console.log(navbarIconSearch);
    return (
        <div className='site-header'>
            <div className="container">
                <div className="site-header-container">
                    {/* SITE-HEADER-LOGO */}
                    <a className='site-header-logo' href="#">
                        <img className='site-header-logo-img' src={img} alt="" />
                    </a>
                    {/* SITE-HEADER-NAV */}
                    <nav className='site-header-sitenav'>
                        <ul className='site-header-sitenav-list-left'>
                            {
                                navbarListLeft.map((value, index) => {
                                    return (
                                        <li key={index} className='site-header-sitenav-item'>
                                            <a className='site-header-sitenav-link' href="">{value}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>


                        {/* SITENAV-LIST-RIGHT */}
                        <ul className='site-header-sitenav-list-left'>
                            {
                                navbarListRight.map((value, index) => {
                                    return (
                                        <li key={index} className='site-header-sitenav-item'>
                                            <a className='site-header-sitenav-link' href="">{value}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>


                    {/* SITE-HEADER-AUTH */}
                    <ul className='site-header-auth-wrapper'>
                        {
                            navbarIconSearch.map((value, index) => {
                                return (
                                    <li key={index} className='site-header-auth-item'><button className='site-header-auth-btn'>{value}</button></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar