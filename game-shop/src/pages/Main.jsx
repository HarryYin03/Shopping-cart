import React,{useState, useEffect, useRef, useContext} from 'react'
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

    const sections=[
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

    const handleSectionActive = target =>{
        sections.map(section => {
            section.ref.current.classList.remove('active');
            if(section.ref.current.id===target){
                section.ref.current.classList.add('active');
            }
            return section;
        })
    }

    const fetchData = () =>{
        fetch('http://localhost:3000/api/gamesData.json')
        .then(response=> response.json())
        .then(data =>{
            setGames(data);
        })
        .catch(error=>{
            console.error('Error fetching data:', error);
        })
    }

    useEffect(() =>{
        fetchData();
    }, [])

  return (
    <main>
        <SideMenu active={active} sectionActive={handleSectionActive}/>
        <div className={`banner ${active ? 'active' : undefined}`}>
          <Header toggleActive = {handleToggleActive}/>
            <div className="container-fluid">
                {games && games.length > 0 && (
                
                <>
                    <Home games={games} reference={homeRef} />
                    <Categories games={games} reference={categoriesRef} />
                    <Bag bag={bag} reference={bagRef} />
                    <MyLibrary games={library} reference={libraryRef} />
                </>
                )}
                {/* Render sections based on the fetched games */}
                

            </div>
        </div>
        
    </main>
  );
}

export default Main
