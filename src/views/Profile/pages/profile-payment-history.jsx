import BaseLayout from "@/layouts/base.layout";
import ProfileLayout from "../layouts/profile.layout";
import PaymentCourseHistory from "../components/payment-course-history";

const ProfilePaymentHistory = () => {
  return (
    <BaseLayout title="Payment History">
      <ProfileLayout>
        <PaymentCourseHistory />
      </ProfileLayout>
    </BaseLayout>
  );
};

export default ProfilePaymentHistory;
