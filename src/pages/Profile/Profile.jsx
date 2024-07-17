import './Profile.css'

function Profile() {

    return (
        <main className="profile">
            <header className="header">
                <h2 className="header_txt">Profile</h2>
            </header>
            <hr />
            <div className="profile_info">
                <img src="./img/profile.png" alt="" className="profile_big_img" />
                <div className="profile_info_block">
                    <p className="profile_name">Farmer</p>
                    <p className="profile_username">@Farmer</p>
                    <p className="profile_username profile_id">ID: 47488392984</p>
                </div>
            </div>
            <hr />
            <div className="profile_referal">
                <h2 className="referal_header">Invite friends and earn coins </h2>
                <div className="referal_block">
                    <span>0 FRIEND</span>
                </div>
                <div className="referal_blocks">
                    <div className="referal_mini">
                        <p className="referal_txt">Share your invitation link</p>
                        <img src="./img/sprite2.png" alt="" />
                    </div>
                    <svg width="23" height="6" viewBox="0 0 23 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3L18 0.113249V5.88675L23 3ZM0 3.5H18.5V2.5H0V3.5Z" fill="#E8E22E" fill-opacity="0.52"/>
                    </svg>
                    <div className="referal_mini">
                    <p className="referal_txt">You get 50 000 coins for every new friend</p>
                    <div className="referal_money">
                        <p className="money_txt">+ 50 000</p>
                        <img src="./img/money-mini.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="profile_link">
                <div className="big_link_btn">
                    <span>
                    https://t.me/FarmerTapBot/FatmerTap?start=5295136531
                    </span>
                </div>
                <div className="small_link_btn">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.2232 10.8125H2.46427C2.06171 10.8125 1.67563 10.6526 1.39098 10.3679C1.10633 10.0833 0.946411 9.69722 0.946411 9.29466V2.4643C0.946411 2.06174 1.10633 1.67567 1.39098 1.39101C1.67563 1.10636 2.06171 0.946442 2.46427 0.946442H9.29463C9.69719 0.946442 10.0833 1.10636 10.3679 1.39101C10.6526 1.67567 10.8125 2.06174 10.8125 2.4643V3.22323M7.77677 6.25894H14.6071C15.4454 6.25894 16.125 6.93851 16.125 7.7768V14.6072C16.125 15.4454 15.4454 16.125 14.6071 16.125H7.77677C6.93848 16.125 6.25891 15.4454 6.25891 14.6072V7.7768C6.25891 6.93851 6.93848 6.25894 7.77677 6.25894Z" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
            </div>
        </main>
    )
}

export default Profile