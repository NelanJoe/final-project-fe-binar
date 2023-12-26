import PropTypes from "prop-types";
import { PlayCircleIcon } from "lucide-react";

const CourseChapter = ({ chapters, goals }) => {
  const contents = chapters?.map((chapter) => ({
    ...chapter,
    goals: goals?.map((goal) => goal),
  }));

  return (
    <>
      {contents?.map((content, idx) => {
        return (
          <div key={idx} className="space-y-4">
            <div className="flex justify-between items-center font-semibold">
              <h3 className="text-dark-blue">{content?.title}</h3>
              <p className="text-[#4297ff]">{content?.duration} Menit</p>
            </div>
            {content?.sources?.map((source, number) => (
              <div key={source?.id} className="space-y-4">
                <div className="space-y-2">
                  <button className="w-full text-sm">
                    <div className="flex flex-row justify-between items-center">
                      <div className="px-4 py-2 bg-light-blue-100 rounded-full">
                        <p className="font-semibold">{(number += 1)}</p>
                      </div>
                      <p>{source?.name}</p>
                      <PlayCircleIcon className="text-green-500" />
                    </div>
                  </button>
                  <hr className="bg-light-blue-100" />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

CourseChapter.propTypes = {
  chapters: PropTypes.array,
  goals: PropTypes.array,
};

export default CourseChapter;
