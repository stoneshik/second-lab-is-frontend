import { type JSX } from "react";

import { CsvUploadForm } from "~/components/Forms/CsvUploadForm/CsvUploadForm";
import { Header } from "~/components/Header/Header";
import styles from "./InsertionPage.module.scss";

export default function InsertionPage(): JSX.Element {
    return (
        <>
        <Header />
        <div className={styles.wrapper}>
            <CsvUploadForm />
        </div>
        </>
    );
}
