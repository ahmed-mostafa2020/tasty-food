import { Alert } from "react-bootstrap";

export const getApi = async (url, header) => {
  try {
    const data = await fetch(url, header).then((res) => res.json());

    switch (data.code) {
      case 302:
      case 303:
        console.log("redirect login");
        break;
      case 308:
        console.log("redirect account verification");
        break;
      case 309:
        <Alert variant="danger" className="mt-3  text-center">
          {"please try again"}
        </Alert>;
        break;
    }
    return data;
  } catch (err) {
    <Alert variant="danger" className="mt-3  text-center">
      {"please try again" + err}
    </Alert>;
  }
};
