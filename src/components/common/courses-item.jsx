import PropTypes from "prop-types";

import {
  GemIcon,
  ShieldPlusIcon,
  BookOpenTextIcon,
  Clock9Icon,
} from "lucide-react";
import { Link } from "react-router-dom";

const CoursesItem = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`}>
      <div className="rounded-3xl border shadow-md w-full">
        <div>
          <img
            src={course.image}
            alt={`${course.title}`}
            className="h-[120px] rounded-t-3xl w-full object-cover object-top "
          />
        </div>
        <div className="py-2 px-3 space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-[#6148FF] text-sm font-semibold">
              {course.category}
            </p>
            <span className="font-semibold text-sm">⭐ {course.rating}</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg break-words">
              {course.title}
            </h3>
            <p className="text-base">by {course.teacher}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
              <ShieldPlusIcon className="w-4 h-4 text-green-500" />{" "}
              <p className="text-[#6148FF]">{course.level}</p>
            </div>
            <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
              <BookOpenTextIcon className="w-4 h-4 text-green-500" />{" "}
              <p>{course.modul} Modul</p>
            </div>
            <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
              <Clock9Icon className="w-4 h-4 text-green-500" />{" "}
              <p>{course.duration}</p>
            </div>
          </div>
          <button className="rounded-full px-3 py-1 bg-[#489CFF] text-sm text-white font-semibold">
            <div className="flex flex-row items-center gap-x-2">
              <GemIcon className="w-4 h-4" />{" "}
              <span>Beli Rp {course.price}</span>
            </div>
          </button>
        </div>
      </div>
    </Link>
  );
};

CoursesItem.propTypes = {
  course: PropTypes.object,
};

export default CoursesItem;
