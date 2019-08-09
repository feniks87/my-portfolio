import React from 'react';
import LogoComponent from '../../LogoComponent/LogoComponent';
import NavItems from '../NavItems/NavItems';
import styles from './BurgerMenu.module.css';
import Backdrop from '../../BackDrop/BackDrop';
import Aux from '../../../hoc/Auxiliary/_Aux';

const BurgerMenu = (props) => {
    let attachedStyles = [styles.BurgerMenu, styles.Close];
    if (props.open) {
        attachedStyles = [styles.BurgerMenu, styles.Open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedStyles.join(' ')} onClick={props.closed}>
                <LogoComponent />
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>

    )
}

export default BurgerMenu;