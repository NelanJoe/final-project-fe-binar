import { useState } from "react";

import {} from "@/stores";

const EditSourceModal = () => {
  let content;

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  content = (
    <form>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="source-name" className="font-semibold">
            Name
          </label>
          <input
            id="source-name"
            name="name"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            className="input input-primary"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="source-link" className="font-semibold">
            Link
          </label>
          <input
            id="source-link"
            name="link"
            type="text"
            value={link}
            onChange={({ target }) => setLink(target.value)}
            className="input input-primary"
          />
        </div>
        <div>
          <button className="w-full btn btn-primary">Simpan</button>
        </div>
      </div>
    </form>
  );

  return (
    <dialog id="edit-source" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="my-3 text-lg font-bold">Edit Source</h3>
        {content}
      </div>
    </dialog>
  );
};

export default EditSourceModal;
