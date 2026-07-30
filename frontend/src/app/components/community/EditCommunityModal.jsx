

"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function EditCommunityModal({
  open,
  onClose,
  community,
  onSave,
}) {
  const [form, setForm] = useState({
    communityName: "",
    maxMembers: "",
    description: "",
    rules: "",
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (community) {
      setForm({
        communityName: community.communityName || "",
        maxMembers: community.maxMembers || "",
        description: community.description || "",
        rules: community.rules || "",
      });

      setImageFile(null);
    }
  }, [community]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSave) {
      onSave({
        ...form,
        imageFile,
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center  justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl border-4 bg-white text-black dark:bg-black dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800">
          <h2 className="text-lg font-semibold">
            Edit Community
          </h2>

          <button
            type="button"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-5"
        >
          {/* Community Name */}

          <div>
            <label className="text-sm font-medium">
              Community Name
            </label>

            <input
              name="communityName"
              value={form.communityName}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent p-2 outline-none dark:border-gray-700"
            />
          </div>

          {/* Community Image */}

          <div>
            <label className="text-sm font-medium">
              Community Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];

                if (file) {
                  setImageFile(file);
                }
              }}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 dark:border-gray-700"
            />

            {imageFile && (
              <p className="mt-2 text-sm text-green-600">
                Selected: {imageFile.name}
              </p>
            )}
          </div>

          {/* Maximum Members */}

          <div>
            <label className="text-sm font-medium">
              Maximum Members
            </label>

            <input
              type="number"
              name="maxMembers"
              value={form.maxMembers}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent p-2 outline-none dark:border-gray-700"
            />
          </div>

          {/* About */}

          <div>
            <label className="text-sm font-medium">
              About
            </label>

            <textarea
              rows={3}
              name="description"
              value={form.description}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent p-2 outline-none dark:border-gray-700"
            />
          </div>

          {/* Rules */}

          <div>
            <label className="text-sm font-medium">
              Rules
            </label>

            <textarea
              rows={3}
              name="rules"
              value={form.rules}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent p-2 outline-none dark:border-gray-700"
            />
          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}