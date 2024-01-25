import Helmet from "../src/atomicDesign/molecules/Helmet";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import Map from "../src/atomicDesign/atoms/Map";
import ContactForm from "../src/components/ContactForm";
import SectionCrown from "../src/atomicDesign/molecules/SectionCrown";

const ContactUs = ({ data }) => {
  const { t } = useTranslation();
  const contactData = data.data.brand;

  const contactItems = [
    {
      icon: <MailOutlineIcon />,
      title: t("Forms.email.name"),
      welcomeMsg: t("Contact.welcome_message.phone"),
      data: contactData.email,
    },
    {
      icon: <LocationOnOutlinedIcon />,
      title: t("Contact.location"),
      welcomeMsg: t("Contact.welcome_message.location"),
      data: contactData.address,
    },
    {
      icon: <PhoneInTalkOutlinedIcon />,
      title: t("Forms.phone.name"),
      welcomeMsg: t("Contact.welcome_message.email"),
      data: contactData.mobile,
    },
  ];

  return (
    <>
      <Helmet pageName={t("Navbar.links.contact")} />

      <Layout>
        <LayoutTopWrapper title={t("Navbar.links.contact")} />
        <main className="contactUs" style={{ textAlign: "center" }}>
          <Container fixed className="container">
            <SectionCrown
              title={t("Contact.title")}
              description={t("Contact.description")}
            />

            <div className="contactItemsBox">
              {contactItems.map((contactItem, index) => (
                <div key={index} className="contactItem">
                  <figure>{contactItem.icon}</figure>

                  <div className="text">
                    <h6>{contactItem.title}</h6>
                    <p>{contactItem.welcomeMsg}</p>
                    <p> {contactItem.data}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contactFormSection">
              <SectionCrown
                title={t("Contact.form_section.title")}
                description={t("Contact.form_section.description")}
              />

              <div className="formSection">
                <ContactForm />

                <div className="map">
                  <Map />
                </div>
              </div>
            </div>
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default ContactUs;

export async function getServerSideProps({ locale }) {
  const res = await fetch(API_URLS.HOME, API_URLS.HEADER_GET);
  const data = await res.json();
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
