import { FaShoppingBag, FaSearch, FaPlay, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { HiMenuAlt3 } from "react-icons/hi"

const products = [
  {
    name: "Aglaonema plant",
    price: "300",
    image: "/aglaonema.png"
  },
  {
    name: "Plantain Lilies",
    price: "380",
    image: "/plantain.png"
  },
  {
    name: "Cactus",
    price: "259",
    image: "/cactus.png"
  },
  {
    name: "Swiss cheese Plant",
    price: "400",
    image: "/monstera.png"
  },
  {
    name: "Sansevieria plant",
    price: "450",
    image: "/deskPlant.png"
  },
  {
    name: "Agave plant",
    price: "359",
    image: "/aloe.png"
  }
]

function App() {

  return (
    <div className="main">

      <nav className="nav">

        <div className="logo" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
          <img src="/title.png" length="10px" height="30px" alt="title.png" />
          <span>FloraVision.</span>
        </div>

        <ul>
          <li>Home</li>
          <li className="dropdown">
            Plants Type <span className="nav-dropdown">▾</span>
          </li>
          <li>More</li>
          <li>Contact</li>
        </ul>

        <div className="icons">
          <button className="search-btn" aria-label="Search">
            <FaSearch />
          </button>
          <FaShoppingBag />
          <HiMenuAlt3 />
        </div>

      </nav>

      <section className="hero">

        <div className="left">

          <h1>Earth’s Exhale</h1>

          <p>
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>

          <div className="btns">
            <button className="buy">Buy Now</button>
            <button className="demo"><FaPlay /> Live Demo</button>
           
          </div>

        </div>

        <div className="right card">

          <img src="/aglaonema.png" alt="" />

          <span>Indoor Plant</span>

          <h2>Aglaonema plant</h2>

          <button>Buy Now</button>

        </div>

        <div className="hero-review card">
          <div className="review-head">
            <div className="review-avatar"><img src="/review-1.png" alt="Reviewer" length="10px" height="52px" /></div>
            <div>
              <h3>Ronnie Hamill</h3>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </div>
          <p>
            I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
          </p>
        </div>

      </section>

      <div className="title1">
        Our Trendy plants
      </div>

      <section className="trending">

        <div className="trendBox card">

          <img src="/plantain.png" alt="" />

          <div>

            <h2>For Your Desks Decorations</h2>

            <p>
              Beautiful desk decoration plant for your workspace.
            </p>

            <h3>Rs. 599/-</h3>

            <button>Explore</button>

          </div>

        </div>

        <div className="trendBox reverse card">

          <div>

            <h2>For Your Desks Decorations</h2>

            <p>
              Greenery adds a touch of nature and serenity.
            </p>

            <h3>Rs. 399/-</h3>

            <button>Explore</button>

          </div>

          <img src="/succulent.png" alt="" />

        </div>

      </section>

      <div className="title">
        Our Top Selling Plants
      </div>

      <section className="grid">

        {
          products.map((item, index) => {

            return (

              <div className="product card" key={index}>

                <img src={item.image} alt="" />

                <h3>{item.name}</h3>

                <p>
                  Indoor decorative plant with stylish appearance.
                </p>

                <span>Rs. {item.price}/-</span>

                <button>Explore</button>

              </div>

            )

          })
        }

      </section>

      <div className="title">
        Customer Review
      </div>

      <section className="reviews">

        <div className="review card">
          
          
         
          <div className="review-avatar"><img src="/review-2.png" alt="Reviewer" length="10px" height="52px" /></div>
            <div>
              <h3>Shelly Ruiz</h3>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            
          <p>
            Just got my hands on some absolutely awesome plants.
          </p>
        </div>
        </div>

        <div className="review card">
          <div className="review-avatar"><img src="/review-3.jpg" alt="Reviewer" length="10px" height="52px" /></div>
          <div>
              <h3>Lula Rolfson</h3>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>  
          
          <p>
            Every plant looks fresh and premium.
          </p>
        </div>

        <div className="review card">
        
          <div className="review-avatar"><img src="/review-4.png" alt="Reviewer" length="10px" height="52px" /></div>
          <div>
            
              <h3>Carol Huels</h3>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>  
          <p>
            Best indoor collection I have purchased.
          </p>
        </div>

      </section>

      <div className="title">
        Our Best o2
      </div>

      <section className="oxygen card">

        <img src="/aglaonema.png" alt="" />

        <div>

          <h2>
            We Have Small And Best O2 Plants Collection’s
          </h2>

          <p>
            Oxygen-producing plants improve atmosphere through photosynthesis.
          </p>

          <button>Explore</button>

        </div>

      </section>

      <footer className="footer">

        <div>

          <div className="footLogo">
             <img src="/title.png" length="10px" height="30px" alt="title.png" />
          <span>FloraVision.</span>
          </div>

          <p>
            From lush indoor greens to vibrant outdoor blooms.
          </p>

        </div>

        <div>

          <h3>Quick Link's</h3>

          <ul>
            <li>Home</li>
            <li>Type of plant's</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>

        </div>

        <div>

          <h3>For Every Update.</h3>

          <div className="sub">

            <input type="text" placeholder="Enter Email" />

            <button>SUBSCRIBE</button>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default App
