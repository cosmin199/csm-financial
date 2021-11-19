import "./About.css"
import john from "./images/john-doe.png"

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <img src={john} alt="john" />
        <div className="col-2">
          <h2>about</h2>
          <span className="line"></span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            similique, repellendus dolores, suscipit aut beatae minima
            voluptates autem enim, eveniet incidunt deserunt modi. Rerum ducimus
            necessitatibus porro neque dolorum. Eos similique distinctio
            sapiente beatae, odio cumque, perferendis mollitia enim veniam,
            nostrum doloremque ex. Id expedita consectetur sapiente nam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius
            nihil tempore in porro earum at. Officiis incidunt asperiores
            reprehenderit at repellendus! Eaque aliquid temporibus cum libero
            molestias consequatur. Accusantium ipsa perferendis repudiandae,
            voluptatum natus praesentium! Suscipit, debitis!
          </p>
          <button className="button">explore more</button>
        </div>
      </div>
    </div>
  )
}

export default About
