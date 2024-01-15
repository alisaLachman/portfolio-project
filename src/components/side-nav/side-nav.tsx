import classNames from 'classnames';
import styles from './side-nav.module.scss';

export interface SideNavProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SideNav = ({ className }: SideNavProps) => {
    return <div className={classNames(styles.root, className)}>
        <ul className={styles.footerUl}><li>
            <a href="/" className={styles.link}>Project 1 </a></li>
            <li>
                <a href="/" className={styles.link}>Project 2</a></li>
            <li>
                <a href="/" className={styles.link}>Project 3</a></li>
            <li>
                <a href="/" className={styles.link}>Project 4</a></li>
            <li>
                <a href="/" className={styles.link}>Project 5</a></li>
            <li>
                <a href="/" className={styles.link}>Project 5</a></li>
            <li>
                <a href="/" className={styles.link}>Project 6</a></li><li>
                <a href="/" className={styles.link}>Project 7</a></li></ul>
    </div>;
};
