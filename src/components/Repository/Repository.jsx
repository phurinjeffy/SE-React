import React, { useState } from "react";
import "./repository.css";

const Repository = () => {
  return (
    <div className="Reposit">
        <div className="Pinned">
            <div className="PinnedIcon">
                <svg width="35" height="35" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_609_1139)" filter="url(#filter0_d_609_1139)">
                        <path d="M16.9706 7.07107C18.6585 5.38324 20.9476 4.43503 23.3346 4.43503C25.7215 4.43503 28.0107 5.38324 29.6986 7.07107C31.3864 8.7589 32.3346 11.0481 32.3346 13.435C32.3346 15.822 31.3864 18.1112 29.6986 19.799C28.0107 21.4868 25.7215 22.435 23.3346 22.435C20.9476 22.435 18.6585 21.4868 16.9706 19.799C15.2828 18.1112 14.3346 15.822 14.3346 13.435C14.3346 11.0481 15.2828 8.7589 16.9706 7.07107ZM26.163 10.6066C26.5519 10.9955 27.1883 10.9955 27.5772 10.6066C27.9661 10.2177 27.9661 9.5813 27.5772 9.19239C25.2349 6.8501 21.4342 6.8501 19.092 9.19239C18.703 9.5813 18.703 10.2177 19.092 10.6066C19.4809 10.9955 20.1173 10.9955 20.5062 10.6066C22.0662 9.04655 24.603 9.04655 26.163 10.6066ZM7.07114 26.8701L14.2704 19.6708C14.646 20.2144 15.0747 20.7315 15.5564 21.2132C16.0381 21.6949 16.5552 22.1236 17.0988 22.4993L9.89957 29.6985C9.11733 30.4807 7.85338 30.4807 7.07114 29.6985C6.2889 28.9162 6.2889 27.6523 7.07114 26.8701Z" fill="#C2C2C2"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_609_1139" x="-4" y="0" width="44.7695" height="44.7695" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_609_1139"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_609_1139" result="shape"/>
                        </filter>
                        <clipPath id="clip0_609_1139">
                            <rect width="20" height="32" fill="white" transform="translate(22.6274) rotate(45)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="PinnedText">
                Pinned
            </div>
        </div>

        <div className="Project">
            <div className="ProjectFrame" style={{width: 334, height: 115, left: 22, top: 14, position: 'absolute'}}>
                <div className="Frame" style={{width: 20, height: 22.85, left: 0, top: 3, position: 'absolute', background: '#DADADA', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div className="Vector" style={{width: 20, height: 22.85, background: '#585859'}}></div>
                </div>
                <div className="Project1" style={{left: 48, top: 3, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 20, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>project 1</div>
                <div className="Group2" style={{width: 62, height: 27, left: 161, top: 0, position: 'absolute'}}>
                    <div className="Rectangle9" style={{width: 62, height: 27, left: 0, top: 0, position: 'absolute', background: '#DADADA', borderRadius: 30, border: '1px #666666 solid'}} />
                    <div className="Public" style={{left: 9, top: 4, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 15, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>public</div>
                </div>
                <div className="ShortDescriptionDmJmMmsCMCsCsd" style={{left: 48, top: 45, position: 'absolute', textAlign: 'center', color: 'rgba(102, 102, 102, 0.80)', fontSize: 15, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>short description dm;jm;mms;c;m;cs;csd</div>
                <div className="Languages" style={{left: 27, top: 97, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>languages</div>
                <div className="Ellipse6" style={{width: 20, height: 20, left: 0, top: 93, position: 'absolute', background: '#EE9120', borderRadius: 9999}} />
                <div style={{left: 114, top: 97, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>112</div>
            </div>
        </div>

        <div className="Project">
            <div className="ProjectFrame" style={{width: 334, height: 115, left: 23, top: 15, position: 'absolute'}}>
            <div className="Frame" style={{width: 20, height: 22.85, left: 0, top: 3, position: 'absolute', background: '#DADADA', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Vector" style={{width: 20, height: 22.85, background: '#585859'}}></div>
            </div>
            <div className="Project2" style={{left: 48, top: 3, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 20, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>project 2</div>
            <div className="Group2" style={{width: 62, height: 27, left: 161, top: 0, position: 'absolute'}}>
                <div className="Rectangle9" style={{width: 62, height: 27, left: 0, top: 0, position: 'absolute', background: '#DADADA', borderRadius: 30, border: '1px #666666 solid'}} />
                <div className="Public" style={{left: 9, top: 4, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 15, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>public</div>
            </div>
            <div className="ShortDescriptionDmJmMmsCMCsCsd" style={{left: 48, top: 45, position: 'absolute', textAlign: 'center', color: 'rgba(102, 102, 102, 0.80)', fontSize: 15, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>short description dm;jm;mms;c;m;cs;csd</div>
            <div className="Languages" style={{left: 27, top: 97, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>languages</div>
            <div className="Ellipse6" style={{width: 20, height: 20, left: 0, top: 93, position: 'absolute', background: '#EE9120', borderRadius: 9999}} />
            <div style={{left: 114, top: 97, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>112</div>
            </div>
        </div>

        <div className="Project">
            <div className="ProjectFrame" style={{width: 334, height: 115, left: 22, top: 15, position: 'absolute'}}>
            <div className="Frame" style={{width: 20, height: 22.85, left: 0, top: 3, position: 'absolute', background: '#DADADA', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Vector" style={{width: 20, height: 22.85, background: '#585859'}}></div>
            </div>
            <div className="Project3" style={{left: 48, top: 3, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 20, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>project 3</div>
            <div className="Group2" style={{width: 62, height: 27, left: 161, top: 0, position: 'absolute'}}>
                <div className="Rectangle9" style={{width: 62, height: 27, left: 0, top: 0, position: 'absolute', background: '#DADADA', borderRadius: 30, border: '1px #666666 solid'}} />
                <div className="Public" style={{left: 9, top: 4, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 15, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>public</div>
            </div>
            <div className="ShortDescriptionDmJmMmsCMCsCsd" style={{left: 48, top: 45, position: 'absolute', textAlign: 'center', color: 'rgba(102, 102, 102, 0.80)', fontSize: 15, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>short description dm;jm;mms;c;m;cs;csd</div>
            <div className="Languages" style={{left: 27, top: 97, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>languages</div>
            <div className="Ellipse6" style={{width: 20, height: 20, left: 0, top: 93, position: 'absolute', background: '#EE9120', borderRadius: 9999}} />
            <div style={{left: 114, top: 97, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>112</div>
            </div>
        </div>
    </div>
  )
}

export default Repository