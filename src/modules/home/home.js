import React from 'react';
import LABELS from '../../constants/label';
import MenuItems from '../header/menuItems';
import "../../scss/home.scss"

const {
    HOME : {
        HOMETEXT
    }
} = LABELS
const Home = () => {


    return(
        <div className='home-wrap'>
            <div className='menu'>
            <MenuItems />
            </div>
            <div className='home-content'>
            <h1 >{HOMETEXT}</h1>

            </div>
        </div>
    )
}
export default Home;