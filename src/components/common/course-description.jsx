import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectedToken } from "@/stores/auth/auth.selector";
import { useGetAllCourseReviewQuery } from "@/stores";

const CourseDescription = ({ course, goals }) => {
  const { id } = useParams();
  const token = useSelector(selectedToken);

  const { data, isLoading, isSuccess, isError } = useGetAllCourseReviewQuery(
    Number(id)
  );

  let content;

  if (isLoading) {
    content = <span className="loading loading-bars loading-sm"></span>;
  }

  if (isError) {
    content = <p className="capitalize text-warning">Not found review</p>;
  }

  if (isSuccess) {
    content = (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

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
            {goals?.map((goal, idx) => (
              <li key={idx} className="capitalize">
                {goal?.name}
              </li>
            ))}
          </ol>
        </div>
      </div>
      {token !== null ? (
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Review</h2>
          <div>{content}</div>
        </div>
      ) : null}
    </div>
  );
};

CourseDescription.propTypes = {
  course: PropTypes.object,
  goals: PropTypes.array,
};

export default CourseDescription;
