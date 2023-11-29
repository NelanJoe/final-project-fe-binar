import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div className="group w-full md:w-[200px]">
      <Link to="/catrgory/ui-ux">
        <div className="space-y-2">
          <div className="group">
            <img
              src={category.image}
              alt={`${category.name}`}
              className="object-cover w-full h-full rounded-3xl transition-all duration-300 group-hover:rounded group-hover:scale-105 "
            />
          </div>
          <div>
            <h4 className="text-center">{category.name}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.object,
};

export default CategoryItem;