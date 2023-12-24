import './Reccomends.css'

function Reccomends({ recomendsTopHeading, reccomendsCard }) {
    console.log(reccomendsCard);
    return (
        <div className='reccomends'>
            <div className="containerr">
                <div className="recomends-container">
                    <h2 className='recomends-top-heading'>{recomendsTopHeading}</h2>
                    <div className="recomends-card-wrapper">
                        {
                            reccomendsCard.map((value, index) => {
                                return (
                                    <div key={index} className="recomends-card">
                                        <img className='recomends-card-img' src={value.img} alt="" />
                                        <p className='recomends-card-line'>{value.textLine}</p>
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


export default Reccomends