import './Task.css'

function Task(props) {

    return (
        <div className="task">
                        <img src={props.img} alt="sprite" />
                    <div className="upgrade_autofarm task_mid">
                    <h5 className="upgrade_header">
                            {props.name}
                        </h5>
                        <div className="upgrade_price_block">
                            <img src="./img/money-shop.png" alt="money" />
                            <p className="upgrade_txt">{props.price}</p>
                        </div>
                    </div>
                    <button className="buy_btn">
                            <span>
                                Start
                            </span>
                        </button>
                        <button className="buy_btn select_btn active_btn disactive">
                            <span>
                                Active
                            </span>
                    </button>
        </div>
    )
}

export default Task