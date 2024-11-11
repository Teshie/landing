import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SubContent = () => {
  const [subContents, setSubContents] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const { contentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all subcontents from the API
    const fetchSubContents = async () => {
      try {
        const response = await fetch(
          `https://info.ensaq.et/api/content/subcontent/`
        );
        const data = await response.json();
        setSubContents(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching subcontents:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchSubContents();
  }, []);

  // Filter subContents by contentId
  const filteredSubContents = subContents?.filter(
    (subContent) => subContent?.content?.id === parseInt(contentId)
  );

  // Handle Back Button Click
  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
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

      {/* Loading state */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
        </div>
      ) : filteredSubContents?.length === 0 ? (
        <p className="text-gray-600 text-center">No subcontents available.</p>
      ) : (
        filteredSubContents?.map((subContent) => (
          <div
            key={subContent?.id}
            className="bg-white rounded-lg shadow-md p-6 mb-6"
          >
            {/* Image Banner */}
            {subContent?.image && (
              <img
                src={subContent?.image}
                alt={`${subContent?.title} banner`}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {subContent?.title}
            </h3>
            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {subContent?.description}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default SubContent;
