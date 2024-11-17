import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Content = () => {
  const [allContents, setAllContents] = useState([]);
  const [filteredContents, setFilteredContents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all contents
    const fetchContents = async () => {
      try {
        const response = await fetch(
          "https://info.ensaq.et/api/content/content/"
        );
        const data = await response.json();
        setAllContents(data);

        // Filter contents based on categoryId
        const filtered = data.filter(
          (content) => content.category_list.id === parseInt(categoryId)
        );
        setFilteredContents(filtered);
      } catch (error) {
        console.error("Error fetching contents:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContents();
  }, [categoryId]);

  const handleContentClick = (contentId) => {
    navigate(`/content/subcontent/${contentId}/`);
  };

  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Back
      </button>

      {isLoading ? (
        // Loading animation (simple spinner)
        <div className="flex justify-center items-center">
          <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
        </div>
      ) : (
        <div className="flex overflow-x-auto space-x-4 containers" >
          {filteredContents?.map((content) => (
            <div
              key={content.id}
              className="min-w-[200px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
              onClick={() => handleContentClick(content.id)}
            >
              <img
                src={content?.image}
                alt={content?.title}
                className="w-full h-28 object-cover"
              />
              <div className="p-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {content?.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {content?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Content;
