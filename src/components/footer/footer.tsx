import classNames from 'classnames';
import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return <div className={classNames(styles.root, className)}>
        <div>
            <h4>Social media</h4>
            <ul className={styles.footerUl}><li><a>Facebook</a></li><li><a>Twiter</a></li><li className={styles.link}><a>instegram</a></li></ul>
        </div>
        <div>
            <h4>Projects</h4>
            <ul className={styles.footerUl}><li><a>Project 1</a></li><li><a>Project 2</a></li><li><a>Project 3</a></li></ul>
        </div>
        <div>
            <h4>Contact me</h4>
            <ul className={styles.footerUl}><li><a>Email</a></li><li><a>Linkedin</a></li><li><a>Phone</a></li></ul>
        </div>
    </div>;
};
