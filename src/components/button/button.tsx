import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Button = ({ className }: ButtonProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.button}>
            <span className={styles.tooltiptext}>text</span>
            <button>Button</button></div></div>;
};
