import React from "react";
// import Link from "next/link";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
     {children}
    </div>
  );
}
