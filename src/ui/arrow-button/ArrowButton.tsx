import clsx from 'clsx';
import arrow from '../../images/arrow.svg';
import styles from './ArrowButton.module.scss';

export type ArrowButtonProps = {
	isOpen?: boolean;
	onClick?: () => void;
};

export const ArrowButton = ({ isOpen, onClick }: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={onClick}
			className={clsx(styles.container, {
				[styles.container_open]: isOpen,
			})}>
			<img
				src={arrow}
				alt='иконка стрелки'
				className={clsx(styles.arrow, {
					[styles.arrow_open]: isOpen,
				})}
			/>
		</div>
	);
};
