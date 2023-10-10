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
                        <img src="https://avatars.mds.yandex.net/i?id=8f037456a1a56bf115a68de1fa655982fed635ca-10879141-images-thumbs&n=13" alt="Default Image of User" />
                    </div>
                    <div className="InfoProfile">
                        <p className="p1Account">John Doe</p>
                        <p className="p2Account">Age: <strong>26</strong></p>
                        <p className="p3Account">Gender: <strong>Male</strong></p>
                        <a href="tel:+998998887766" className="PhoneNumberAccount">
                            <svg width={30} style={{ marginBottom: "-10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="call">
                                <path d="M19.41,13c-.22,0-.45-.07-.67-.12a9.86,9.86,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.46a13.17,13.17,0,0,1-2.67-2,13.17,13.17,0,0,1-2-2.67l.46-.21a2,2,0,0,0,1-2.48,10.47,10.47,0,0,1-.39-1.32c-.05-.22-.09-.45-.12-.67a3,3,0,0,0-3-2.49H5a3,3,0,0,0-2.24,1,3,3,0,0,0-.73,2.4,19.07,19.07,0,0,0,5.41,11,19.07,19.07,0,0,0,11,5.41,2.56,2.56,0,0,0,.39,0,3,3,0,0,0,2-.76,3,3,0,0,0,1-2.24v-3A3,3,0,0,0,19.41,13Zm.49,6a1,1,0,0,1-.33.74,1,1,0,0,1-.82.25,17.16,17.16,0,0,1-9.87-4.84A17.16,17.16,0,0,1,4,5.25a1,1,0,0,1,.25-.82A1,1,0,0,1,5,4.10h3a1,1,0,0,1,1,.78c0,.27,.09,.55,.15.82a11,11,0,0,0,.46,1.54l-1.4.66a1,1,0,0,0-.52.56,1,1,0,0,0,0,.76,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.56-.52l.63-1.4a12.41,12.41,0,0,0,1.58.46c,.26,.06,.54,.11,.81,.15a1,1,0,0,1,.78,1ZM14,2c-.23,0-.47,0-.70,0a1,1,0,0,0,.17,2L14,4a6,6,0,0,1,6,6c0,.18,0,.35,0,.53a1,1,0,0,0,.91,1.08h.08a1,1,0,0,0,1-.91c0-.23,0-.47,0-.70A8,8,0,0,0,14,2Zm2,8a1,1,0,0,0,2,0,4,4,0,0,0-4-4,1,1,0,0,0,0,2A2,2,0,0,1,16,10Z"></path>
                            </svg>
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
