import styles from './LoadingWidget.module.scss';

const LoadingWidget = () => {
    return (
        <div className={styles.loading}>
            <div/>
            <div className={styles.element}/>
            <div/>
        </div>
    )
}

export default LoadingWidget;