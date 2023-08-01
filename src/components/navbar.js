import Link from "next/link"

export default function Navbar() {
  return (
    <div>
        <ul className="nav">
            <li id="one">
                <Link href="/">Home</Link>
            </li>
            <li id="two">
                <Link href="./about">About</Link>
            </li>
            <li id="three">
                <Link href="./contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}
