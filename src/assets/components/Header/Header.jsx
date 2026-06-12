import headerStyles from './Header.module.css';
const Header = () => {
  return (
    <header>  
        <h1 className={headerStyles.title} style={{ paddingBottom: '40px' }}>Il mio blog</h1>
    </header>
    )}

export default Header