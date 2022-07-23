import "../styles.scss";
import test from "../images/test.png";
import Button from "./Button";
const colors = [
  "#f9f9f9",
  "#303030",
  "#cfb995",
  "#ffffff",
  "#b2b2b2",
  "#ff5b5b",
  "#57e690",
  "#ff915b",
  "#57dbe6",
  "#d0ba93",
  "#ffbe5b",
  "#8fe360",
  "#ffdf5b",
  "#5e5e5e",
];

const categories = [
  { name: "ADULT JOKES", color: "#ff5b5b" },
  { name: "DAD JOKES", color: "#57e690" },
  { name: "CRISTMAS JOKES", color: "#ff915b" },
  { name: "JOB JOKES", color: "#b2b2b2" },
  { name: "BIRTHDAY JOKES", color: "#ffdf5b" },
  { name: "SOCIAL JOKES", color: "#d0ba93" },
  { name: "PUNS", color: "#57dbe6" },
  { name: "VIEW ALL", color: "#f0ff5f" },
];
function ButtonContainer({}) {
  return (
    <div className="jokes-container">
      {categories.map((category, key) => {
        return (
          <Button color={category.color} content={category.name} key={key} />
        );
      })}
    </div>
  );
}

export default ButtonContainer;
