import "./Project.css";
import ImagePlaceholder from "../Assets/image-placeholder.jpg";

export default function ProjectCard() {
  const src = "";
  return (
    <div className="card">
      <div className="title">Project Title</div>
      <img className="card-image" src={src == "" && ImagePlaceholder} alt="" />
      <button className="detail">Details</button>
    </div>
  );
}
