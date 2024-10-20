import Link from "next/link"
export default function Header() {
  return(
    <div className="web-header">
      <h1 className="heading-main"> **WRITER HUB**  By Oniza Fazal</h1>
      <ul className="header-buttons">
      <Link href="/home"> <li>Home</li></Link>
     <Link href="/contact"><li>Contact Us</li></Link>
      <Link href="/about-us"><li>About Us</li></Link>
     <Link href="/stories-counter"><li>Stories Counter</li></Link>
      </ul>
    
    </div>
    
  )
}
