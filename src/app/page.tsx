'use client';
import React, { useState } from "react";
import { Breadcrumb } from "@/components";
import { Modal } from "@/components";
import { Toast } from "@/components";

export default function Home() {
  const [isToast, setToast] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Default to false to start with modal closed
  const [message, setMessage] = useState('');
  const [name, setName] = useState(''); // Use state to manage name

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (inputValue: string) => {
    setName(inputValue);
    setMessage(`Halo! ${inputValue}`);
    setToast(true);

    // Hide toast after 2 seconds
    setTimeout(() => {
      setToast(false);
    }, 2000);
    
    handleClose(); // Close modal after submission
  };

  return (
    <div className="p-[40px]">
      {/* BreadCrumbs */}
      <Breadcrumb
        autoStepIndex
        datas={[
          {
            href: '/',
            label: 'Home'
          },
          {
            href: '/',
            label: 'Contact'
          }
        ]}
        variant="medium"
      />

      {/* Modal */}
      <br />

      <button
        className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-[#0a5bd1] transition duration-300"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      {isOpen && (
        <Modal
          closeable
          description="Please input your Profile"
          negativeLabel="Cancel"
          onClose={handleClose}
          onSubmit={handleSubmit}
          position="center"
          positiveLabel="Confirm"
          title="Profile"
        />
      )}

      <div className="flex items-center justify-end mt-[530px]">
        {isToast && (
          <Toast
            message={message}
            size="medium"
            type="information"
            variant="success"
          />
        )}
      </div>
    </div>
  );
}
