import Link from "next/link"

const ServicePage =() => {
    return(
        <div>
            <h1>This is ServicePage </h1> 

            <ul>
                <li><Link href="/service/graphicdesign">This is our GraphicDesign Page</Link></li>
                <li><Link href="/service/web">This is our Web Page</Link></li>
            </ul>
        </div>
    )
}
export default ServicePage