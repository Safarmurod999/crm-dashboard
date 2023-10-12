import React from 'react'
import { useState } from 'react'
import { dont_send } from '../components/donot_send/Donot_send';

export default function Profile() {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTab, setSelectedTab] = useState('tab1');

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="Account">
            <section>
                <div className="rowAccount">
                    <div className="ImageProfile">
                        <img src="https://avatars.mds.yandex.net/i?id=8f037456a1a56bf115a68de1fa655982fed635ca-10879141-images-thumbs&n=13" alt={"User"} />
                    </div>
                    <div className="InfoProfile">
                        <p className="p1Account">John Doe</p>
                        <p className="p2Account">Age: <strong>26</strong></p>
                        <p className="p3Account">Gender: <strong>Male</strong></p>
                        <a href="tel:+998998887766" className="PhoneNumberAccount">
                            +998998887766
                        </a>
                    </div>
                </div>
            </section>
            <section className="InfoAccount">
                <div className="summary">
                    <div className="part_summary1">
                        <p className="monthly">
                            Kunlig oylig
                            <p className="price"> 200 000</p>
                            so’m
                        </p>
                        <p className="penalty">
                            Jaremalari
                            <p className="price">300 000</p>
                            so’m
                        </p>
                        <p className="monthly_price">
                            Shu oy ishlagan puli
                            <p className="price">5 000 000</p>
                            so’m
                        </p>
                    </div>
                    <div className="part_summary2">
                        <p className="advance">
                            Shu oy
                            <p className="price">500 000</p>
                            so’m avans olgan
                        </p>
                        <p className="bonus">
                            Mukofot puli
                            <p className="price">400 000</p>
                            so’m
                        </p>
                    </div>
                </div>
                <div className="do_not_send">
                    {dont_send.map((item, index) => (
                        <button
                            key={index}
                            style={{
                                backgroundColor: item.come ? '#F5F5F5' : 'red',
                            }}
                            className="come"
                            onClick={openModal}
                        >
                            {item.date}
                        </button>
                    ))}
                </div>
                {modalVisible ? (
                    <div className="modal">
                        <div className="modal-content">
                            <div className="tabs">
                                <button
                                    className={selectedTab === 'tab1' ? 'active' : ''}
                                    onClick={() => handleTabClick('tab1')}
                                    style={{
                                        display: "flex",
                                        width: "182px",
                                        height: "50px",
                                        padding: "10px",
                                        alignItems: "center",
                                        gap: "10px",
                                        flexShrink: "0",
                                    }}
                                >
                                    Kunlik Oylik
                                </button>
                                <button
                                    className={selectedTab === 'tab1' ? 'active' : ''}
                                    onClick={() => handleTabClick('tab2')}
                                    style={{
                                        display: "flex",
                                        width: "182px",
                                        height: "50px",
                                        padding: "10px",
                                        alignItems: "center",
                                        gap: "10px",
                                        flexShrink: "0",
                                    }}
                                >
                                    Advance
                                </button>
                                <button
                                    className={selectedTab === 'tab1' ? 'active' : ''}
                                    onClick={() => handleTabClick('tab3')}
                                    style={{
                                        display: "flex",
                                        width: "182px",
                                        height: "50px",
                                        padding: "10px",
                                        alignItems: "center",
                                        gap: "10px",
                                        flexShrink: "0",
                                    }}
                                >
                                    Penalty
                                </button>
                                <button
                                    className={selectedTab === 'tab1' ? 'active' : ''}
                                    onClick={() => handleTabClick('tab4')}
                                    style={{
                                        display: "flex",
                                        width: "182px",
                                        height: "50px",
                                        padding: "10px",
                                        alignItems: "center",
                                        gap: "10px",
                                        flexShrink: "0",
                                    }}
                                >
                                    Bonus
                                </button>
                            </div>
                            <div className='tall_hr'></div>
                            <div className="tab-content">
                                {selectedTab === 'tab1' && (
                                    <div>
                                        <p className="ModalDaily">
                                            Kunlig oylik
                                            <p className="price">200 000</p>
                                            so’m
                                        </p>
                                    </div>
                                )}
                                {selectedTab === 'tab2' && (
                                    <div>
                                        <p className="ModalDaily">
                                            Bu kund
                                            <p className="price">200 000</p>
                                            so’m   avans olgan
                                        </p>
                                        <p className='advance_info'>
                                            <strong>Pul olgani sababi</strong> <br />Paynit uchun pul olgan  va uyga qul berib yuborish uchun
                                        </p>
                                    </div>
                                )}
                                {selectedTab === 'tab3' && (
                                    <div>
                                        <p className="ModalDaily">
                                            Kunda
                                            <p className="price">200 000</p>
                                            so’m    jaramaga tushgan
                                        </p>
                                        <p className="penalty_info">
                                            <strong>Sababi</strong><br /> Tel bilan qulga tushgan

                                        </p>
                                    </div>
                                )}
                                {selectedTab === 'tab4' && (
                                    <div>
                                        <p className="ModalDaily">
                                            Kunda
                                            <p className="price">200 000</p>
                                            so’m mukofot puli berilgan
                                        </p>
                                        <p className="bonus_info">
                                            <strong>Sababi</strong><br />Kechqurini bilan nochda ishlagan
                                        </p>
                                    </div>
                                )}
                            </div>
                            <button className='CloseBtn' onClick={closeModal}>Close Modal</button>
                        </div >
                    </div >
                ) : null
                }
            </section >
            <div className="about_monthly">
                <p className="advance_day">
                    Avams olgan kunli
                    <p className="date">13.03, 24.03 29.03</p>
                </p>
                <br />
                <p className="penalty_day">
                    Jaremalarga tushgan kunlari
                    <p className="date">13.03, 24.03 29.03 </p>
                </p>
                <br />
                <p className="bonus_day">
                    Mukofot olgan kunli
                    <p className="date">13.03, 24.03 29.03</p>
                </p>
            </div>
            <div className="about_self">
                <p className="p1AboutSelf">
                    Uzi haqida malimotlar
                </p>
                <div className="p_aboutSelf">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus, nunc at scelerisque malesuada, nisl justo fringilla libero, vel scelerisque ipsum odio sit amet mauris. Integer id leo ac ex vulputate congue. Sed facilisis tortor eu lacus ultricies, ac lacinia justo interdum.
                </div>
            </div>
            <div className="about_family">
                <p className="p1AboutFamily">
                    Oylasi haqida malimotlar
                </p>
                <p className="p2AboutFamily">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus, nunc at scelerisque malesuada, nisl justo fringilla libero, vel scelerisque ipsum odio sit amet mauris. Integer id leo ac ex vulputate congue. Sed facilisis tortor eu lacus ultricies, ac lacinia justo interdum.
                </p>
            </div>
        </div >
    )
}
