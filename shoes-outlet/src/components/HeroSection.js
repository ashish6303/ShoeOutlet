const HeroSection = () => {
    return (
        <div className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className = "hero-btn">
                <button>Shop Now</button>
                <button className = "secondary-btn">Category</button>
            </div>

            <div className="Shopping">
                <p>Also Avilable On</p>
                <div className="brand-icons" >
                    <img src="/images/amazon.png" alt="Amazon Logo" />
                    <img src="/images/flipkart.png" alt="flipkart Logo" />
                </div>
            </div>

        </div>

        <div className="hero-image">
        <img src="/images/shoe_image.png" alt="Hero Logo" />
        </div>
        
        </div>
    );
}

export default HeroSection;