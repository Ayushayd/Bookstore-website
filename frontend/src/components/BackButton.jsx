import {Link} from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";

const BackButton = ({destination='/'}) => {
  return(
    <>
      <Link to={destination}>
        <FaArrowAltCircleLeft />
      </Link>
    </>
)}

export default BackButton


