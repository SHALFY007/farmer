import { useSelector, useDispatch } from 'react-redux'
import { increment, increase } from '../../store/slices/coinSlice'
import { useEffect, useState } from 'react'
import format from '../../utils/format'
import './Coin.css'

function Coin() {

    const count = useSelector((state) => state.coin.count)
    const able = useSelector((state) => state.coin.able)
    const maximum = useSelector((state) => state.coin.maximum)
    const oneTap = useSelector((state) => state.coin.oneTap)
    const skin = useSelector((state) => state.coin.skin)
    const proc = oneTap/maximum*100
    const [size, setSize] = useState(80.66)
    const dispatch = useDispatch()

    const incrementMoney =() => {
        dispatch(increment())
        dispatch(increase())

        sizeLine()
    }

    const sizeLine = () => {
        setSize((size) => size-(size*proc/100))
    }

    useEffect(() => {
        document.querySelector('.coin_band_block').style.width = size + 'vw'
    }, [size])

    return (
        <div className="coin">
            <div className="coin_count">
                <img src="./img/money-mini.png" alt="money" />
                <p className="coin_txt">{format(count.toString())}</p>
            </div>
            <button className="coin_btn" onClick={incrementMoney}>
                <img src={skin} alt="coin" />
            </button>
            <div className="coin_band">
                <div className="coin_band_num">
                    <img src="./img/volt.png" alt="volt" />
                    <p className="coin_band_txt">{able} <span>/ {maximum}</span></p>
                </div>
                <div className="coin_band_cont">
                    <div className="coin_band_block"></div>
                </div>
            </div>
        </div>
    )
}

export default Coin