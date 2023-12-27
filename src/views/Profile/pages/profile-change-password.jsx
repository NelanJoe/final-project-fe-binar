import BaseLayout from "@/layouts/base.layout";

import ProfileLayout from "../layouts/profile.layout";
import ProfileUpdatePasswordForm from "../components/profile-update-password-form";

const ProfileChangePassword = () => {
  return (
    <BaseLayout title="Profile Change Password">
      <ProfileLayout>
        <ProfileUpdatePasswordForm />
      </ProfileLayout>
    </BaseLayout>
  );
};

export default ProfileChangePassword;
