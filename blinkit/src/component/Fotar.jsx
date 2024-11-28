import React from 'react'

export default function Fotar() {
    const useLinks = [
        "About",
        "Careers",
        "Blog",
        "Press",
        "Lead",
        "Value",
        "Privacy",
        "Terms",
        "FAQs",
        "Security",
        "Mobile",
        "Contact",
        "Partner",
        "Franchise",
        "Seller",
        "Warehouse",
        "Deliver",
        "Resources",
      ];
      const column1Links = useLinks.slice(0, 6);
      const column2Links = useLinks.slice(6, 12);
      const column3Links = useLinks.slice(12);
      



      const categories = [
        "Vegetables & Fruits",
        "Cold Drinks & Juices",
        "Bakery & Biscuits",
        "Dry Fruits, Masala & Oil",
        "Paan Corner",
        "Cleaning Essentials",
        "Personal Care",
        "Electronics & Electricals",
        "Navratri Specials",
        "Dairy & Breakfast",
        "Instant & Frozen Food",
        "Sweet Tooth",
        "Sauces & Spreads",
        "Baby Care",
        "Home & Office",
        "Pet Care",
        "Toys & Games",
        "Munchies",
        "Tea, Coffee & Health Drinks",
        "Atta, Rice & Dal",
        "Organic & Premium",
        "Pharma & Wellness",
        "Ice Creams & Frozen Desserts",
        "Beauty & Cosmetics",
        "Print Store",
      ];
      const column1categories = categories.slice(0, 8);
      const column2categories = categories.slice(8, 16);
      const column3categories = categories.slice(16, 24);

  return (
    <div>
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          {/* Useful Links Section */}
          <div className="footer-links">
            <h5 className="footer-heading">Useful Links</h5>
            <div className="footer-grid">
              <ul>
                {column1Links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
              <ul>
                {column2Links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
              <ul>
                {column3Links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Categories Section */}
          <div className="footer-categories">
            <h5 className="footer-heading">
              Categories <span className="footer-see-all">see all</span>
            </h5>
            <div className="footer-grid">
              <ul>
                {column1categories.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
              <ul>
                {column2categories.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
              <ul>
                {column3categories.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Download App and Social Media */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; Blink Commerce Private Limited, 2016-2024</p>
          </div>
          <div className="footer-app">
            <h5>Download App</h5>
            <a href="#">
              <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="Google Play" />
            </a>
            <a href="#">
              <img src="https://blinkit.com/d61019073b700ca49d22.png" alt="App Store" />
            </a>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="footer-disclaimer">
          <p>
            “Blinkit” is owned & managed by `Blink Commerce Private Limited` and
            is not related, linked, or interconnected in any manner to “GROFFR.COM”,
            operated by “Redstone Consultancy Services Private Limited”.
          </p>
        </div>
      </div>
    </footer>

    </div>
  )
}
