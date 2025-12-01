import type { JSX } from "react";
import { AddSingleToBandForm } from "~/components/Forms/MusicBands/AddSingleToBandForm/AddSingleToBandForm";
import { DeleteOneByEstablishmentDateForm } from "~/components/Forms/MusicBands/DeleteOneByEstablishmentDateForm/DeleteOneByEstablishmentDateForm";
import { GetBandsAfterEstablishmentForm } from "~/components/Forms/MusicBands/GetBandsAfterEstablishmentForm/GetBandsAfterEstablishmentForm";
import { GetOneWithMinIdForm } from "~/components/Forms/MusicBands/GetOneWithMinIdForm/GetOneWithMinIdForm";
import { MusicBandCreateForm } from "~/components/Forms/MusicBands/MusicBandCreateForm/MusicBandCreateForm";
import styles from "./MusicBandsPage.module.scss";
import { Header } from "~/components/Header/Header";

export default function MusicBandsPage(): JSX.Element {
    return (
        <>
        <Header />
        <div className={styles.wrapper}>
            <MusicBandCreateForm />
            <div className={styles.formWrapper}>
                <DeleteOneByEstablishmentDateForm />
                <GetOneWithMinIdForm />
                <GetBandsAfterEstablishmentForm />
                <AddSingleToBandForm />
            </div>
        </div>
        </>
    );
}
