import PropTypes from "prop-types";

const CourseDescription = ({ course }) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-2xl font-semibold">Tentang Kelas</h2>
        <div className="space-y-2 text-sm text-justify">
          <article className="indent-4">{course?.description}</article>
          <article className="indent-4">
            Bersama mentor XXX, kita akan mempelajari design system dari mulai
            manfaat, alur kerja pembuatannya, tools yang digunakan, hingga pada
            akhirnya, kita akan membuat MVP dari design system. Selain itu,
            mentor juga akan menjelaskan berbagai resource yang dibutuhkan untuk
            mencari inspirasi mengenai design system.
          </article>
          <article className="indent-4">
            Kelas ini sesuai untuk Anda yang ingin memahami apa itu design
            system. Tidak hanya ditujukan untuk UI/UX Designer ataupun
            Developer, kelas ini sangat sesuai untuk stakeholder lain agar dapat
            memudahkan tim dalam bekerja sama. Yuk segera daftar dan kami tunggu
            di kelas ya!
          </article>
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-semibold">
          Kelas Ini Ditujukan Untuk
        </h2>
        <div className="px-4 space-y-2 text-sm text-justify">
          <ol className="list-decimal">
            <li>Anda yang ingin memahami poin penting design system</li>
            <li>Anda yang ingin memahami poin penting design system</li>
            <li>Anda yang ingin memahami poin penting design system</li>
            <li>Anda yang ingin memahami poin penting design system</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

CourseDescription.propTypes = {
  course: PropTypes.object,
};

export default CourseDescription;
