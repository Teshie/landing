import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://info.ensaq.et/api/content/categories/"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/content/${categoryId}/`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
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
        <div className="flex overflow-x-auto space-x-4">
          {categories?.map((category) => (
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
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Features;
