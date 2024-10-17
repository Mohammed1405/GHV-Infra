import React from 'react';
import './WhatWeDo.css';  // Import CSS for What We Do page

function WhatWeDo() {
    return (
        <div className="what-we-do-container">
            {/* What We Do Section */}
            <section className="what-we-do">
                <h2>What We Do</h2>
                <div className="services">
                    <div className="service-item">
                        <img src="infrastructure development.jpg" alt="Infrastructure Development" className="service-image" />
                        <h3>Infrastructure Development</h3>
                        <p>
                            GHV Infra specializes in large-scale infrastructure development, including highways, bridges, and urban
                            development projects. With a focus on timely delivery and sustainability, we ensure that every project meets
                            international standards and enhances communities.
                        </p>
                    </div>

                    <div className="service-item">
                        <img src="Road and Bridge Construction.jpg" alt="Road and Bridge Construction" className="service-image" />
                        <h3>Road and Bridge Construction</h3>
                        <p>
                            Our expertise in road and bridge construction allows us to deliver complex projects with precision and quality.
                            From expressways to overpasses, we build infrastructure that connects regions and boosts economic growth.
                        </p>
                    </div>

                    <div className="service-item">
                        <img src="urban development.jfif" alt="Urban Development" className="service-image" />
                        <h3>Urban Development</h3>
                        <p>
                            We contribute to urban development by creating modern and sustainable spaces, including commercial and
                            residential complexes. Our projects focus on smart growth, energy efficiency, and enhancing the quality of
                            urban life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="who-we-are">
                <h2>Who We Are</h2>
                <p>
                    GHV Infra Projects Limited is a leading infrastructure development company with a global presence. Founded in 1980,
                    we have grown from a small local construction firm to a major player in the infrastructure sector. Our mission is to
                    deliver world-class infrastructure that enhances communities and drives economic growth. We take pride in our commitment
                    to innovation, quality, and sustainability.
                </p>
                <p>
                    Our vision is to shape the future of infrastructure development by adopting cutting-edge technologies and sustainable
                    practices that meet the growing needs of our world. We believe in building projects that not only solve today's
                    challenges but also anticipate the needs of future generations.
                </p>
                <p>
                    At GHV Infra, our core values—integrity, innovation, quality, sustainability, and teamwork—guide everything we do.
                    These principles are embedded in our approach to every project, from the planning phase to execution, ensuring that
                    we deliver high-quality infrastructure solutions with a lasting impact.
                </p>
                <div className="who-we-are-team">
                    <img src="AML-Center.avif" alt="GHV Infra Team" className="team-image" />
                    <div className="team-description">
                        <h3>Our Team</h3>
                        <p>
                            Our success is driven by our talented and diverse team of professionals, including engineers, project managers,
                            architects, and urban planners. Our team works collaboratively to design and build infrastructure that serves
                            as a foundation for economic and social development.
                        </p>
                        <p>
                            With decades of experience and a passion for excellence, we are proud to have completed over 200 major projects
                            across various sectors, including transportation, energy, and urban development. Our people are our greatest
                            asset, and their dedication to innovation and quality ensures that we remain at the forefront of the
                            infrastructure industry.
                        </p>
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

export default WhatWeDo;
