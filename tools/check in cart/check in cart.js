function checkIncart(cart, product) {
  return cart.find(() => cart.id === product.id);
}

{
  checkIncart(cart, product) ? "incart" : "add to cart";
}
