import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm justify-between">
      <a className="btn btn-ghost text-xl">daisyUI</a>

      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href={"/skills"}>Skills</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/signup"}>Signup</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
