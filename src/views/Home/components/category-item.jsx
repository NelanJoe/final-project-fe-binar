import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const type = searchParams.get("type") || "";
  const filter = searchParams.get("filter") || "";
  const level = searchParams.get("level") || "";

  return (
    <div className="group w-full md:w-[200px]">
      <Link
        to={`/courses?title=${title}&type=${type}&filter=${filter}&category=${category?.name}&level=${level}`}
      >
        <div className="space-y-2">
          <div className="group">
            <img
              src={category.image}
              alt={`${category.name}`}
              className="object-cover w-full h-full transition-all duration-300 rounded-3xl group-hover:rounded group-hover:scale-105 "
            />
          </div>
          <div>
            <h4 className="text-center capitalize">{category.name}</h4>
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
