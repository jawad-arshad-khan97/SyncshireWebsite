/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: " Website Development/Modernization",
    title: " Website Development/Modernization",
    text: "Unlock the full potential of your online presence with our website development services. From <strong>sleek landing pages to dynamic e-commerce platforms,</strong> we create websites that captivate and engage your audience. and provide modernization and customization services",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: " Custom Software Solutions",
    title: " Custom Software Solutions",
    text: "Tailored to your unique needs, our custom software solutions empower your business to thrive in the digital age.<strong> Whether it's a CRM/ERP solution or Invoicing or HR Solution or bespoke dashboards, </strong> we deliver scalable and efficient solutions that drive growth.",
  },
  {
    id: 3,
    imgSrc: Performance,
    altText: "MERN Stack Expertise",
    title: "MERN Stack Expertise",
    text: "<strong>Harness the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack with our expertise.</strong> Our skilled developers leverage this technology stack to build robust and responsive web applications that elevate your online presence.",
  },
  {
    id: 4,
    imgSrc: Subscription,
    altText: "Brand Building",
    title: "Brand Building",
    text: "Build a strong digital brand with our comprehensive brand building services. From <strong>creating engaging content to managing your social media presence, we help you connect with your audience and build lasting relationships.</strong>",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader slogan="Whats the function" title="Our Services" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={<span dangerouslySetInnerHTML={{ __html: item.text }} />}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
