import React, {useRef} from 'react'
import "./MovieMoal.css"
import useOnclickOutside from "../../hooks/useOnclickOutside";

const MovieModal = ({
                        backdrop_path,
                        title,
                        overview,
                        name,
                        release_date,
                        first_air_date,
                        vote_average,
                        setModalOpen}) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const ref = useRef();
    useOnclickOutside(ref, () => {setModalOpen(false)})

    return (
        <div className={"presentation"} role={"presentation"}>
            <div className={"wrapper-modal"}>
                <div className={"modal"} ref={ref}>
                    <span
                        onClick={() => setModalOpen(false)}
                        className={"modal-close"}
                    > X
                    </span>
                    <img
                        alt={"modal__poster-img"}
                        className={"modal__poster-img"}
                        src={`${BASE_URL}${backdrop_path}`}
                    />

                    <div className={"modal__content"}>
                        <p className={"modal__details"}>
                            <span className={"modal__user-perc"}>100% For you</span>{" "}
                            {release_date ? release_date : first_air_date}
                        </p>
                        <h2 className={"modal__title"}>{title ? title : name}</h2>
                        <p className={"modal__overview"}>평점: {vote_average}</p>
                        <p className={"modal__overview"}>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieModal
