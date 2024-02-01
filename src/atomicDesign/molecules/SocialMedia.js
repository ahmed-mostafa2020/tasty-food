import { FetchingAllEndPointsData } from "@/src/context/FetchingDataContext";
import Link from "next/link";
// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialMedia = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.brand;

  return (
    <div className="socialMedia">
      {data.facebook && (
        <Link className="facebook" href={`${data.facebook}`} target="_blank">
          <FacebookIcon />
        </Link>
      )}

      {data.instagram && (
        <Link className="instagram" href={`${data.instagram}`} target="_blank">
          <InstagramIcon />
        </Link>
      )}

      {data.twitter && (
        <Link className="twitter" href={`${data.twitter}`} target="_blank">
          <XIcon />
        </Link>
      )}

      {data.youtube && (
        <Link className="youtube" href={`${data.youtube}`} target="_blank">
          <YouTubeIcon />
        </Link>
      )}

      {data.linkedin && (
        <Link className="linkedin" href={`${data.linkedin}`} target="_blank">
          <LinkedInIcon />
        </Link>
      )}
    </div>
  );
};

export default SocialMedia;
