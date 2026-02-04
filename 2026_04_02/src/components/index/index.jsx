import { content } from "../entry/entry.jsx";
import {Link} from "react-router-dom";
import styles from "./index.module.scss";
import {useEffect} from "react";

export default function Main(){

    useEffect(() => {

    }, []);

    return (
        <main className={styles.Index}>
            <h1>Strona główna</h1>
            <br/>
            <h2>Najnowszy wpis:</h2>
            <article>
                <Link to = "/nwpis">
                    <h4>{content[0]}</h4>
                    <p>{content[2]}</p>
                </Link>
            </article>
        </main>
    )
}