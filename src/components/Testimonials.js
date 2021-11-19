import "./Testimonials.css"
import user1 from "./images/user1.jpeg"
import user2 from "./images/user2.jpeg"
import user3 from "./images/user3.jpeg"

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>testimonials</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user1" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium perspiciatis perferendis vel voluptas, esse ratione
              dicta aut repudiandae?
            </p>
            <p>
              <span>johnson.M.I</span>
            </p>
            <p>Director of Financial Times</p>
          </div>
          <div className="card">
            <img src={user2} alt="user2" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              eveniet aperiam nesciunt esse in! Itaque, ratione.
            </p>
            <p>
              <span>Carol Harper</span>
            </p>
            <p>Director at Risktec Solutions</p>
          </div>
          <div className="card">
            <img src={user3} alt="user3" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              dolores ea repellat impedit quam est, eius aspernatur maiores
              autem neque qui?
            </p>
            <p>
              <span>Snow J.R.</span>
            </p>
            <p>manager Director of BPW Global</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
