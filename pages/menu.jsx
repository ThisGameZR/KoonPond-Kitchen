import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import MenuCard from "../components/MenuCard";
import { foods } from "../mockup/food";

export default function Menu() {
  return (
    <div>
      <Navbar />
      <div className="w-screen flex justify-center items-center pt-20 py-8">
        <div className="w-[60%] sm:grid sm:grid-cols-3 gap-4 flex-col">
          {foods.map((food) => (
            <MenuCard
              key={food.id}
              title={food.title}
              price={food.price}
              category={food.category}
              description={food.description}
              image={food.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
