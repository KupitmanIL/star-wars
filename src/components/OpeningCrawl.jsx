import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";
import data from "bootstrap/js/src/dom/data.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState(() => sessionStorage.getItem("openingCrawl"));

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6) + 1
        fetch(`${base_url}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => {
                setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem("openingCrawl", data.opening_crawl);
            })
            .catch(() => setOpeningCrawl('Error loading opening crawl'))
    }, [openingCrawl])

    if (openingCrawl) {
        return (
            <p className="far-galaxy">{openingCrawl}</p>
        )
    } else {
        return (
            <p className="far-galaxy">
                <span className={'spinner-border spinner-border-sm'}></span>
                <span className={'spinner-grow spinner-grow-sm'}>Loading...</span>
            </p>
        )
    }
}

export default OpeningCrawl;