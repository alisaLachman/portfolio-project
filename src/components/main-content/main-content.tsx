import classNames from 'classnames';
import styles from './main-content.module.scss';
import { Button } from '../button/button';

export interface MainContentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const MainContent = ({ className }: MainContentProps) => {
    return <div className={classNames(styles.root, className)}>
        <h2 className={styles.h2}>Title heading</h2>
        <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.img} />
        <p className={styles.p}>This is a paragraph that describes what the project </p>
        <div className={styles.buttonDiv}></div>
        <Button />
    </div>;
};
