import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation, redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectedToken } from "@/stores/auth/auth.selector";
import {
  useGetAllCourseReviewQuery,
  useGetProfileQuery,
  usePostCourseReviewMutation,
} from "@/stores";
import toast from "react-hot-toast";

const CourseDescription = ({ course, goals }) => {
  const { id } = useParams();
  const token = useSelector(selectedToken);
  const { pathname } = useLocation();

  const {
    data: dataCourseReview,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllCourseReviewQuery(Number(id));

  const { data: dataProfile } = useGetProfileQuery();

  // Rating
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  // Review
  const [review, setReview] = useState("");

  const [postCourseReview, { isLoading: isLoadingPostCourse }] =
    usePostCourseReviewMutation();

  let content;

  if (isLoading) {
    content = <span className="loading loading-bars loading-sm"></span>;
  }

  if (isError) {
    content = <p className="capitalize text-warning">Not found review</p>;
  }

  if (isSuccess) {
    content = (
      <div className="flex flex-col gap-3">
        {dataCourseReview?.review?.map((review) => (
          <div key={review?.id} className="p-4 space-y-3 rounded-md shadow-md">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={`${review?.users?.profiles?.image}`}
                    alt={`${review?.users?.profiles?.name}`}
                  />
                </div>
              </div>
              <p>{review?.users?.profiles?.name}</p>
            </div>
            <p className="text-sm text-justify">{review?.comment}</p>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row">
                {[...Array(review?.rating)].map((_, index) => (
                  <p key={index}>⭐ </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newReview = {
        userId: dataProfile?.user?.id,
        rating: rating?.toString(),
        coment: review,
      };

      const paramsPostData = {
        myCourseId: id,
        data: newReview,
      };

      const response = await postCourseReview(paramsPostData).unwrap();

      if (response?.success === "success") {
        toast.success(response.message);

        throw redirect(`/my-courses/${id}`);
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
      <div className="space-y-3">
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Review</h2>
          <div>{content}</div>
        </div>
        {token !== null && pathname !== `/courses/${id}` ? (
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
        ) : null}
      </div>
    </div>
  );
};

CourseDescription.propTypes = {
  course: PropTypes.object,
  goals: PropTypes.array,
};

export default CourseDescription;
