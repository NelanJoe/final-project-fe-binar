import PropTypes from "prop-types";
import {
  GemIcon,
  ShieldPlusIcon,
  BookOpenTextIcon,
  Clock9Icon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedToken } from "@/stores/auth/auth.selector";

const CoursesItem = ({ course }) => {
  const { pathname } = useLocation();

  const token = useSelector(selectedToken);

  const isBuyed = course?.status === "paid" ? true : false;

  let redirect;
  if (pathname === "/my-courses") {
    redirect = `/my-courses/${course?.id}`;
  } else if (pathname === "/courses" || pathname === "/") {
    redirect = `/courses/${course?.id}`;
  } else {
    redirect = `/my-courses/${course?.id}`;
  }

  return (
    <div
      className={`rounded-3xl shadow-md w-full h-fit border ${
        isBuyed && "border-yellow-500"
      }`}
    >
      <div>
        <img
          src={course?.image}
          alt={`${course?.title}`}
          className="h-[120px] rounded-t-3xl w-full object-cover object-top"
        />
      </div>
      <div className="px-3 py-2 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-dark-blue">
            {course?.categories}
            {course?.category}
          </p>
          <span className="text-sm font-semibold">
            ⭐ {Math.round(course?.rating) || 4.5}
          </span>
        </div>
        <div>
          <Link to={redirect}>
            <h3 className="text-lg font-semibold break-words">
              {course?.title || "Membuat web sederhana menggunakan reactjs"}
            </h3>
            <p className="text-base">by {course?.outhor || "Susan Doe"}</p>
          </Link>
        </div>
        <div className="flex items-start justify-between md:flex-row md:items-center">
          <div className="flex flex-row items-center text-sm gap-x-1 md:text-base">
            <ShieldPlusIcon className="w-4 h-4 text-green-500" />{" "}
            <p className="capitalize text-dark-blue">
              {course?.level || "Intemediate"} Level
            </p>
          </div>
          <div className="flex flex-row items-center text-sm gap-x-1 md:text-base">
            <BookOpenTextIcon className="w-4 h-4 text-green-500" />{" "}
            <p>{course?.modul || 10} Modul</p>
          </div>
          <div className="flex flex-row items-center text-sm gap-x-1 md:text-base">
            <Clock9Icon className="w-4 h-4 text-green-500" />{" "}
            <p>{course?.duration || "120 Menit"}</p>
          </div>
        </div>
        <div>
          {token !== null && course?.persentaseProgres ? (
            <>
              <div className="relative">
                <progress
                  className="w-56 h-6 progress progress-primary"
                  value={course?.progres}
                  max="10"
                ></progress>
                <div className="absolute transform translate-x-2 -top-0 text-warning">
                  {course?.persentaseProgres}
                </div>
              </div>
            </>
          ) : (
            <>
              {course?.type === "premium" ? (
                <div className="px-3 py-1 text-sm font-semibold text-white rounded-full w-fit bg-soft-blue">
                  <div className="flex flex-row items-center gap-x-2">
                    <GemIcon className="w-4 h-4" />
                    <span>Beli Rp {course?.price}.000</span>
                  </div>
                </div>
              ) : (
                <div className="px-3 py-1 text-sm font-semibold text-white rounded-full w-fit bg-soft-blue">
                  <div className="flex flex-row items-center gap-x-2">
                    <GemIcon className="w-4 h-4" />
                    <span>Gratis</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

CoursesItem.propTypes = {
  course: PropTypes.object,
};

export default CoursesItem;
