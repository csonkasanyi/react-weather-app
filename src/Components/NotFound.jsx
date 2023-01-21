import Image from '../images/not_found.jpg'
import '../styles/NotFound.css'

const NotFound = () => {
    return (
        <article>
            <h2>Location, you looked for is not found!</h2>
            <img src={Image} alt="Location not found" />
        </article>
    )
}

export default NotFound