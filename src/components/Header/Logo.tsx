
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="font-bold text-2xl text-[#e60012]">
        <span className="text-black">SK</span>hynix
      </div>
    </Link>
  );
};

export default Logo;
