import "./style.css";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center py-4 bg-gray-50 border border-b fixed top-0 w-full">
      <div>
        <div onClick={() => window.location.reload()}>
          <strong>БТ/</strong> безімянний
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
