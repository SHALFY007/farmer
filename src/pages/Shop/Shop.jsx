import './Shop.css'
import { useSelector, useDispatch } from 'react-redux'
import format from '../../utils/format'
import { useEffect, useState } from 'react'
import { nextTap } from '../../store/slices/coinSlice'
import { Swiper, SwiperSlide } from 'swiper/react';
import { editSkin, buySkinSl, editActive, editLocal, upEnergy } from '../../store/slices/coinSlice'

function Shop() {

    const lvl = useSelector((state) => state.coin.oneTap) 
    const multitapPrice = useSelector((state) => state.coin.multitapPrice)
    const energyPrice = useSelector((state) => state.coin.energyPrice)
    const currentId = useSelector((state) => state.coin.currentActive)
    const [multitap, setMultitap] = useState(format(multitapPrice.toString()))
    const [energy, setEnergy] = useState(format(energyPrice.toString()))
    // const [localId, setLocalId] = useState('secondSkin')
    const localId = useSelector((state) => state.coin.localId)
    // const [isBuy, setIsBuy] = useState(false)
    const isBuy = useSelector((state) => state.coin.isBuy)
    const dispatch = useDispatch()

    const setActive = (el) => {
        const elem = el.currentTarget.parentNode
        elem.querySelector('.active_btn').classList.remove('disactive')
        elem.querySelector('.buy_btn').classList.add('disactive')
    }

    const autofarmStart = (e) => {
        setActive(e)
    }
        
    const nextLvl = () => {
        dispatch(nextTap())
    }

    const upgradeEnergy = () => {
        dispatch(upEnergy())   
    }

    const buySkin = (e) => {
        let status = e.currentTarget.parentNode.getAttribute('status')
        if (status == 'buy') {
            e.currentTarget.parentNode.setAttribute('status', 'select')
            dispatch(buySkinSl())
        }
    }

    const changeSkin = (e) => {
        let path = e.currentTarget.parentNode.querySelector('img').getAttribute('src')
        dispatch(editSkin(path))
        dispatch(editActive(e.currentTarget.parentNode.getAttribute('id')))
    }

    const a =  async () => {
        try {
            await document.querySelector(`#${localId}`).querySelector('.active_btn').classList.add('disactive')
            await document.querySelector(`#${localId}`).querySelector('.buy_btn').classList.remove('disactive')
            await document.querySelector(`#${currentId}`).querySelector('.active_btn').classList.remove('disactive')
            await document.querySelector(`#${currentId}`).querySelector('.buy_btn').classList.add('disactive')
            await dispatch(editLocal(currentId))   
        } catch (error) {
            
        }
    }

    useEffect(() => {
        if (document.querySelector(`#${localId}`)) {
            a()
        }
    }, [currentId])

    useEffect(() => {
        document.querySelector(`#${currentId}`).querySelector('.active_btn').classList.add('disactive')
        document.querySelector(`#${currentId}`).querySelector('.buy_btn').classList.remove('disactive')
    }, [])

    return (
        <main className='shop noselect'>
            <header className="header">
                <h2 className="header_txt">Shop</h2>
            </header>
            <hr />
            <div className="upgrade_block">
                <h2 className="header_txt">Upgrade</h2>
                <div className="upgrade_blocks">
                    <div className="upgrade_top">
                        <h5 className="upgrade_header">
                            Multitap
                        </h5>
                        <p className="upgrade_lvl">
                            {lvl} → {lvl+1}
                        </p>
                        <div className="upgrade_price_block">
                            <img src="./img/money-shop.png" alt="money" />
                            <p className="upgrade_txt">{multitap}</p>
                        </div>
                        <button className="buy_btn" onClick={nextLvl}>
                            <span>
                                Buy
                            </span>
                        </button>
                    </div>
                    <div className="upgrade_top">
                    <h5 className="upgrade_header">
                            Energy
                        </h5>
                        <p className="upgrade_lvl">
                            +500
                        </p>
                        <div className="upgrade_price_block">
                            <img src="./img/money-shop.png" alt="money" />
                            <p className="upgrade_txt">{energy}</p>
                        </div>
                        <button className="buy_btn" onClick={upgradeEnergy}>
                            <span>
                                Buy
                            </span>
                        </button>
                    </div>
                </div>
                <div className="upgrade_bottom">
                    <div className="upgrade_sprite">
                        <img src="./img/sprite.png" alt="sprite" />
                    </div>
                    <div className="upgrade_autofarm">
                    <h5 className="upgrade_header">
                            Auto_farm
                        </h5>
                        <div className="upgrade_price_block">
                            <img src="./img/money-shop.png" alt="money" />
                            <p className="upgrade_txt">1 000 000</p>
                        </div>
                    </div>
                    <button className="buy_btn" onClick={autofarmStart}>
                            <span>
                                Buy
                            </span>
                        </button>
                        <button className="buy_btn select_btn active_btn disactive">
                            <span>
                                Active
                            </span>
                    </button>
                </div>
            </div>
            <div className="skins_block">
                <h2 className="header_txt">Skins</h2>
                <Swiper 
                    spaceBetween={50}
                    slidesPerView={1}
                    >
                    <SwiperSlide>
                    <div className="upgrade_bottom skin_block" status='buy' id='firstSkin'>
                        <img src="./img/skin.png" alt="sprite"  className='sprite'/>
                    <div className="upgrade_autofarm">
                    <h5 className="upgrade_header">
                            CryptoFarm
                        </h5>
                    
                        {!isBuy && (
                            <div className="upgrade_price_block">
                                <img src="./img/money-shop.png" alt="money" />
                                <p className="upgrade_txt">1 000 000</p>
                            </div>
                        )}
                    </div>
                    {!isBuy && (
                            <button className="buy_btn" onClick={buySkin}>
                                <span>
                                Buy
                                    </span>
                            </button>
                    )}
                    {
                        isBuy && (
                            <button className="buy_btn select_btn" onClick={changeSkin}>
                            <span>
                                Select
                            </span>
                    </button>
                        )
                    }
                    <button className="buy_btn select_btn active_btn disactive">
                            <span>
                                Active
                            </span>
                    </button>


                </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="upgrade_bottom skin_block" id='secondSkin'>
                        <img src="./img/coin-btn.png" alt="sprite"  className='sprite'/>
                    <div className="upgrade_autofarm">
                    <h5 className="upgrade_header">
                            CryptoFarm
                        </h5>
                    </div>
                    <button className="buy_btn select_btn " onClick={changeSkin}>
                            <span>
                                Select
                            </span>
                    </button>
                        <button className="buy_btn select_btn active_btn disactive">
                            <span>
                                Active
                            </span>
                    </button>
                </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </main>
    )
}

export default Shop