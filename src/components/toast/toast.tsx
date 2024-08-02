import React, { FC, HTMLAttributes, useState } from 'react';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    type: 'information' | 'notification';
    variant: 'success' | 'warning' | 'danger' | 'default';
    size: 'small' | 'medium' | 'large';
    message: string; // Pesan untuk notifikasi atau deskripsi untuk informasi
}

const variantStyles = {
    success: 'border-green-600 bg-green-100 text-green-800',
    warning: 'border-yellow-600 bg-yellow-100 text-yellow-800',
    danger: 'border-red-600 bg-red-100 text-red-800',
    default: 'border-gray-600 bg-gray-100 text-gray-800',
};

const sizeStyles = {
    small: 'min-w-[150px] min-h-[50px] text-sm p-2',
    medium: 'min-w-[200px] min-h-[60px] text-base p-3',
    large: 'min-w-[250px] min-h-[70px] text-lg p-4',
};

const getTitle = (type: 'information' | 'notification', variant: 'success' | 'warning' | 'danger' | 'default') => {
    if (type === 'notification') {
        return 'Notification';
    }
    switch (variant) {
        case 'success':
            return 'Success Message';
        case 'warning':
            return 'Warning Message';
        case 'danger':
            return 'Danger Message';
        default:
            return 'Default Message';
    }
};

export const Toast: FC<ToastProps> = ({ type, variant, size, message, ...rest }) => {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;

    const baseStyle = type === 'notification' ? 'bg-white text-black' : variantStyles[variant];
    const title = getTitle(type, variant);

    return (
        <div
            className={`${baseStyle} ${sizeStyles[size]} border rounded shadow inline-block relative`}
            {...rest}
        >
            <button
                onClick={() => setVisible(false)}
                className="absolute top-2 right-2 text-lg font-bold"
                aria-label="Close"
            >
                &times;
            </button>
            <div className="flex flex-col">
                <span className="font-bold">{title}</span>
                <span>{message}</span>
            </div>
        </div>
    );
};
