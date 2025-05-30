import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "Error!";
  let message = "Bir hata oluştu, lütfen tekrar deneyiniz.";

  if (error.status === 404) {
    (title = "Not Found Error"), (message = "Aradığınız kaynak bulunamadı!");
  }
  if (error.status === 500) {
    message = error.data;
  }

  return (
    <div id="error">
      <h1>{title}</h1>
      <p>{message}</p>
      <Link to="/">Home Page</Link>
    </div>
  );
}
