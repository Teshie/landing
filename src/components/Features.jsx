import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Features = () => {
  const [categories, setCategories] = useState([]);
  const [contentItems, setContentItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryResponse = await fetch(
          "https://info.ensaq.et/api/content/categories/"
        );
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);

        const contentResponse = await fetch(
          "https://info.ensaq.et/api/content/content/"
        );
        const contentData = await contentResponse.json();
        setContentItems(contentData.filter((item) => !item.recomended));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/content/${categoryId}/`);
  };
  const handleContentClicked = (contentId) => {
    navigate(`/content/subcontent/${contentId}/`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header/>
      <h2 className="text-3xl font-bold mb-8">Categories</h2>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <svg
            className="w-10 h-10 text-blue-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <span className="ml-2 text-blue-500 text-lg">Loading...</span>
        </div>
      ) : (
        <>
          <div className="flex overflow-x-auto space-x-4 containers">
            {categories.map((category) => (
              <div
                key={category.id}
                className="min-w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
                onClick={() => handleCategoryClick(category.id)}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-24 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">የሚመከሩ</h2>
          <div className="flex flex-col space-y-4">
            {contentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-2 flex items-center"
                onClick={() => handleContentClicked(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded-full mr-3"
                />
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {item.description || "No description available."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Features;
