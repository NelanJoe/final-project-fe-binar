import PropTypes from "prop-types";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { LockIcon, PauseCircleIcon, PlayCircleIcon } from "lucide-react";

const CourseChapter = ({ chapters, status }) => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleClick = (name) => {
    if (pathname === `/my-courses/${id}`) {
      navigate(`/my-courses/${id}?watch=${name}`);
    } else {
      navigate(`/courses/${id}?watch=${name}`);
    }
  };

  const watchName = searchParams.get("watch") || "";

  return (
    <>
      {chapters?.map((chapter, number) => (
        <div key={chapter.id} className="space-y-4">
          <div className="flex items-center justify-between font-semibold">
            <h3 className="text-dark-blue">
              {chapter?.title || `Chapter ${(number += 1)}`}
            </h3>
            <p className="text-[#4297ff]">{chapter?.duration} Menit</p>
          </div>
          {chapter?.sources?.map((source, number) => (
            <div key={source?.id} className="space-y-4">
              <div className="space-y-2">
                <button
                  className={`w-full text-sm ${
                    watchName === source?.name && "p-2 bg-dark-blue rounded-md"
                  }`}
                  onClick={() => handleClick(source?.name)}
                  disabled={pathname === `/courses/${id}`}
                >
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`px-4 py-2 rounded-full ${
                          watchName === source.name ? "bg-white" : "bg-white"
                        }`}
                      >
                        <p className="font-semibold">{(number += 1)}</p>
                      </div>
                      <p
                        className={
                          watchName === source?.name
                            ? "text-white"
                            : "text-black"
                        }
                      >
                        {source?.name}
                      </p>
                    </div>
                    {status === "paid" || status !== "notPaid" ? (
                      watchName === source?.name ? (
                        <PauseCircleIcon className="text-red-500" />
                      ) : (
                        <PlayCircleIcon className="text-green-500" />
                      )
                    ) : (
                      <LockIcon />
                    )}
                  </div>
                </button>
                <hr className="bg-light-blue-100" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

CourseChapter.propTypes = {
  chapters: PropTypes.array,
  status: PropTypes.string,
};

export default CourseChapter;
