import Image from '../images/not_found.jpg'
import '../styles/NotFound.css'

const NotFound = () => {
    return (
        <article>
            <img src={Image} alt="Location not found" />
            <h2 className='title'>Location, you looked for is not found!</h2>
        </article>
    )
}

export default NotFound