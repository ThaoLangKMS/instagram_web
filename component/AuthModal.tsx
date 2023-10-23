import React from "react";
import Image from "next/image";

export default function AuthModal() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal modal-open">
        <div className="modal-box w-96 mx-auto my-auto">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="text-center mb-4 ml-16">
            <Image
              src="/instagramLine.png"
              alt="Your Image"
              width={200}
              height={200}
            />
          </div>
          <h2 className="font-bold text-lg text-center">Sign up</h2>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs m-2 mx-auto"
          />
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs m-2 mx-auto"
          />
          <button className="btn btn-info w-full max-w-xs m-4 mx-auto mt-6">
            Sign up
          </button>
        </div>
      </dialog>
    </div>
  );
}
