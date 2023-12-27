import { useMemo } from "react";

import { useGetMyCoursesQuery } from "@/stores";

import BaseLayout from "@/layouts/base.layout";

import CoursesList from "@/components/common/courses-list";
import LoadingBar from "@/components/ui/LoadingBar";
import ProfileLayout from "../layouts/profile.layout";

const ProfilePaymentHistory = () => {
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

  const { data, isLoading, error } = useGetMyCoursesQuery(paramsMyCourses);

  if (isLoading) {
    return <LoadingBar />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const courses = data?.MyCourse;

  return (
    <BaseLayout title="Payment History">
      <ProfileLayout>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
          {courses ? (
            <CoursesList courses={courses} />
          ) : (
            <div>
              <h2>Not found payment history</h2>
            </div>
          )}
        </div>
      </ProfileLayout>
    </BaseLayout>
  );
};

export default ProfilePaymentHistory;
