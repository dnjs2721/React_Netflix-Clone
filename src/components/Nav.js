import React, {useEffect, useState} from 'react'
import "./Nav.css"
import {useNavigate} from "react-router-dom";
export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShow(true)
            } else {
                setShow(false);
            }
        })

        return () => {
            window.removeEventListener("scroll", () => {})
        }
    }, []);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    }

    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img
                alt={'Netflix logo'}
                src={"img/logo.png"}
                className={"nav__logo"}
                onClick={() => window.location.href = "http://localhost:3000/"}
            />
            <input
                value={searchValue}
                onChange={handleChange}
                className={"nav__input"}
                type={"text"}
                placeholder={"영화를 검색해주세요."}
            />
            <img
                alt={'User logged'}
                src={"img/avatar.png"}
                className={"nav__avatar"}
            />
        </nav>
    );
}
