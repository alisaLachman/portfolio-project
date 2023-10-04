import classNames from 'classnames';
import styles from './navigation.module.scss';

export interface NavigationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navigation = ({ className }: NavigationProps) => {
    return <nav className={styles.nav}>
        <img src="https://i.ibb.co/ZNM5nH0/Frame-1050.png" alt="" className={styles.logo} />
        <a href="/home" className={styles.navLinks}>Home</a><a className={styles.navLinks} href="/projects">Projects</a><a href="/about" className={styles.navLinks}>About</a><a href="/contact" className={styles.navLinks}>Contact Us</a></nav>;
};
