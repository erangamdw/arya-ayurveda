import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="newsletter section-p">
      <div className="container">
        <div className="workprocess-content">
          <div className="section-title">
            <h3 className="text-brown">
              Arya <span className="text-white">Ayurveda</span>
            </h3>
          </div>
          <p className="text-white">
            At Arya Ayurvedic, we are dedicated to bringing the ancient wisdom
            of Ayurveda to the heart of Asia. Our holistic approach to
            well-being combines traditional Ayurvedic treatments with modern
            expertise, offering a sanctuary for rejuvenation and healing.
            Immerse yourself in the rich tapestry of Asian wellness at Arya
            Ayurvedic, where our experienced practitioners guide you on a
            transformative journey to balance and vitality.
          </p>
          <br />
          <p className="text-white">
            Arya Ayurvedic was founded with a deep-seated passion for holistic
            health. We believe in the profound impact of Ayurveda, a holistic
            system that sees health as a delicate balance between the mind,
            body, and spirit. Our commitment is to provide a space where
            individuals can rediscover harmony and vitality in their lives.
          </p>
          <br />
          <p className="text-white">
            Our vision goes beyond the superficial. We envision a world where
            wellness is not just a destination but a journey, where individuals
            are empowered to take charge of their health in a holistic way. At
            Arya Ayurvedic, we strive to be a guiding light on your path to
            well-being.
          </p>
          <br />
          <p className="text-white">
            Central to our ethos are our dedicated practitioners, each a
            guardian of ancient wisdom. Trained in the intricate arts of
            Ayurveda, our team is passionate about sharing the transformative
            potential of these age-old practices. Together, we work to address
            the root causes of imbalance and guide you towards lasting wellness.
          </p>
          <br />
          <p className="text-white">
            Step into our haven of tranquility, where every aspect is designed
            to facilitate your journey towards balance. Our holistic wellness
            programs are tailored to your unique needs, offering a range of
            rejuvenating therapies and personalized consultations. Arya
            Ayurvedic is not just a destination for treatments; it's an
            immersive experience crafted for your well-being.
          </p>
          <br />
          <p className="text-white">
            What sets Arya Ayurvedic apart is our unwavering commitment to your
            well-being. Our center is not just a space for physical healing but
            a community that fosters connection and growth. Here, you are not a
            patient; you are an integral part of a journey towards a more
            balanced and mindful life.
          </p>
          <br />
          <p className="text-white">
            Arya Ayurvedic invites you to become a part of our community of
            wellness seekers. Discover the art of living well, where ancient
            wisdom meets modern living. We are here to support, guide, and
            empower you on your journey to holistic health and vitality. Embark
            on a transformative experience with Arya Ayurvedic, where the echoes
            of tradition harmonize with the rhythms of contemporary life. Your
            well-being is our priority, and we look forward to being a steadfast
            companion on your path to a healthier, happier you.
          </p>
          {/* <form className='newsletter-form mx-auto' onSubmit={handleSubmit}>
                    <div className='form-elem'>
                        <input type = "text" value = {formData.name} className = "form-control" placeholder='Name' onChange={handleChange} id = "name" />
                    </div>
                    <div className='form-elem'>
                        <input type = "text" value = {formData.email} className = "form-control" placeholder='Email' onChange={handleChange} id = "email" />
                    </div>
                    <button type = "submit" className='bg-brown text-white submit-btn fw-3 fs-22'>Submit</button>
                </form> */}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
