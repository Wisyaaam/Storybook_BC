import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProps } from './modal';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/Modal',
  component: Modal,
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the modal.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Modal Title' }
      }
    },
    description: {
      control: 'text',
      description: 'The description text inside the modal.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    closeable: {
      control: 'boolean',
      description: 'Whether the modal can be closed or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    position: {
      control: 'select',
      options: ['left', 'center'],
      description: 'Position of the modal on the screen.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' }
      }
    },
    positiveLabel: {
      control: 'text',
      description: 'Label for the positive action button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Confirm' }
      }
    },
    negativeLabel: {
      control: 'text',
      description: 'Label for the negative action button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Cancel' }
      }
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Komponen \`Modal\` menampilkan kotak dialog modal yang dapat disesuaikan dengan formulir. Anda dapat mengonfigurasi tampilan dan perilakunya dengan properti berikut:

- **title**: Teks judul yang ditampilkan di bagian atas modal.
- **description**: Teks deskripsi tambahan yang menyediakan konteks atau petunjuk di dalam modal.
- **closeable**: Boolean yang menunjukkan apakah modal dapat ditutup. Jika diatur ke \`true\`, modal akan menyertakan tombol tutup.
- **position**: Mengontrol perataan modal di layar. Opsinya adalah \`left\` atau \`center\`. Jika diatur ke \`left\`, modal akan diposisikan di sisi kiri layar. Jika diatur ke \`center\`, modal akan dipusatkan baik secara horizontal maupun vertikal.
- **positiveLabel**: Teks untuk tombol tindakan positif, biasanya digunakan untuk mengonfirmasi atau mengirimkan formulir.
- **negativeLabel**: Teks untuk tombol tindakan negatif, biasanya digunakan untuk membatalkan atau menutup modal.

**Contoh Penggunaan:**

\`\`\`jsx
import React, { useState } from 'react';
import { Modal } from './modal';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleSubmit = (inputValue: string) => {
    alert(\`Form submitted with value: \${inputValue}\`);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <Modal
          title="Profile"
          description="Please input your Profile"
          closeable={true}
          position="center"
          positiveLabel="Confirm"
          negativeLabel="Cancel"
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Example;
\`\`\`
        `
      },
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

// With named export we define component's story
export const Default: StoryObj<ModalProps> = (args: React.JSX.IntrinsicAttributes & ModalProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  const handleSubmit = (inputValue: string) => {
    alert(`Form submitted with value: ${inputValue}`);
  };

  return (
    <>
      <button className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-[#0a5bd1] transition duration-300" onClick={() => setIsOpen(true)}>Open Modals</button>

      {isOpen && (
        <Modal
          {...args}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

// Define default arguments for the Default StoryObj
Default.args = {
  title: 'Modal Title',
  description: 'This is a description for the modal.',
  closeable: true,
  position: 'center',
  positiveLabel: 'Confirm',
  negativeLabel: 'Cancel',
};