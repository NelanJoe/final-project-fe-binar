import { useMemo } from "react";

import { useGetMyCoursesQuery } from "@/stores";

import CoursesList from "@/components/common/courses-list";
import LoadingBar from "@/components/ui/LoadingBar";
import { Link } from "react-router-dom";

const PaymentCourseHistory = () => {
  const paramsMyCourses = useMemo(() => {
    return {
      keyword: "",
      categori: "",
      filter: "",
      level: "",
      progress: "",
      page: "",
    };
  }, []);

  const { data, isLoading, isSuccess, isError, error } =
    useGetMyCoursesQuery(paramsMyCourses);

  let content;

  if (isLoading) {
    return <LoadingBar />;
  }

  if (isError) {
    return (
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
        <div className="space-y-2">
          <p className="text-xl italic font-semibold text-center capitalize text-warning">
            {error?.data?.message}
          </p>
          <p>Buy course before seen payment history</p>
          <div className="text-center">
            <Link to="/courses">
              <button className="rounded-full btn btn-primary">
                Go to courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    const courses = data?.MyCourse;

    content = (
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
        {courses ? (
          <CoursesList courses={courses} />
        ) : (
          <div>
            <h2>Not found payment history</h2>
          </div>
        )}
      </div>
    );
  }

  return content;
};

export default PaymentCourseHistory;
