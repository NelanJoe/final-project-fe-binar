import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectedToken } from "@/stores/auth/auth.selector";
import {
  useGetAllCourseReviewQuery,
  usePostCourseReviewMutation,
} from "@/stores";
import toast from "react-hot-toast";

const CourseDescription = ({ course, goals }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = useSelector(selectedToken);

  const { data, isLoading, isSuccess, isError } = useGetAllCourseReviewQuery(
    Number(id)
  );

  const [postCourseReview, { isLoading: isLoadingPostCourse }] =
    usePostCourseReviewMutation();

  // Rating
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  // Review
  const [review, setReview] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newReview = {
        rating: rating?.toString(),
        password: review,
      };

      const paramsPostData = {
        myCouseId: id,
        data: newReview,
      };

      const response = await postCourseReview(paramsPostData).unwrap();

      if (response.success) {
        toast.success(response.message);
        navigate(`/my-courses/${id}`);
        window.location.reload();
      }
    } catch (error) {
      toast.error(`${error?.data?.message}`, {
        style: {
          textTransform: "capitalize",
        },
      });
    }
  };

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
        <div>
          <p></p>
        </div>
      </div>
      {token !== null ? (
        <div className="space-y-3">
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Review</h2>
            <div>{content}</div>
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Add Feedback Course</h2>
            <div className="flex flex-col gap-4 px-4 py-4 my-2 rounded-md shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <div>
                    {[...Array(5)].map((_, item) => {
                      const currentRating = item + 1;
                      return (
                        <label key={item}>
                          <input
                            type="radio"
                            name="rating"
                            className="hidden"
                            value={currentRating}
                            onChange={() => setRating(currentRating)}
                          />
                          <span
                            className="text-3xl cursor-pointer"
                            style={{
                              color:
                                currentRating <= (hover || rating)
                                  ? "#ffc107"
                                  : "#e4e5e9",
                            }}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                          >
                            &#9733;
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  <textarea
                    className="w-full textarea textarea-primary"
                    placeholder="Review tentang courses ini"
                    value={review}
                    onChange={({ target }) => setReview(target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isLoadingPostCourse}
                    className="w-full btn btn-primary"
                  >
                    {isLoadingPostCourse ? (
                      <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                      "Add Review"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
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
