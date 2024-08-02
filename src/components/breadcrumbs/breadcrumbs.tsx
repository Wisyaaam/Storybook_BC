// breadcrumbs.tsx
import React, { FC, HTMLAttributes } from 'react';
import { FaHome } from 'react-icons/fa';

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'small' | 'medium' | 'large';
  datas: {
    label: string;
    href: string;
    separator?: string;
  }[];
  separator?: string;
  autoStepIndex?: boolean;
  showHomeIcon?: boolean;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
  variant = 'small',
  datas,
  separator = '›',
  autoStepIndex = false,
  showHomeIcon = true,
  ...rest
}) => {
  const currentStepIndex = autoStepIndex ? datas.length - 2 : -1;

  return (
    <div
      className={[
        'flex flex-wrap items-center',
        variant === 'small' ? 'text-sm' : variant === 'medium' ? 'text-base' : 'text-lg',
      ].join(' ')}
      {...rest}
    >
      {showHomeIcon && <FaHome className="mr-2 text-primary" />}
      {datas.map((data, index) => (
        <React.Fragment key={index}>
          <a
            href={data.href}
            className={[
              'font-medium transition duration-300 ease-in-out',
              index <= currentStepIndex ? 'text-primary' : 'text-gray-600 hover:text-gray-900',
            ].join(' ')}
          >
            {data.label}
          </a>
          {index < datas.length - 1 && <span className="mx-2 text-gray-50000">{separator}</span>}
        </React.Fragment>
      ))}
    </div>
  );
};
