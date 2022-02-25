import React from "react"
import LogoFingerPrint from "../../assets/png/logo_fingerPrint.png"
import "../../scss/header.scss"
import constants from "../../constants/constants";
const {
    TITLE: {HEADER_TITLE }
} = constants
const AppHeader = () => {

    return (
    <div className = "app-header">
        <div className = "header-wrap">
            <div className="logo">
               <img src = {LogoFingerPrint} alt="logo" />
            </div>
            <div className = "company-name">
                <h2 className="company-title">{HEADER_TITLE }</h2>
            </div>
        </div>
        {/* <div className ="header-sub-wrap">
        </div> */}
        </div>
    
    )
}
export default AppHeader;