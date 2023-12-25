import PropTypes from "prop-types";
import { LockIcon, PlayCircleIcon } from "lucide-react";

const CourseChapter = ({ chapters, status }) => {
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
                <button className="w-full text-sm">
                  <div className="flex flex-row items-center justify-between">
                    <div className="px-4 py-2 rounded-full bg-light-blue-100">
                      <p className="font-semibold">{(number += 1)}</p>
                    </div>
                    <p>{source?.name}</p>
                    {status !== "paid" ? (
                      <PlayCircleIcon className="text-green-500" />
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
