import Image from "next/image";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import aboutImg from "../../public/assets/images/about-1 1.png";
import baseImage from "../../public/assets/images/Burger-base.png";

const About = () => {
  return (
    <section className="aboutUs">
      <figure>
        <Image src={aboutImg} alt="about" width={400} height={300} />
        <Image
          className="baseImage"
          src={baseImage}
          alt="baseImage"
          width={400}
          height={300}
        />
      </figure>

      <div className="text">
        <SectionTitle title={"About Tasty Foods"} />

        <article>
          Egestas amet facilisis cras suspendisse orci volutpat. Enim ut et amet
          vitae facilisi vel odio nisl. Pellentesque malesuada massa proin
          cursus elit amet iaculis. Enim ut et amet vitae facilisi vel odio
          nisl. Pellentesque malesuada massa proin cursus elit amet iaculis.
        </article>

        <ul>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default About;
