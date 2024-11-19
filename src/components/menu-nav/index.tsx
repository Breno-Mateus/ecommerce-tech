import { Link } from "react-router-dom"

const MenuNav = () => {
    return (
        <div className="bg-colorPrimary text-colorSecondary flex items-center justify-center gap-16 p-4">
            <Link to="/notebooks">Notebooks</Link>
            <Link to="/perifericos-game">Periféricos de games</Link>
            <Link to="/smartphones-tablets">Celulares e Tablets</Link>
            <Link to="/smart-home">Smart Home</Link>
            <Link to="/equipamento-audio">Equipamentos de áudio</Link>
        </div>
    )
}

export default MenuNav