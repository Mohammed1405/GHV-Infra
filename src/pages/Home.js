import React, { useState } from 'react';
import './Home.css';  // Importing CSS for styling

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images for the slideshow
  const images = [
    'Road and Transport wide image.webp',
    'Airport Infrastructure Wide Image.png',
    'Railways Infrastructure wide image.jpg'
  ];

  // Function to handle image navigation
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="home-container">


       {/* Image Carousel Section */}
       <div className="carousel-container">
        <img
          src={images[currentImageIndex]}
          alt="Infrastructure"
          className="carousel-image"
        />

        {/* Left and Right Arrow Navigation */}
        <button className="carousel-arrow left-arrow" onClick={prevImage}>
          &#9664;
        </button>
        <button className="carousel-arrow right-arrow" onClick={nextImage}>
          &#9654;
        </button>
      </div>

      {/* Vision and Mission Section */}
      <section className="vision-mission-section">
        <h2>Vision and Mission</h2>
        <div className="vision-mission-container">
          {/* Vision Section */}
          <div className="vision-mission-item">
            <h3>Vision</h3>
            <img src="vision.webp" alt="Vision" className="vision-mission-img" />
            <p>
              GHV Infra Projects Limited, an integrated EPC company, strives for excellence in the design, construction, and maintenance
              of sustainable infrastructure solutions, with a focus on delivering high-quality, innovative, dependable, and resilient
              infrastructure projects that exceed customers' expectations and increase stakeholders' value.
            </p>
          </div>

          {/* Mission Section */}
          <div className="vision-mission-item">
            <h3>Mission</h3>
            <img src="Mission.jpeg" alt="Mission" className="vision-mission-img" />
            <p>
              GHV Infra Projects' strategic goal is to grow the business by focusing on high-yield infrastructure projects that require
              strong execution capabilities and technical expertise, with an annual revenue target of ₹ 7,000 Cr. over the next five years.
            </p>
          </div>
        </div>
      </section>


      {/* Directors Section */}
      <section className="directors-section">
        <h2>Our Directors</h2>
        <div className="directors">
          {/* Director 1 */}
          <div className="director-item">
            <img src="jahidSir.jpg" alt="Mr Jahid Vijapura" className="director-img" />
            <p><strong>Mr Jahid Vijapura - Managing Director </strong></p>
            <p className="director-bio">
              Mr. Jahid Vijapura is a commerce graduate with 30+ years of experience in business development, corporate strategy,
              and project implementation. Mr. jahid played an instrumental role in growth and diversification of the GHV Group.
              Under his leadership, the group expanded into new territories across India. <strong>He will be acting as non-executive
                Chairman on the board of GHV Infra Projects. </strong>
            </p>
          </div>

          {/* Director 2 */}
          <div className="director-item">
            <img src="Unknown_person.jpg" alt="Mr Ajay Hans" className="director-img" />
            <p><strong>Mr Ajay Hans - CEO </strong></p>
            <p className="director-bio">
              Mr. Ajay Hans completed his post graduation in Management of Business Finance (MBF) and MBA with specialization in Marketing.
              He has 30+ years of experience in executing large BOT / HAM / EPC infrastructure projects in various infrastructural segments.
              He received "Udyog Rattan Award" on June 29, 2011, for his contribution towards the industrial development of the country.
              <strong>Mr. Hans will lead the business of GHV Infra Projects in the capacity of a CEO, with prime focus on highway and
                toll infrastructure projects and industrial infrastructure projects. </strong>
            </p>
          </div>

          {/* Director 3 */}
          <div className="director-item">
            <img src="Unknown_person.jpg" alt="Mr Samrathdan Zula" className="director-img" />
            <p><strong>Mr Samrathdan Zula - Director of Operations </strong></p>
            <p className="director-bio">
              Mr. Samrathdan Zula is a Diploma holder in Civil with 30+ years of experience in the construction business.
              Under his leadership, companies have achieved various millstones with continued focus on innovation and relentless
              pursuit of growth and excellence. <strong>He will act an independent director on the Board of GHV Infra Projects and mentor
                the business of roads and highways projects. </strong>
            </p>
          </div>

          {/* Director 4 */}
          <div className="director-item">
            <img src="Unknown_person.jpg" alt="Mr Reby Thomas" className="director-img" />

            <p><strong>Mr Reby Thomas - Chief Financial Officer </strong></p>
            <p className="director-bio">
              Mr. Reby Thomas is a qualified Post-Graduate in Business Administration with specialization in Finance and Marketing.
              He has a diversified experience of 28+ years. He was responsible for looking after the P&L of a pan-India multi-vertical
              EPC business operations for 21 years. His experience includes setting up and leading complete operations of the
              infrastructure business enterprise. <strong>He will lead the energy environment & sustainability infrastructure projects in
                GHV Infra Projects. </strong>
            </p>
          </div>

          {/* Director 5 */}
          <div className="director-item">
            <img src="Unknown_person.jpg" alt="Mr Rajendra Kumar Talkar" className="director-img" />
            <p><strong>Mr Rajendra Kumar Talkar - Director of Human Resources </strong></p>
            <p className="director-bio">
              Mr. Rajendra Kumar Talkar is an B.E. Civil from University of Mumbai. He has 38+ years of experience with specialization
              in infrastructural projects. He has widespread experience in tendering and execution work in MCGM.
              He has driven numerous projects through meticulous planning, resources organization and robust management in all
              infrastructure projects. <strong>He will drive the urban transportation and environment & sustainability infrastructure projects
                in GHV Infra Projects. </strong>
            </p>
          </div>

          {/* Director 6 */}
          <div className="director-item">
            <img src="Unknown_person.jpg" alt="Mr Shivrudrappa hanjage" className="director-img" />
            <p><strong>Mr Shivrudrappa hanjage - Director of Business Development </strong></p>
            <p className="director-bio">
              Mr. Shivrudrappa Hanjage is a qualified Engineering Graduate with 15+ years of work experience in reputed Indian conglomerates.
              He has worked in EPC and Design Build and Concessions projects in various sectors, such as national highway, railway,
              irrigation, industrial, and environment and urban infrastructure. In his earlier roles, he was responsible for handling
              projects of a pan-India multi-vertical EPC business operations for 10+ years. <strong>He shall drive the railways and road
                transportation infrastructure projects in GHV Infra Projects. </strong>
            </p>
          </div>
        </div>
      </section>


      {/* Our Products Section */}
      <section className="products-section">
        <h2>Our Products</h2>

        <div className="products-container">
          {/* Product 1 - Highways and Road Infrastructure */}
          <div className="product-item">
            <h3>Highways and Road Infrastructure</h3>
            <img src="Highways and Road Infrastructure.jfif" alt="Highways and Road Infrastructure" className="product-img" />
            <p>Our expertise in highways and road infrastructure ensures the delivery of durable, safe, and efficient roadways.</p>
          </div>

          {/* Product 2 - Airport Infrastructure */}
          <div className="product-item">
            <h3>Airport Infrastructure</h3>
            <img src="Airport Infrastructure.jfif" alt="Airport Infrastructure" className="product-img" />
            <p>We specialize in the construction of world-class airport infrastructure, ensuring the development of runways and terminals.</p>
          </div>

          {/* Product 3 - Railways Infrastructure */}
          <div className="product-item">
            <h3>Railways Infrastructure</h3>
            <img src="Railways Infrastructure.webp" alt="Railways Infrastructure" className="product-img" />
            <p>We provide innovative solutions for railways infrastructure, ensuring safe and reliable railway systems.</p>
          </div>

          {/* Product 4 - Dams and Irrigation */}
          <div className="product-item">
            <h3>Dams and Irrigation</h3>
            <img src="Dams and Irrigation.jpg" alt="Dams and Irrigation" className="product-img" />
            <p>Our expertise in dam construction and irrigation infrastructure helps ensure efficient water management for agriculture.</p>
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section className="core-values-section">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-item">
            <i className="fas fa-balance-scale"></i> {/* Font Awesome Icon */}
            <h3>Integrity and Transparency</h3>
            <p>We believe in doing business with honesty, clarity, and fairness.</p>
          </div>
          <div className="value-item">
            <i className="fas fa-lightbulb"></i> {/* Font Awesome Icon */}
            <h3>Innovation and Excellence</h3>
            <p>We constantly strive for creativity and excellence in all our projects.</p>
          </div>
          <div className="value-item">
            <i className="fas fa-user-check"></i> {/* Font Awesome Icon */}
            <h3>Customer-Centric Approach</h3>
            <p>Our clients needs and satisfaction are at the heart of everything we do.</p>
          </div>
          <div className="value-item">
            <i className="fas fa-leaf"></i> {/* Font Awesome Icon */}
            <h3>Sustainability and Safety</h3>
            <p>We prioritize eco-friendly practices and ensure safety in all operations.</p>
          </div>
          <div className="value-item">
            <i className="fas fa-users"></i> {/* Font Awesome Icon */}
            <h3>Collaboration and Teamwork</h3>
            <p>Our success is driven by the collective effort and shared vision of our team.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>©2024 GHV Infra Projects Limited. All Rights Reserved | Designed & Developed By GHV group Pvt Ltd.</p>
      </footer>
    </div>
  );
}

export default Home;
