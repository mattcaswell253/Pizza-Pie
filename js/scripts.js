function Pizza(pizzaTopping, pizzaSize) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.price = function () {
  var base = 7;

  if(this.pizzaSize === "personal") {
    base = base + (this.pizzaTopping.length * 2);
  } else if (this.pizzaSize === "schmedium") {
    base += 3 + (this.pizzaTopping.length * 2);
  } else if (this.pizzaSize === "large") {
    base += 5 + (this.pizzaTopping.length * 2);
  } else if (this.pizzaSize === "family-size") {
    base += 7 + (this.pizzaTopping.length * 2);
  };
  return base;
};

$(document).ready(function() {
  $("form#set-up-order").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("select#size").val();
    var pizzaTopping = []
    $("input:checked").each(function() {
      pizzaTopping.push($(this).val());

    });

    var testPizza = new Pizza(pizzaTopping, pizzaSize);
    var finalPrice = testPizza.price();

    $("#total").html("$" + finalPrice + ".00");
  });
});
