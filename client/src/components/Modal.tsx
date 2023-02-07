import React from "react";
import { useNavigate } from "react-router";
import useModal from "../hooks/useModal";

function Modal() {
  const navigate = useNavigate();
  const { isOpen, close } = useModal();

  const handleDecline = () => {
    navigate("/home");
    localStorage.removeItem("group");
  };

  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border border-b-8 border-r-8 border-gray-900 shadow-lg ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white bg-black text-white p-2">
              Are you really sure about this?
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Yo, what&apos;s up! This chatroom is part of an academic project,
              but it&apos;s only open to those who are 18 and up. If you&apos;re
              younger than that, sorry, better luck next time. Just wanted to
              give you a heads up that some people might share opinions or ideas
              that could be seen as offensive or hurtful. But hey, that&apos;s
              the world we live in, right? So, let&apos;s keep things chill and
              show each other some love. Remember, this chatroom isn&apos;t
              regulated, so you chat at your own risk (don&apos;t accept
              invitations from strangers). Peace out!
            </p>
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="defaultModal"
              type="button"
              className=" px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm"
              onClick={() => close()}
            >
              I accept
            </button>
            <button
              data-modal-hide="defaultModal"
              type="button"
              className="bg-red-600 text-white px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm hover:border-gray-600"
              onClick={handleDecline}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
