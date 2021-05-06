// import '../Styles/AboutMe.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import { Link } from 'react-scroll'

function AboutUs() {

    AOS.init()

    return (
        <section id="about-us" class="hero is-fullheight">
            <div class="hero-body" data-aos="fade-right">
                <div class="container">

                    <h1  className="title is-1 has-text-centered animate__backInDown">About Us</h1>
                    <div className="columns">
                        <div className="column is-narrow" >
                            <div className="card"  >
                                <div className="card-content is-flex is-justify-content-center is-align-items-center"   >
                                    <div className="card-image" >
                                        {/* <img className="image" id="about-me-image" src={} /> */}

                                        <div className="subtitle is-3 has-text-centered">Who are you?</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="card">
                            <div className="card-content">
                    
<p id="about-me-p" class="content is-large p-3">
We are five humans in Wellington who like to play music and have fun.                                    </p>
                            
                            </div>
                        </div>
                    </div>
                    </div>


 <div className="columns">
                        <div className="column is-narrow" >
                            <div className="card"  >
                                <div className="card-content is-flex is-justify-content-center is-align-items-center"   >
                                    <div className="card-image" >
                                        {/* <img className="image" id="about-me-image" src={} /> */}

                                        <div className="subtitle is-3 has-text-centered">When's your next gig?</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="card">
                            <div className="card-content">
                 
<p id="about-me-p" class="content is-large p-3">
We are playing at Vogelmorn in May - date TBA.                                  </p>
                            
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default AboutUs;
