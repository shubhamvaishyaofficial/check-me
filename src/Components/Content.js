import React, { useState } from 'react'
import './Content.css'

const Content = () => {

    const [state, setState] = useState([{ id: 1 }, { id: 2 }, { id: 3 }])

    const [blog, setBlog] = useState([{ id: 1 }, { id: 2 }, { id: 3 }])

    return (
        <div>
            {state.map((e) => (

                <>
                    <div className="cartu card">
                        <img className='imaged' src='https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg ' />
                        <div className="text">
                            <h1 className='h1jkd'>Lorem ipsum.</h1>
                            <h2 className="h2jkd animate-text">More lorem ipsum bacon ipsum.</h2>
                            <p className="parah animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                            <div className="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </>
            ))}

            <h4 className='h4are'>BLOG CARDS</h4>
            {blog.map((e) => (
                <>

                    <div className="cyugh cards">
                        <div className="cyug card">
                            <div className="head">
                                <img className="img" src="https://t4.ftcdn.net/jpg/04/55/60/27/240_F_455602774_6Khx8ErGHMorYXaJWDSz6QfhjzcCSgfR.jpg" alt="image" />
                                <div className="content">
                                    <h5>18 November 2019</h5>
                                    <h3>TRENDING TECHNOLOGY</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
                                        Alias dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus </p>
                                    <a href="#" className="button">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            ))}

        </div >
    )
}

export default Content
