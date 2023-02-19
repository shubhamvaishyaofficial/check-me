import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            
            	<div className="conr container">
		<div className="conta contact-box">
			<div className="leftr left">
				<div className="mapouter">
					<div className="gmap_canvas">
						<iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3520829275176!2d72.82711111536743!3d19.13605955505356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b622933fffff%3A0x4e94954dd1caa87a!2siEve%20Era%20Films!5e0!3m2!1sen!2sin!4v1676777305150!5m2!1sen!2sin"></iframe>
						</div></div>
			</div>
			<div className="righte right">
				<h2 className='h2jo'>Contact Us</h2>
				<input type="text" className="field" placeholder="Your Name"/>
				<input type="text" className="field" placeholder="Your Email"/>
				<input type="text" className="field" placeholder="Phone"/>
				<textarea placeholder="Message" className="field"></textarea>
				<button className="btn">Send</button>
			</div>
		</div>
	</div>
        </div>
    )
}

export default Contact
