const ProfileUpdatePasswordForm = () => {
  return (
    <form>
      <div className="space-y-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Masukkan Password Lama</label>
          <input type="text" className="w-full rounded-xl" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Masukkan Password Baru</label>
          <input type="text" className="w-full rounded-xl" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Ulangi Password Baru</label>
          <input type="text" className="w-full rounded-xl" />
        </div>
        <div>
          <button className="w-full btn btn-primary rounded-xl">
            Ubah Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileUpdatePasswordForm;
