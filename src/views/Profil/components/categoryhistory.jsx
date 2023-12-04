import CoursesList from "@/components/common/courses-list";

const CategoryHistory = () => {
  return (
    <section className="max-w-7xl md:mx-auto self-stretch py-1 shrink-0 gap-4 items-center mt-2  mx-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex-col md:flex-row justify-between items-center gap-4">
          <CoursesList />
        </div>
      </div>
    </section>
  );
};

export default CategoryHistory;
