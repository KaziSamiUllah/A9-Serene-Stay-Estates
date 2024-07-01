import { Helmet } from "react-helmet";

const Error = () => {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
          <Helmet>
                <title>Error</title>
            </Helmet>
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">404 - Page Not Found</h1>
          <p className="text-gray-700 mb-6">Oops! The page you are looking for could not be found.</p>
          <a href="/" className="text-blue-500 hover:text-blue-700">Go Back Home</a>
        </div>
      </div>
    );
};

export default Error;