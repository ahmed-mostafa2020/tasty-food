const BASE = "https://market.amrbdr.com/public/api/";

export const API_URLS = {
  BASE,
  // REGISTER: BASE + "user/register",
  // LOGIN: BASE + "user/login",
  HOME: BASE + "home",
  CONTACT_US: BASE + "contact-us",

  HEADER_GET: {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer cc1a39ecdca4bcfcad8336eb5484e134",
    },

    redirect: "follow",
  },

  HEADER_POST: {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: {
      lang: "",
    },
    redirect: "follow",
  },
};
