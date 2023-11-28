import classNames from 'classnames';
import styles from './new-component.module.scss';
import { Navigation } from '../navigation/navigation';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { SideNav } from '../side-nav/side-nav';
import { MainContent } from '../main-content/main-content';

export interface NewComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */






export const NewComponent = ({ className }: NewComponentProps) => {
    return <div className={classNames(styles.root, className)}>
        <Navigation className={styles.nav} />
        <Header className={styles.header} />
        <SideNav className={styles.sidenav} />
        <div className={styles.grid}>
            <MainContent />
            <MainContent />
            <MainContent />
            <MainContent />
        </div>
        <Footer className={styles.footer} />
    </div>;
};
