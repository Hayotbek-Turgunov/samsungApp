import './Test.css'
import Salom from '../../Assets/galaxy-s8-samsung.jpg'

function Test({ Test }) {
    console.log(Test);
    return (
        <div className='features' >
            <div className="container">
                <div className="features-container">
                    <div className="features-list-wrapper">
                        {
                            Test.map((value, index) => {
                                return (
                                    <div>
                                        <h2 className='features-top-heading'>{value.featuresHeading}</h2>
                                        <ul className='features-list'>
                                            <li className='features-item'><a className='features-links' href=""></a></li>
                                        </ul>
                                        <div className="features-img-wrapper">
                                            <img className='features-img' src={value.featuresImg
                                            } alt="" />
                                        </div>
                                        <div className="features-bottom-deck-wrapper">
                                            <h2 className='features-bottom-deck-heading'></h2>
                                            <p className="features-bottom-deck-text"></p>
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


export default Test