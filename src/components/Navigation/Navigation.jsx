import './Navigation.css'

function Navigation() {

    return (
        <div className="navigation">
            <hr />
            <div className="navigation_block">
                <button className="navigation_content">
                    <img src="./img/img1.png" alt="img" />
                    <span>Click</span>
                </button>
                <button className="navigation_content">
                    <img src="./img/img2.png" alt="img" />
                    <span>Shop</span>
                </button>
                <button className="navigation_content">
                    <img src="./img/img3.png" alt="img" />
                    <span>Tasks</span>
                </button>
                <button className="navigation_content" >
                    <img src="./img/img4.png" alt="img" />
                    <span>Profile</span>
                </button>
            </div>
        </div>
    )
}

export default Navigation