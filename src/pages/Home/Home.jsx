import Hero from "../../components/Hero.jsx/Hero";
import FourItems from "../../components/Four_Items/Four_Items";
import Banner from "../../components/Banner/Banner";
import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";

const Home = () => {
  return (
    <div>
      <Hero />
      <FourItems title="Our Packages" />
      <Banner
        title="Choose your destination"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veritatis, officiis pariatur consequuntur architecto animi mollitia repellendus. Explicabo, earum repellat?"
        backgroundImage={
          "https://images.pexels.com/photos/2706653/pexels-photo-2706653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      >
        <Button text="See More" link="/products" />
      </Banner>
      <Grid />
      <FourItems title="Last Minute Deals" />
      <Banner
        title="We’re avaliable for 8 hours a day! Contact to require a detailed analysis and assessment of your plan."
        text="Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus."
        backgroundImage={
          "https://images.pexels.com/photos/2542332/pexels-photo-2542332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        icon={<i className="fas fa-phone-volume"></i>}
        phone="800 123-45-678"
      >
        <Button text="See More" link="/products" />
      </Banner>
      ;
    </div>
  );
};

export default Home;
