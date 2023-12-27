import BaseLayout from "@/layouts/base.layout";

import ProfileLayout from "../layouts/profile.layout";
import ProfileUpdateForm from "../components/profile-update-form";

const Profile = () => {
  return (
    <BaseLayout title="Profile">
      <ProfileLayout>
        <ProfileUpdateForm />
      </ProfileLayout>
    </BaseLayout>
  );
};

export default Profile;
