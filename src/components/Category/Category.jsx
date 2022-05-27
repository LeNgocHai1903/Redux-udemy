import "./Category.scss";

export const Category = ({ title }) => {
  return (
    <div className="category-container">
      {/* <img/> */}
      <div className="category-image" />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
