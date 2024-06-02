import { useState } from "react";
import "../components/Product.css";
import { useData } from "../contexts/DataContext";

const Product = () => {
  const { data, setData } = useData();
  const [number, setNumber] = useState(1);
  const [totalp, setTotalp] = useState(549);

  const remove = () => {
    setData((prevData) => prevData.filter((item) => item.id !== 1));
  };

  const quantitypriceTotali = () => {
    let n = 1;
    setNumber((n += number + n - 1));
    let total = 0;
    setTotalp((total += totalp + data.price));
  };
  const quantitypriceTotald = () => {
    if (number > 1) {
      let n = 1;
      setNumber((n += number - n - 1));
      let total = 0;
      setTotalp((total += totalp - data.price));
    }
  };
  return (
    <div className="container">
      <div className="col">
        <div className="card">
          <div className="row g-0 m-3">
            <div className="image col-md-4">
              <img src={data.thumbnail} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text">
                  <p className="text-body-secondary">Price: ${data.price}</p>
                </p>
                <form className="d-flex">
                  <label className="lab me-2">Quantity:</label>
                  <div
                    onClick={quantitypriceTotald}
                    id="numbers"
                    className="btn text-dark bg-white btn-outline-secondary"
                  >
                    -
                  </div>
                  <div className="qnumber mx-2">{number}</div>
                  <div
                    onClick={quantitypriceTotali}
                    id="numbers"
                    className="btn text-dark bg-white btn-outline-secondary"
                  >
                    +
                  </div>
                </form>
                <button className="btn btn-danger my-3" onClick={remove}>
                  Remove
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="tq d-flex mx-5 my-2">
            <small className="text-secondary">
              <b>SUBTOTAL :</b>
            </small>
            <small className="subtotal text-secondary">
              <b>${totalp}</b>
            </small>
          </div>
          <div className="tq d-flex mx-5 my-2">
            <small className="text-secondary">
              <b>SHIPPING :</b>
            </small>
            <small className="subtotal text-secondary">
              <b>50</b>
            </small>
          </div>
          <hr />
          <div className="tq d-flex mx-5 my-2">
            <small className="text-secondary">
              <b>TOTAL :</b>
            </small>
            <small className="subtotal text-secondary">
              <b>${totalp + 50}</b>
            </small>
          </div>
          <div className="red d-flex mx-5 my-2">
            <p className="text-danger m-3">Get Daily cash With Nespola Card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
