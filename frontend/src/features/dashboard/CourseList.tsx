import React from "react";
import PropTypes from "prop-types";

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <span className="category">{course.category}</span>
            <button className="view-button">View Course</button>
          </div>
        ))
      ) : (
        <p>No courses available at the moment.</p>
      )}
      <style jsx>{`
        .course-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          padding: 20px;
        }
        .course-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          max-width: 300px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .course-card h2 {
          font-size: 1.2rem;
          margin-bottom: 8px;
        }
        .course-card p {
          font-size: 1rem;
          margin-bottom: 8px;
        }
        .category {
          display: inline-block;
          background-color: #e0f7fa;
          color: #00695c;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.9rem;
          margin-bottom: 8px;
        }
        .view-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        .view-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

// PropTypes validation
CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
