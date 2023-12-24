import './Banner.css'


function Banner({ bannerBg, bannerBg0, bannerHeading, bannerText }) {
    return (
        <div className='container'>
            <section className="banner" style={{
                background: `url(${bannerBg}) no-repeat center/cover`
            }}>
                <div className="banner-container">
                    <div className="banner-deck">
                        <h2 className="banner-heading">{bannerHeading}</h2>
                        <p className='banner-text'>{bannerText}</p>
                    </div>

                    <div className="banner-auth-wrapper">
                        <a href="#" className="banner-auth-shop">Shop more deals</a>
                        <button className="banner-auth-buy">Buy now</button>
                    </div>
                </div>
            </section>

        </div>
    )
}


export default Banner