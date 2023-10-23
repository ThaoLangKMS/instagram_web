import React from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

export default function AppSidebar() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <HiHome size={20} />
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
          <li>
            <Link href="/create_post">Create</Link>
          </li>
          <li>
            <Link href="/search">Message</Link>
          </li>
          <li>
            <Link href="/search">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
