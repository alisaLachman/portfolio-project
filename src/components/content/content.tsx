import classNames from 'classnames';
import styles from './content.module.scss';
import { MainContent } from '../main-content/main-content';

export interface ContentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Content = ({ className }: ContentProps) => {
    return <div className={classNames(styles.root, className)}>
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
    </div>;
};
