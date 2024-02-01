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
import ContactForm from "../src/components/ContactForm";
import SectionCrown from "../src/atomicDesign/molecules/SectionCrown";
import Link from "next/link";

const ContactUs = ({ data }) => {
  const { t } = useTranslation();

  const allData = data.data;
  const brand = allData.brand;

  const contactItems = [
    {
      icon: <MailOutlineIcon />,
      title: t("Forms.email.name"),
      welcomeMsg: t("Contact.welcome_message.email"),
      data: brand.email,
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      icon: <LocationOnOutlinedIcon />,
      title: t("Contact.location"),
      welcomeMsg: t("Contact.welcome_message.location"),
      data: brand.address,
      link: "https://maps.app.goo.gl/46rkvVuK86h9VE948",
    },
    {
      icon: <PhoneInTalkOutlinedIcon />,
      title: t("Forms.phone.name"),
      welcomeMsg: t("Contact.welcome_message.phone"),
      data: brand.mobile,
      link: "https://chat.whatsapp.com/Hokw6zJMbIF9Z43SUYOZo6",
    },
  ];

  return (
    <>
      <Helmet brand={brand} pageName={t("Navbar.links.contact")} />

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
                    <Link href={`${contactItem.link}`} target="_blank">
                      {contactItem.data}
                    </Link>
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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1640982212775!2d31.325229424936992!3d30.08948631643615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fd7e0f501ff%3A0x6b1b8b2fb9cd225!2s929%20Specialty%20Coffee!5e0!3m2!1sar!2seg!4v1706061688676!5m2!1sar!2seg"
                    width="450"
                    height="450"
                    style={{ border: "none" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
  const res = await fetch(
    API_URLS.HOME + "?lang=" + locale,
    API_URLS.HEADER_GET
  );
  const data = await res.json();
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
