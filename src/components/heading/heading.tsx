import styles from './heading.module.css';

export function Heading(props : {children: React.ReactNode}) {
    console.log(props);
    return(
        <div>
            <h1 className={styles.heading}>{props.children}</h1>
        </div>
    )
}