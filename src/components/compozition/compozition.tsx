import classNames from 'classnames';
import styles from './compozition.module.scss';
import { Footer } from '../footer/footer';
import { SideNav } from '../side-nav/side-nav';
import { Navigation } from '../navigation/navigation';
import { Header } from '../header/header';
import { Content } from '../content/content';

export interface CompozitionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */





export const Compozition = ({ className }: CompozitionProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navigation className={styles.nav1} />
        <Header className={styles.header1} />
        <Content />
        <SideNav className={styles.SideNav1} />
        <Footer className={styles.footer1} />
    </div>;
};
