import { Category } from "../../components/Category/Category";

import "./HomePage.scss";
export const HomePage = () => {
  const categories = [
    { id: 1, title: "Hats" },
    { id: 2, title: "Jackets" },
    { id: 3, title: "Sneakers" },
    { id: 4, title: "Womens" },
    { id: 5, title: "Mans" },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <Category key={id} title={title} />
      ))}
    </div>
  );
};
