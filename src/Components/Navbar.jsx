import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, dispatch } = useTheme();

  const handleThemeChange = () => {
    dispatch({ type: 'TOGGLE_THEME' }); // Cambia el tema desde el Context
  };

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: '100%', 
        padding: '0 1rem', 
        boxSizing: 'border-box',
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <button onClick={() => navigate(-1)}>🔙</button>
      <Link to="/"><h3>Home</h3></Link>
      <Link to="/Contact"><h3>Contact</h3></Link>
      <Link to="/favs"><h3>Favs</h3></Link>

      {/* Botón para cambiar de tema */}
      <button onClick={handleThemeChange}>
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;