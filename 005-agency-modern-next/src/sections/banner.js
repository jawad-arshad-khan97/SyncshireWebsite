/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import BannerImg from "assets/banner-thumb.png";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/SyncshireLogo.png";
import BannerBG from "assets/bannerBg.png";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Welcome to SyncShire
          </Heading>
          <Text as="p" variant="heroSecondary">
            At Syncshire, we're committed to empowering businesses with
            innovative solutions and shaping a better tomorrow. As a premier
            software solutions company, we go beyond just providing services; we
            create transformative digital experiences tailored to your unique
            needs.
          </Text>
          <Text
            as="p"
            variant="muted"
            sx={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            A Software Solutions and Services Company
          </Text>
          <Button variant="whiteButton">Explore</Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image
            src={ShapeRight}
            alt="banner"
            sx={{ width: "100px", height: "auto" }}
          />
          {/* <Text sx={styles.banner.syncShireText}>SyncShire</Text> */}
          {/* <Text
            sx={{
              ...styles.banner.taglineText,
              fontFamily: "Georgia",
              fontStyle: "italic",
              fontSize: "18px",
            }}
          >
            Syncing Innovation, Engineering Solutions and Shaping Tomorrow
          </Text> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    backgroundColor: "primary",
    container: {
      display: "flex",
    },
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    // "&::before": {
    //   position: "absolute",
    //   content: '""',
    //   bottom: 6,
    //   left: 0,
    //   height: "100%",
    //   width: "100%",
    //   zIndex: -1,
    //   backgroundImage: `url(${ShapeLeft})`,
    //   backgroundRepeat: `no-repeat`,
    //   backgroundPosition: "bottom left",
    //   backgroundSize: "36%",
    // },
    // "&::after": {
    //   position: "absolute",
    //   content: '""',
    //   bottom: "120px",
    //   right: "200px",
    //   height: "50%",
    //   width: "50%",
    //   zIndex: -1,
    //   backgroundImage: `url(${ShapeRight})`,
    //   backgroundRepeat: `no-repeat`,
    //   backgroundPosition: "bottom right",
    //   backgroundSize: "contain",
    // },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: ["auto", "auto", -20],
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      ml: [0, null, 10], // Adjust margin-left for spacing
      img: {
        width: "250px", // Set width to 80% and height to auto
        height: "auto",
      },
    },
    syncShireText: {
      position: "absolute",

      textAlign: "center",
      fontSize: "30px", // Adjust font size as needed
      textAlign: "center",
      fontWeight: "bold",
      color: "text",
      mt: "250px", // Adjust margin-top for spacing
    },
    taglineText: {
      position: "absolute",
      textAlign: "center",
      fontSize: "15px",
      fontWeight: "normal",
      color: "text",
      mt: "260px",
    },
    illustration: {
      transform: ["scale(1.20)", null, null, "none"],
      alignItems: "center",
      display: "flex",
      marginTop: [2, null, null, -4, -5],
    },
    // imageBox: {
    //   justifyContent: "center",
    //   textAlign: "center",
    //   display: "inline-flex",
    //   mb: [0, null, -6, null, null, "-40px", null, -3],
    //   img: {
    //     position: "relative",
    //     height: [245, "auto"],
    //   },
    // },
  },
};
