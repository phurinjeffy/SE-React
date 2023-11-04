import React, { useState } from "react";
import "./repository.css";

const Repository = () => {
  return (
    <div className="ProjectTrun" style={{width: 487, height: 561, position: 'relative'}}>
        <div className="Group3" style={{width: 473, height: 146, left: 14, top: 41, position: 'absolute'}}>
            <div className="Rectangle4" style={{width: 473, height: 146, left: 0, top: 0, position: 'absolute', background: '#DADADA', boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
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
        <div className="Group4" style={{width: 473, height: 146, left: 14, top: 228, position: 'absolute'}}>
            <div className="Rectangle5" style={{width: 473, height: 146, left: 0, top: 0, position: 'absolute', background: '#DADADA', boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
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
        <div className="Group5" style={{width: 473, height: 146, left: 14, top: 415, position: 'absolute'}}>
            <div className="Rectangle6" style={{width: 473, height: 146, left: 0, top: 0, position: 'absolute', background: '#DADADA', boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
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
        <div className="Pinned" style={{left: 44, top: 5, position: 'absolute', textAlign: 'center', color: '#DADADA', fontSize: 15, fontFamily: 'Varela Round', fontWeight: '400', wordWrap: 'break-word'}}>pinned</div>
        <div className="Frame" style={{width: 20, height: 32, paddingLeft: 1, paddingRight: 1, left: 22.63, top: 0, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div className="Vector" style={{width: 18, height: 32, background: '#C2C2C2'}}></div>
        </div>
    </div>
  )
}

export default Repository