import React from 'react'
import './Footer.css'

function Footer({ footer_bottom, Copyright }) {
    console.log(Copyright);
    return (
        <footer className='site-footer'>
            <div className='container'>
                <div className="site-footer-container-top">
                    <hr className='site-footer-line' />
                    <p className='site-footer-top-title'>Privacy. It’s always personal. <span className="site-footer-text-top">Easily
                        control what you share or don’t share with us.</span> <a className="site-footer-top-link" href="">Learn More</a>
                    </p>
                    <hr className='site-footer-line-top' />
                </div>
                {/* SITE-FOOTER-BOTTOM-CONTAINER */}
                <div className="site-footer-bottom-container">
                    {
                        footer_bottom.map((value, index) => {
                            return (
                                <ul key={index} className='site-footer-bottom-list' >
                                    <h2 className="site-footer-bootom-list-heading">{value.title}</h2>
                                    {
                                        value.list.map((values, index) => {
                                            return (
                                                <li key={index} className="site-footer-bottom-item">
                                                    <a className="site-footer-bottom-link" href="">{values}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        })
                    }
                </div>

                <hr />


                <section className='site-footer-copyright'>
                    <div className="site-footer-copyright-container">
                        <div className="site-footer-copyright-info">
                            <p className="site-footer-copyright-info-title"><a className="site-footer-link" href="">Copyright© 1995-2023 SAMSUNG
                                All Rights Reserved.</a></p>
                        </div>
                        <div className="site-footer-copyright-img-wrapper">
                            <img className='site-footer-copyright-img' src={Copyright} alt="" />
                        </div>
                    </div>
                </section>


            </div>
        </footer>
    )
}

export default Footer