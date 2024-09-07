const EpisodeForm = ({
  judul,
  link,
  status,
  setJudul,
  setLink,
  setStatus,
  isEdit=false,
}) => {
  return (
    <div class="grid gap-4 mb-4 grid-cols-2">
      <div class="col-span-2">
        <label for="judul" class="block mb-2 text-sm font-medium text-gray-900">
          Judul
        </label>
        <input
          type="text"
          name="judul"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          id="judul"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Judul Episode"
          required
        />
      </div>
      <div class="col-span-2">
        <label for="link" class="block mb-2 text-sm font-medium text-gray-900">
          Link
        </label>
        <input
          type="text"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          id="link"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="Link Episode"
          required
        />
      </div>
      {isEdit ? (
        <div class="col-span-2">
          <label
            for="status"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Status
          </label>
          <select
            id="status"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="">Pilih Status</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      ) : (
        <div class="col-span-2">
          <label
            for="status"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Status
          </label>
          <select
            id="status"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Pilih Status</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default EpisodeForm;
