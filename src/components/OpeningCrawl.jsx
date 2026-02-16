import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState()

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6) + 1
        fetch(`${base_url}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl))
            .catch(() => setOpeningCrawl('Error loading opening crawl'))
    }, [])

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