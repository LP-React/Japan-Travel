import React from 'react'

export const AboutUs = () => {
  return (
    <div className='aboutUs_Container'>
      <div className='aboutUs_title_container'>
        <h1 className='aboutUs_title'>About Us</h1>
        <p className='aboutUs_subtitle'>Welcome to Global-Travel, your ultimate destination for exploring the world's wonders! We are dedicated to providing you with comprehensive information on tourist attractions, top destinations in each country, exciting activities, as well as invaluable insights into hotels, restaurants, and flights across various countries.</p>
      </div>
      <p className='aboutUs_text'>
        "At Global-Travel, we understand the thrill of discovery and the joy of embarking on new adventures. Whether you're drawn to the ancient ruins of Peru, the romantic charm of France, the cultural richness of Italy, the technological marvels of Japan, or the vibrant energy of Brazil, we've got you covered. Our platform serves as your gateway to unlocking the treasures of these diverse and enchanting destinations.""
      </p>
      <div className='mision_vision'>
        <div className='vision'>
          <h3 className='mision_vision_title'>Our Vision</h3>
          <p className='mision_vision_text'>At Global-Travel, we envision a world where travel inspires curiosity, fosters connections, and enriches lives. Through our curated content and personalized recommendations, we strive to ignite wanderlust and empower travelers to explore with purpose and passion.</p>
        </div>
        <div className='mision'>
          <h3 className='mision_vision_title'>Our Mision</h3>
          <p className='mision_vision_text'>Our mission is simple: to be your trusted companion on every step of your travel journey. We're committed to delivering accurate information, expert guidance, and unparalleled service to ensure your travels are seamless, memorable, and filled with moments of wonder and discovery. Let's embark on an adventure together – the world awaits!</p>
        </div>
      </div>
    </div>
  )
}
