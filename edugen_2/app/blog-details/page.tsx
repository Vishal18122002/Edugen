import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Course",
  description: "Create a new course",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Create New Course"
        description="Fill out the form below to create a new course."
      />

      <section >
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto bg-gray p-8 rounded-md shadow-md">
            <h1 className="text-3xl font-semibold mb-8 text-center text-white-700">Create New Course</h1>
            <form>
              <div className="mb-6">
                <label className="block text-lg font-medium text-white-700">Course Title</label>
                <input
                  type="text"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
                  placeholder="Enter course title"
                />
                <p className="mt-1 text-sm text-gray-500">This is the title of your course.</p>
              </div>
              
              <div className="mb-6">
                <label className="block text-lg font-medium text-white-700">Description</label>
                <textarea
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
                  placeholder="Enter course description"
                ></textarea>
                <p className="mt-1 text-sm text-gray-500">Provide a detailed description of the course content.</p>
              </div>
              
              <div className="mb-6">
                <label className="block text-lg font-medium text-white-700">Upload Links</label>

                <input
                  type="file"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
                  placeholder="Enter upload links"
                />
                <p className="mt-1 text-sm text-gray-500">Add links to course materials or resources.</p>
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium text-white-700">Additional Information</label>
                <textarea
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
                  placeholder="Enter additional information"
                ></textarea>
                <p className="mt-1 text-sm text-gray-500">Any additional notes or information about the course.</p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Create Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

// export default CreateCourse;



export default BlogDetailsPage;
