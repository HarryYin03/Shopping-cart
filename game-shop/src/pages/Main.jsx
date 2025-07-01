import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../App';
import './main.css';
import SideMenu from '../components/SideMenu';
import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import MyLibrary from './MyLibrary';
import Bag from './Bag';

function Main() {
    const { library, setLibrary, bag, setBag } = useContext(AppContext);
    const [active, setActive] = useState(false);
    const [games, setGames] = useState([]);

    const homeRef = useRef();
    const categoriesRef = useRef();
    const bagRef = useRef();
    const libraryRef = useRef();

    const sections = [
        {
            name: 'home',
            ref: homeRef,
            active: true,
        },
        {
            name: 'categories',
            ref: categoriesRef,
            active: false,
        },
        {
            name: 'bag',
            ref: bagRef,
            active: false,
        },
        {
            name: 'library',
            ref: libraryRef,
            active: false,
        },
    ];

    const handleToggleActive = () => {
        setActive(!active);
    };

    const handleSectionActive = target => {
        sections.map(section => {
            // Important: Check if the ref and its 'current' property exist before accessing classList
            if (section.ref && section.ref.current) {
                section.ref.current.classList.remove('active');
                if (section.ref.current.id === target) {
                    section.ref.current.classList.add('active');
                }
            }
            return section;
        });
    };

    const fetchData = () => {
        // This is the final, correct path based on your screenshot
        fetch(`${process.env.PUBLIC_URL}/api/gamesData.json`)
            .then(response => response.json())
            .then(data => {
                setGames(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main>
            <SideMenu active={active} sectionActive={handleSectionActive} />
            <div className={`banner ${active ? 'active' : undefined}`}>
                <Header toggleActive={handleToggleActive} />
                <div className="container-fluid">
                    {games && games.length > 0 && (
                        <>
                            <Home games={games} reference={homeRef} />
                            <Categories games={games} reference={categoriesRef} />
                            <Bag bag={bag} reference={bagRef} />
                            <MyLibrary games={library} reference={libraryRef} />
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Main;