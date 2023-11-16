import PizzaItem from "./PizzaItem";

function PizzaList() {
  return (
    <div>
      <PizzaItem
        img="https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg"
        title="Mike's Homemade Pizza"
        price={10}
      />
      <PizzaItem
        img="https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"
        title="Classic Cheese Pizza"
        price={15}
      />
      <PizzaItem
        img="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
        title="Classic Pizza"
        price={25}
      />
      <PizzaItem
        img="https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg"
        title="Vegetarian Pizza"
        price={16}
      />
    </div>
  );
}

export default PizzaList;
