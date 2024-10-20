import Link from "next/link";

export default function Footer() {
  return(
    <div className="footer">
      <h1 className="main-heading" > **You can feel free here to share your thoughts and read your favorite 
      stories** </h1> 
    <ul className="footer-buttons">
     <Link href="https://www.instagram.com"> <li>Instagram</li></Link>
      <Link href="https://www.facebook.com"><li>Facebook</li></Link>
      <Link href="https://wwww.twitter.com"><li>Twitter</li></Link>
     <Link href="https://www.youtube.com"><li>Youtube</li></Link>
     <Link href="https://www.linkedin.com"><li>Linkedin</li></Link>
    </ul>
    </div>
  )
}
