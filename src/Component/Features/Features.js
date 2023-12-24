import './Features.css'
import '../Banner/Banner.css'

function Features({ features }) {
    console.log(features[0].featuresBg);
    return (
        <div className='features' style={{
            backgroundColor: features[0]?.featuresBg
        }} >
            <div className="container">
                <div className="features-container">
                    <div className="features-list-wrapper">
                        {
                            features.map((value, index) => {
                                console.log(value);
                                return (
                                    <div key={index}>
                                        <h2 className='features-top-heading'>{value.featuresHeading}</h2>
                                        <ul className='features-list'>
                                            {
                                                value.featuresList.map((val, index) => {
                                                    return (
                                                        <li key={index} className='features-item'><a className='features-links' href="">{val}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div className="features-img-wrapper">
                                            <img className='features-img' src={value.featuresImg} alt="" />
                                        </div>
                                        <div className="features-bottom-deck-wrapper">
                                            <h2 className='features-bottom-deck-heading'>{value.featuresBottomDeckHeading}</h2>
                                            <p className="features-bottom-deck-text">{value.featuresBottomDecktext}</p>
                                            <div className="features-bottom-deck-auth-wrapper">
                                                <a href="#" className="features-bottom-auth-shop banner-auth-shop">Shop more deals</a>
                                                <button className="features-bottom-auth-buy banner-auth-buy">Buy now</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Features