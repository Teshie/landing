import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SubContent = () => {
  const [subContents, setSubContents] = useState([]);
  const { contentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all subcontents from the API
    const fetchSubContents = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/content/subcontent/`
        );
        const data = await response.json();
        setSubContents(data);
      } catch (error) {
        console.error("Error fetching subcontents:", error);
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

      <h2 className="text-3xl font-bold text-center mb-8">
        SubContent Details
      </h2>
      {filteredSubContents.length === 0 ? (
        <p className="text-gray-600 text-center">No subcontents available.</p>
      ) : (
        filteredSubContents.map((subContent) => (
          <div
            key={subContent.id}
            className="bg-white rounded-lg shadow-md p-6 mb-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {subContent.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {subContent.description}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default SubContent;
