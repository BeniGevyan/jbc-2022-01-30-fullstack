const myfavoriteIceCream = new IceCream('Vanil', 0.5, 20);

// alert(myfavoriteIceCream._weight); //Error
alert(myfavoriteIceCream.weight); // OK

//myfavoriteIceCream._weight = 100; // Error
myfavoriteIceCream.weight = -6; // Runtime Error

myfavoriteIceCream.display();
