const BASE = "https://market.amrbdr.com/api/";

export const API_URLS = {
  BASE,
  // REGISTER: BASE + "user/register",
  // LOGIN: BASE + "user/login",
  HOME: BASE + "home",
  CONTACT_US: BASE + "contactus",

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
      Authorization: "Bearer cc1a39ecdca4bcfcad8336eb5484e134",
    },
    body: {
      lang: "",
    },
    redirect: "follow",
  },
};
