import CoursesItem from "./courses-item";

const CoursesList = () => {
  const coursesList = [
    {
      id: 1,
      title: "Belajar Web Designer dengan Figma",
      category: "UI/UX Design",
      teacher: "Angela Doe",
      rating: 4.7,
      level: "Intermediate Level",
      modul: "10",
      duration: "120 Menit",
      price: "249.000",
      image:
        "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Belajar Web Designer dengan Figma",
      category: "UI/UX Design",
      teacher: "Angela Doe",
      rating: 4.7,
      level: "Intermediate Level",
      modul: "10",
      duration: "120 Menit",
      price: "249.000",
      image:
        "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Belajar Web Designer dengan Figma",
      category: "UI/UX Design",
      teacher: "Angela Doe",
      rating: 4.7,
      level: "Intermediate Level",
      modul: "10",
      duration: "120 Menit",
      price: "249.000",
      image:
        "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      {coursesList.map((course) => (
        <CoursesItem key={course.id} course={course} />
      ))}
    </>
  );
};

export default CoursesList;
