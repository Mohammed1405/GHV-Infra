import React from 'react';
import './About.css';  // Import the CSS file for styling

function About() {
  return (
    <div className="about-container">

      {/* Company Overview Section */}
      <section className="company-overview">
        <div className="overview-content">
          <div className="overview-text">
            <h2>Company Overview</h2>
            <p>
              GHV Infra Projects Limited is a globally recognized infrastructure development company that specializes in delivering
              complex projects such as highways, bridges, and urban development. For over three decades, we have been at the forefront
              of the construction industry, providing high-quality, sustainable solutions that meet international standards and client
              expectations.
            </p>
            <p>
              Our expertise spans across a diverse range of sectors, including transportation, energy, and urban planning. With a team
              of skilled professionals and a commitment to innovation, we ensure that every project we undertake is executed with precision,
              safety, and environmental responsibility.
            </p>
            <p>
              At GHV Infra, we believe in creating lasting impact through our work. Our mission is to contribute to the development of
              communities by building infrastructure that enhances connectivity, boosts economic growth, and improves quality of life.
              Our projects not only meet the needs of today but are designed with the future in mind.
            </p>
          </div>
          <div className="overview-image">
            <img src="Homepage slider 1 road.jfif" alt="GHV Infra Projects" className="company-image" />
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="our-history">
        <h2>Our History</h2>
        <div className="history-content">
          <div className="history-text">
            <p>
              <strong>Founded in 1980</strong>, GHV Infra began as a small construction company with a focus on local projects.
              Over the past four decades, we have expanded our operations, expertise, and portfolio to become a leader in the
              infrastructure industry. Our growth has been fueled by our commitment to quality, innovation, and client satisfaction.
            </p>
            <p>
              By the <strong>1990s</strong>, we had completed numerous projects, gaining recognition for our work in roads, highways,
              and bridges. Our dedication to excellence earned us partnerships with government bodies and private organizations,
              paving the way for larger, more ambitious projects.
            </p>
            <p>
              The new millennium brought us into the global stage. In the early <strong>2000s</strong>, GHV Infra began handling
              multi-million dollar projects, spanning various sectors including urban development, transportation, and industrial
              infrastructure. We embraced cutting-edge technologies and sustainable practices, making us a trusted name in the
              infrastructure world.
            </p>
            <p>
              Today, we are proud to be a part of India's infrastructure revolution, having delivered over <strong>200+ major projects</strong>
              that include highways, bridges, airports, and urban infrastructures. Our story continues as we push the boundaries of
              innovation and sustainable development, driving forward with a vision of building a better tomorrow.
            </p>
          </div>

          <div className="history-image">
            <img src="Delhi-Mumbai-expresway.webp" alt="Company History" className="history-img" />
          </div>
        </div>
      </section>

      {/* New Company Values Section */}
      <section className="company-values">
        <h2>Our Company Values</h2>
        <p className="values-intro">
          At GHV Infra, our values define who we are and guide our actions. We are committed to upholding these principles in everything
          we do, ensuring that we build a legacy of excellence and integrity.
        </p>
        <ul className="values-list">
          <li>
            <strong>Integrity:</strong>
            <p>We uphold the highest standards of integrity in all our actions, ensuring transparency and honesty in our relationships
              with clients, partners, and employees.</p>
          </li>
          <li>
            <strong>Innovation:</strong>
            <p>We embrace change and strive to continuously improve. By fostering a culture of creativity and curiosity, we seek
              innovative solutions that drive progress and efficiency.</p>
          </li>
          <li>
            <strong>Quality:</strong>
            <p>We are committed to delivering the best quality in every project. Our rigorous quality assurance processes and attention
              to detail ensure that we exceed client expectations.</p>
          </li>
          <li>
            <strong>Sustainability:</strong>
            <p>We aim for environmentally responsible practices. Our commitment to sustainability ensures that we minimize our impact on
              the environment while maximizing benefits for the communities we serve.</p>
          </li>
          <li>
            <strong>Teamwork:</strong>
            <p>We believe in the power of collaboration to achieve success. By working together as a cohesive unit, we leverage diverse
              skills and perspectives to overcome challenges and reach our goals.</p>
          </li>
        </ul>
      </section>


      {/* Corporate Social Responsibility Section */}
      <section className="csr">
        <h2>Corporate Social Responsibility (CSR)</h2>
        <p className="csr-intro">
          At GHV Infra, we believe in giving back to the communities where we operate. Our CSR initiatives focus on education, healthcare,
          and environmental sustainability. We are committed to improving lives through social programs that foster sustainable development
          and growth.
        </p>

        <div className="csr-initiatives">
          <div className="csr-item">
            <img src="Education Initiative.jfif" alt="Education Initiative" className="csr-image" />
            <h3>Education Initiative</h3>
            <p>
              GHV Infra supports educational programs by building schools, providing scholarships, and offering skill development programs.
              Our goal is to empower young minds by ensuring they have access to quality education, especially in underserved areas.
            </p>
          </div>

          <div className="csr-item">
            <img src="Healthcare initiative.jpg" alt="Healthcare Initiative" className="csr-image" />
            <h3>Healthcare Initiative</h3>
            <p>
              We contribute to healthcare improvement by organizing free medical camps, providing access to clean drinking water,
              and building healthcare facilities in rural areas. Our healthcare initiatives aim to improve the well-being of local
              communities.
            </p>
          </div>

          <div className="csr-item">
            <img src="Environmental-Sustainability.png" alt="Environmental Sustainability" className="csr-image" />
            <h3>Environmental Sustainability</h3>
            <p>
              Environmental responsibility is a key part of our CSR efforts. We focus on planting trees, reducing carbon footprints,
              promoting renewable energy, and supporting waste management programs to ensure a sustainable future for the next generations.
            </p>
          </div>
        </div>
      </section>


      {/* Conclusion Section */}
      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>
          With a strong foundation built on integrity, expertise, and innovation, GHV Infra Projects Limited continues to grow as a
          leading force in infrastructure development. Our mission is to create projects that not only meet the needs of today but also
          contribute to a sustainable future.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>©2024 GHV Infra Projects Limited. All Rights Reserved | Designed & Developed By GHV group Pvt Ltd.</p>
      </footer>

    </div>
  );
}

export default About;
