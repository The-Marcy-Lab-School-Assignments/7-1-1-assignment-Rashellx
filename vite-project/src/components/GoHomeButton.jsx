import { Link } from "react-router-dom";

// TODO: 
// - Make the button navigate the user back to the home page

const GoHomeButton = () => {  //Links is used when you want to a different page in your site
  // the a tag should only be used when you wanna go to another website
  // useNavigate and links do the same thing just different, useNavigate us a function
  return (
    <Link to="/">
      <button className="ui button fluid">
        Go Home
      </button>
    </Link>
  )
}

export default GoHomeButton;