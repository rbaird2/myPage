import BannerImage from "../assets/zen3.jpg";
import "../styles/Home.css";
import {Button} from '@material-ui/core'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Raymond Lee Baird </h1>
        <Button variant="contained" color="primary" onClick={() => alert('Hello to you.')}>Hello</Button>

        
      </div>
    </div>
  );
}

export default Home;
