import '../Styles/Members.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import barn from "../pics/barn.jpg"
import Cae from "../pics/cae.jpeg"
import Alex from "../pics/alex.jpeg"
import Maddy from "../pics/maddy.jpeg"

const members = [{ name: "Barney", src: barn}, {name: "Cae", src: Cae}, {name: "Alex", src: Alex}, {name: "Maddy", src: Maddy}]


function Members() {

    AOS.init()

    return (
        <section id="members" class="hero is-fullheight">
            <div className="container">
            <h1 data-aos="fade-left" className="title is-1 has-text-centered">Members</h1>
            <div id="icon-columns" className="columns is-multiline">
                {members.map(member => <div  data-aos="fade-left" className='column is-half'>
                    <div className="card">
                        <div className="card-content">
                            <div className="imageWrapper">
                                <img className="image" src={member.src} />
                            </div>                             <div className="subtitle is-5">{member.name}</div>
                        </div>
                    </div>
                </div>)
                }
            </div>
            </div>
        </section>
    )
}

export default Members;
