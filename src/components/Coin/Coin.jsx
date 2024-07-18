import { useSelector, useDispatch } from 'react-redux'
import { increment, increase, raiseEnergy , setMaximum} from '../../store/slices/coinSlice'
import { useEffect, useState } from 'react'
import format from '../../utils/format'
import './Coin.css'

function Coin() {

    const count = useSelector((state) => state.coin.count)
    const able = useSelector((state) => state.coin.able)
    const maximum = useSelector((state) => state.coin.maximum)
    const oneTap = useSelector((state) => state.coin.oneTap)
    const skin = useSelector((state) => state.coin.skin)
    const [counter, setCounter] = useState(1)
    let isUp = true
    const proc = oneTap/maximum*100
    const [size, setSize] = useState(80.66)
    const dispatch = useDispatch()

    const drawCount = (e) => {
        const y = e.targetTouches[e.targetTouches.length-1].clientY
        const x = e.targetTouches[e.targetTouches.length-1].clientX
        
        const newDiv = document.createElement("div");
        newDiv.style.position = 'absolute'
        newDiv.style.top = y + 'px'
        newDiv.style.left = x + 'px'
        newDiv.classList.add(`click_${counter}`)
        newDiv.classList.add('coin_band_txt')
        newDiv.classList.add('coin_new_tap')
        const newContent = document.createTextNode(`+${oneTap}`);
        newDiv.appendChild(newContent);
        let currentDiv = document.querySelector('.coin_btn')
        currentDiv.insertAdjacentHTML('afterbegin', newDiv.outerHTML);
        setCounter(counter+1)
        setTimeout(() => {
            document.querySelector(`.click_${counter}`).remove()
        }, 1000)
    }

    const incrementMoney =(e) => {
        window.navigator.vibrate(200)
        drawCount(e)
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

    useEffect(() => {
        if ((maximum - able) >= 10 ) {
            var inter = setInterval(() => {
                    dispatch(raiseEnergy())

            }, 3000)
        } else {
            clearInterval(inter)
            dispatch(setMaximum())
        }
        
    }, [able])

    return (
        <div className="coin noselect">
            <div className="coin_count">
                <img src="./img/money-mini.png" alt="money" />
                <p className="coin_txt">{format(count.toString())}</p>
            </div>
            <button className="coin_btn noselect" onTouchStart={incrementMoney}>
                <img src={skin} alt="coin" draggable="false" className='noselect'/>
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