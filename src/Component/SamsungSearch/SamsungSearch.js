import './SamsungSearch.css'


function SamsungSearch() {
    return (
        <section className="samsung-search">
            <div className="main-container">
                <div class="samsung-search-container">
                    <h2 class="samsung-search-heading">Looking for something else?</h2>
                    <div class="samsung-search-input-wrapper">
                        <i class="fa-solid fa-magnifying-glass fa-input"></i>
                        <input class="samsung-search-input" type="text" placeholder="Search Keyword"></input>
                    </div>

                    <div class="samsung-search-btn-wrapper">
                        <button class="samsung-search-btn">Galaxy Z Fold5</button>
                        <button class="samsung-search-btn">Galaxy Tab S9</button>
                        <button class="samsung-search-btn">The Frame</button>
                        <button class="samsung-search-btn">QLED 8K</button>
                        <button class="samsung-search-btn">BESPOKE Jet</button>
                        <br />
                        <button class="samsung-search-btn">BESPOKE Refrigiator</button>
                        <button class="samsung-search-btn">Accessories</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default SamsungSearch