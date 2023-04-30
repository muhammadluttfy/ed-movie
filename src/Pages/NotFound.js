import Navigationbar from "../Components/NavigationBar";

const NotFound = () => {
  return (
    <div className="container">
      <Navigationbar />
      <div className="row d-flex justify-content-center my-5">
        <div className="col-12 col-md-6">
          <p className="text-center">404 - Page not found</p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
