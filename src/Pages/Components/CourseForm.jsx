const CourseForm = ({
  judul, harga, mentor,description,
  setImageUpload,setJudul,setHarga,setMentor,setDescription,
}) => {
  const clearForm = () => {
    setJudul("");
    setHarga("");
    setMentor("");
    setDescription("");
    setImageUpload(null);
  };

  return (
    <>
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label
            htmlFor="judul"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Judul
          </label>
          <input
            type="text"
            name="judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            id="judul"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Judul Course"
            required=""
          />
        </div>
        <div class="col-span-2">
          <label
            for="harga"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Harga
          </label>
          <input
            type="text"
            name="harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            id="harga"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Harga Course"
            required
          />
        </div>
        <div class="col-span-2">
          <label
            for="mentor"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Mentor
          </label>
          <input
            type="text"
            name="mentor"
            value={mentor}
            onChange={(e) => setMentor(e.target.value)}
            id="mentor"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Nama Mentor"
            required
          />
        </div>
        <div class="col-span-2">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Deskripsi
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tulis deskripsi course disini..."
          ></textarea>
        </div>
        <div class="col-span-2">
          <label
            class="block mb-2 text-sm font-medium text-gray-900"
            for="image_course"
          >
            Upload file
          </label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            onChange={(e) => setImageUpload(e.target.files[0])}
            aria-describedby="image_course_help"
            id="image_course"
            type="file"
            accept=".png,.jpg,.jpeg"
          />
        </div>
      </div>
    </>
  );
};

export default CourseForm;
