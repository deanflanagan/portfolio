import React from 'react'

import './Home.css'
import Logo from '../../assets/images/sunset.jpg'
// import About from './About'

const Welcome = () => {
    return (
            <main >
                <section className='home-section'>
                        <h1 className="home-title" >Dean Flanagans Home Page</h1>
                        <p className="home-intro">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                        amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                        minima veniam, quis nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                        iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                        consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                        </p>
                        {/* <div><img src='../../assets/images/sunset.jpg' alt="logo"  />Raly</div> */}
                        <div><img src={Logo} alt="logo"  />Raly</div>
                        
              
                </section>

            </main>
    )
}

export default Welcome