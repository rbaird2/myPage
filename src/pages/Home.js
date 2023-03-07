import BannerImage from "../assets/zen.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Raymond Lee Baird </h1>
      </div>
    </div>
  );
}

export default Home;
