import PropTypes from "prop-types";
import {
  GemIcon,
  ShieldPlusIcon,
  BookOpenTextIcon,
  Clock9Icon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectedToken } from "@/stores/auth/auth.selector";

const CoursesItem = ({ course }) => {
  const token = useSelector(selectedToken);

  const isBuyed = course?.status === "paid" ? true : false;

  const statusBuyedLoggin = token !== null ? isBuyed : null;

  return (
    <div
      className={`rounded-3xl shadow-md w-full h-fit border ${
        statusBuyedLoggin && "border-yellow-500"
      }`}
    >
      <div>
        <img
          src={course?.image}
          alt={`${course?.title}`}
          className="h-[120px] rounded-t-3xl w-full object-cover object-top"
        />
      </div>
      <div className="py-2 px-3 space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-dark-blue text-sm font-semibold">
            {course?.categories}
            {course?.category}
          </p>
          <span className="font-semibold text-sm">
            ⭐ {course?.rating || 4.5}
          </span>
        </div>
        <div>
          <Link to={`/courses/${course?.id}`}>
            <h3 className="font-semibold text-lg break-words">
              {course?.title || "Membuat web sederhana menggunakan reactjs"}
            </h3>
            <p className="text-base">by {course?.outhor || "Susan Doe"}</p>
          </Link>
        </div>
        <div className="flex items-start md:flex-row justify-between md:items-center">
          <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
            <ShieldPlusIcon className="w-4 h-4 text-green-500" />{" "}
            <p className="text-dark-blue capitalize">
              {course?.level || "Intemediate"} Level
            </p>
          </div>
          <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
            <BookOpenTextIcon className="w-4 h-4 text-green-500" />{" "}
            <p>{course?.modul || 10} Modul</p>
          </div>
          <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
            <Clock9Icon className="w-4 h-4 text-green-500" />{" "}
            <p>{course?.duration || "120 Menit"}</p>
          </div>
        </div>
        <div>
          {course?.type === "premium" ? (
            <div className="w-fit rounded-full px-3 py-1 bg-soft-blue text-sm text-white font-semibold">
              <div className="flex flex-row items-center gap-x-2">
                <GemIcon className="w-4 h-4" />
                <span>Beli Rp {course?.price}.000</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

CoursesItem.propTypes = {
  course: PropTypes.object,
};

export default CoursesItem;
