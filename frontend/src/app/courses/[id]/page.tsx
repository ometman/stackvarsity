"use client";

import CourseDetails from "../CourseDetails";

const CourseDetailsPage = ({ params }: { params : { id: string } }) => {
    return (
        <CourseDetails params={params} />
    )
}

export default CourseDetailsPage;