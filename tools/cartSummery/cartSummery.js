const CartSummery = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  return (
    <section className="cartSummery">
      <h2 style={{ marginBottom: "30px" }}>Cart summery</h2>
      <div className="summeryItem">
        <p>original total price</p>
        <p> {originalTotalPrice} $</p>
      </div>
      <div className="summeryItem">
        <p>cart discount</p>
        <p>{originalTotalPrice - total} $</p>
      </div>

      <div className="summeryItem net">
        <p>net price </p>
        <p> {total} $</p>
      </div>
      <Link to="/signup?redirect=checkout">
        <button
          className="btn primary"
          style={{ marginTop: "20px 0", width: "100%" }}
        >
          Go to checkout
        </button>
      </Link>
    </section>
  );
};
