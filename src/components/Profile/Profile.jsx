import React, { useState } from "react";
import "./profile.css"

const Profile = () => {
  return (
    <div className="ProfileSection" style={{width: '100%', height: '100%', position: 'relative'}}>
    <div className="Rectangle3" style={{width: 616, height: 707, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.50)', borderRadius: 20}} />
    <div className="Frame" style={{width: 37.50, height: 30, left: 168, top: 574, position: 'absolute'}}>
        <div className="Vector" style={{width: 34.45, height: 26.25, left: 1.52, top: 1.87, position: 'absolute', background: 'black'}}></div>
    </div>
    <div className="Github" style={{left: 229, top: 535, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>github</div>
    <div className="Discord" style={{left: 229, top: 580, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>discord</div>
    <div className="Follower" style={{left: 229, top: 488, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>1 follower</div>
    <div className="Following" style={{left: 355, top: 488, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>3 following</div>
    <div className="Frame" style={{width: 30, height: 30, left: 172, top: 484, position: 'absolute'}}>
        <div className="Vector" style={{width: 30, height: 30, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
    </div>
    <div className="Email" style={{left: 172, top: 443, position: 'absolute', textAlign: 'center', color: 'rgba(102, 102, 102, 0.80)', fontSize: 25, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>65011251@kmitl.ac.th</div>
    <img className="UserSProfilePic" style={{width: 250, height: 250, left: 183, top: 62, position: 'absolute', borderRadius: 9999, border: '5px white solid'}} src="https://via.placeholder.com/250x250" />
    <div className="Ellipse5" style={{width: 5, height: 5, left: 321, top: 494, position: 'absolute', background: 'black', borderRadius: 9999}} />
    <div className="Frame" style={{width: 30, height: 30, left: 172, top: 529, position: 'absolute'}}>
        <div className="Vector" style={{width: 30, height: 28.34, left: 0, top: 0.47, position: 'absolute', background: 'black'}}></div>
    </div>
    <div className="Name" style={{left: 118, top: 336, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>Amputchat<br/>Pramoj Na Ayudhya</div>
</div>
  )
}

export default Profile