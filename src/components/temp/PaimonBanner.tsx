import { Typography } from "@material-ui/core";
import myImg from "./assets/GoodHunter (11).png";
import myImg2 from "./assets/Paimon.png";

const PaimonBanner: React.FC = () => {
  return <section>
    <div style={{
      position: "relative",
      padding: "7rem 0 15rem 0",
      marginBottom: "-8rem",
    }}>
      <div style={{
        position: "absolute",
        zIndex: -20,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: `url('${myImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0))",
        WebkitMaskImage: "-webkit-linear-gradient(top, rgba(0,0,0,1) 65%, rgba(0,0,0,0))",
        // maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0))",
      }}></div>
      <div style={{
        position: "absolute",
        zIndex: -10,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignSelf: "start",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <img src={myImg2} style={{ width: "auto", height: "100%" }} />
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 6rem 0 25%"
      }}>
        <Typography variant="h1" style={{
          fontFamily: "Genshin",
          fontSize: "4rem",
          color: "white",
          marginBottom: "1rem",
          textShadow: "0 0 50px black",
        }}>
          Good Hunter
        </Typography>
        <div style={{
          fontSize: "2rem",
          color: "#495366",
          backgroundColor: "#ebe1d4",
          padding: "1.5rem 4rem",
          boxShadow: "0 0 50px black",
        }}>
          We are the Good Hunt and we do good hunting to make that good food. We also make fisherman toast that Paimons likes
        </div>
      </div>
    </div>
  </section>
}

export default PaimonBanner;