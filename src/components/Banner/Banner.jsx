import "./Banner.css";

const Banner = ({ title, text, icon, backgroundImage, phone, children }) => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner-overlay">
        <div className="banner-content">
          <h2 className="banner-title">{title}</h2>
          <p className="banner-text">{text}</p>
          {(icon || phone) && (
            <div className="banner-contact">
              {icon && <span className="banner-icon">{icon}</span>}
              {phone && <span className="banner-phone">{phone}</span>}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
};

export default Banner;
