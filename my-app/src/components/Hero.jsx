import React from 'react'
import Img4 from '../assets/img4.png';

function Hero() {
    return (
        <>
            <div class="hero min-h-screen bg-primary-content">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Img4} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold text-neutral-focus">Get Ready to Thrive</h1>
                        <p class="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, delectus numquam cumque explicabo molestiae, possimus pariatur repellendus veritatis tempora earum hic temporibus autem! Esse nam asperiores veniam earum tenetur a?</p>
                        <button class="btn btn-neural text-primary-content">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero