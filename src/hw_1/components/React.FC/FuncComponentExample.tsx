import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const corporations: string[] = [
    "EPAM",
    "Yandex",
    "Google",
    "Facebook",
    "Twitter"
];

export const SearchBar: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState<string>("");

    const [searchResults, setSearchResults] = useState<string[]>([]);

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = corporations.filter(company =>
            company.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map(item => (
                    <li>{item}</li>
                ))}
            </ul>

            <Link to="/">
                <button>
                    go back
                </button>
            </Link>
        </>
    );
}