// src/components/Layout.js
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {children}
      </div>
      <footer className="footer">
        <p>&copy; 2024 Anthony Stubbs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

