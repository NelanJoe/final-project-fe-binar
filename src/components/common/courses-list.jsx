import PropTypes from "prop-types";

import CoursesItem from "./courses-item";

const CoursesList = ({ courses }) => {
  return (
    <>
      {courses?.map((course) => (
        <CoursesItem key={course.id} course={course} />
      ))}
    </>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.array,
};

export default CoursesList;
