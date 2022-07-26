import NavBar from "./NavBar.js";

const About = () => {
  return (
    <div>
      <NavBar />
      <h2>About Page</h2>
      <p>
        This web app allows a user to upload drawing image reference photos so
        that they can use them to create art!
      </p>
      <h2></h2>
      <p>Functions that the user should be able to do include: </p>
      <ul>
        <li>Upload art reference images</li>
        <li>Rotate images</li>
        <li>Favorite images</li>
        <li>Tag images</li>
      </ul>
    </div>
  );
};
export default About;
