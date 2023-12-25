import PropTypes from "prop-types";

const CourseDescription = ({ course, goals }) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-2xl font-semibold">Tentang Kelas</h2>
        <div className="space-y-2 text-sm text-justify">
          <article className="indent-4">{course?.description}</article>
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-semibold">
          Kelas Ini Ditujukan Untuk
        </h2>
        <div className="px-4 space-y-2 text-sm text-justify">
          <ol className="list-decimal">
            {goals?.map((goal) => (
              <li key={goal.id} className="capitalize">
                {goal?.name}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

CourseDescription.propTypes = {
  course: PropTypes.object,
  goals: PropTypes.array,
};

export default CourseDescription;
