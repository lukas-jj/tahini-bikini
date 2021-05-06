import '../Styles/Members.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import barn from "../pics/barn.jpeg"
import Cae from "../pics/cae.jpeg"
import Alex from "../pics/alex.jpeg"
import Maddy from "../pics/maddy.jpeg"
import Lukas from "../pics/lukas.jpeg"
import Lilly from "../pics/lilly.jpeg"

import coconut from "../pics/coconut.png"

const members = [{name: "Alex", src: Alex},{ name: "Barney", src: barn}, {name: "Cae", src: Cae},  {name: "Lukas", src:Lukas},{name: "Maddy", src: Maddy}, {name: "Lilly", src: Lilly},]


function Members() {

    AOS.init()

    return (
        <section id="members" class="hero is-fullheight">
            <div className="container">
            <h1 data-aos="fade-left" className="title is-1 has-text-centered">Members</h1>
            <div id="icon-columns" className="columns is-multiline">
                {members.map(member => <div  data-aos="fade-left" className='column is-one-third' >
                    <div className="card">
                        <div className="card-content">
                            <div className="imageWrapper">
                                <img className="image" src={member.src} />
                            </div>                             <div className="subtitle is-5 p-3">{member.name}</div>
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
