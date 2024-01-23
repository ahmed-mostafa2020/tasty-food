import { Alert } from "@mui/material";

export const getApi = async (url, postedData, lang) => {
  if (postedData.method == "GET") {
    url = url + `?lang=${lang}`;
  } else {
    postedData.body.lang = lang;
  }

  try {
    const data = await fetch(url, postedData, { cache: "no-store" }).then(
      (res) => res.json()
    );

    switch (data.code) {
      case 302:
      case 303:
        console.log("redirect login");
        break;
      case 308:
        console.log("redirect account verification");
        break;
      case 309:
        <Alert severity="error">please try again</Alert>;
        break;
    }
    return data;
  } catch (err) {
    <Alert severity="error">{"please try again" + err}</Alert>;
  }
};
