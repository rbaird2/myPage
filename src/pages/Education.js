import ASU from "../assets/asu.jpg";
import "../styles/Education.css";
import { SkillList } from "../helpers/SkillList";
import SkillItem from "../helpers/SkillItem";

function Education() {
  return (
    <div className="education">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ASU})` }}>
      </div>
      <div className="rightSide">
        <h1>EDUCATION</h1>
        <h2>Bachelor of Science in Information Technology</h2>
        <h2>Summa Cum Laude honors in the Ira A. Fulton Schools of Engineering</h2>
        <h2>Skills acquired while pursuing degree:</h2>

        <div className="skillList">
          {SkillList.map((skillItem, key) => {
            return (
              <SkillItem
                key={key}
                name={skillItem.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default Education;
