import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link"; 


export default function Contact() {
  return(
    <div>
      <Header/>
      <ul className="Detail"> **You can contact us through our Social Media Platforms**
       <Link href="https://www.instagram.com">
       <li>*INSTAGRAM</li> </Link>
       <Link href="https://wwww.facebook.com"> <li>*FACEBOOK</li></Link>
       <Link href="https://www.linkedin.com/in/oniza-fazaldad-37505b231?utm_source=share&utm_compaign+share.via&utm_content=profile&utm_medium=android_app">
       <li>*LINKEDIN</li></Link>
      </ul>    
      <Footer/>
    </div>
  )
}