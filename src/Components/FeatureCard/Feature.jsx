/* eslint-disable react/prop-types */
const Feature = ({ data }) => {
  const { url, tittle, para, price } = data;
  return (
    <>
      <div className="rounded position-relative fruite-item">
        <div className="fruite-img ">
          <img src={url} className="img-fluid w-100 rounded-top" alt="" />
        </div>
        <div
          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style={{ top: 10, left: 10 }}
        >
          {tittle}
        </div>
        <div className="p-4  border border-secondary border-top-0 rounded-bottom">
          <div style={{ textAlign: "center" }}>
            <h4>{tittle}</h4>
            <p>{para}</p>
          </div>
          <div>
            <p className="text-dark fs-5 fw-bold mb-0">{price}</p>
            <a
              href="#"
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to
              cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feature;
