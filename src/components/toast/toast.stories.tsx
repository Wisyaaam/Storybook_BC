import { Toast, ToastProps } from './toast';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/Toast',
  component: Toast,
  argTypes: {
    type: {
      control: 'select',
      options: ['information', 'notification'],
      description: 'Type of the toast message.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'information' },
      },
    },
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'default'],
      description: 'Variant of the toast message.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the toast message.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    message: {
      control: 'text',
      description: 'Content of the toast message.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'This is a default toast message.' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Komponen \`Toast\` menampilkan pesan sementara untuk memberi tahu pengguna tentang suatu peristiwa. Anda dapat mengonfigurasi tampilan dan perilakunya dengan properti berikut:

- **type**: Jenis pesan toast. Opsi termasuk \`information\` dan \`notification\`. 
  - \`information\`: Biasanya menampilkan informasi dengan judul dan deskripsi.
  - \`notification\`: Menampilkan pesan sederhana tanpa judul dan deskripsi, sering digunakan untuk pemberitahuan cepat.

- **variant**: Varian dari pesan toast. Opsi termasuk \`success\`, \`warning\`, \`danger\`, dan \`default\`. 
  - \`success\`: Menampilkan pesan dengan gaya keberhasilan, biasanya dengan warna hijau.
  - \`warning\`: Menampilkan pesan peringatan, biasanya dengan warna kuning.
  - \`danger\`: Menampilkan pesan kesalahan, biasanya dengan warna merah.
  - \`default\`: Menampilkan pesan dengan gaya standar.

- **size**: Ukuran dari pesan toast. Opsi termasuk \`small\`, \`medium\`, dan \`large\`. 
  - \`small\`: Ukuran kecil untuk pesan singkat.
  - \`medium\`: Ukuran menengah untuk pesan standar.
  - \`large\`: Ukuran besar untuk pesan yang lebih menonjol.

- **message**: Konten dari pesan toast. Untuk jenis \`information\`, ini dapat mencakup judul dan deskripsi, sedangkan untuk jenis \`notification\`, hanya pesan saja yang ditampilkan.

**Contoh Penggunaan:**

\`\`\`jsx
import React from 'react';
import { Toast } from './toast';

const Example = () => {
  return (
    <>
      <Toast
        type="information"
        variant="success"
        size="medium"
        message="This is a success message."
      />
      <Toast
        type="notification"
        variant="warning"
        size="large"
        message="This is a warning notification."
      />
    </>
  );
};

export default Example;
\`\`\`
        `
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

// With named export we define component's story
export const Default: StoryObj<ToastProps> = (args: React.JSX.IntrinsicAttributes & ToastProps) => <Toast {...args} />;
// Define default arguments for the Default StoryObj
Default.args = {
  type: 'information',
  variant: 'default',
  size: 'medium',
  message: 'This is a default toast message.',
};

// Second StoryObj for Information with Success Variant
export const InformationSuccess: StoryObj<ToastProps> = (args: React.JSX.IntrinsicAttributes & ToastProps) => <Toast {...args} />;
// Define default arguments for the InformationSuccess StoryObj
InformationSuccess.args = {
  type: 'information',
  variant: 'success',
  size: 'medium',
  message: 'This message is for a success message.',
};

// Second StoryObj for Information with Success Variant
export const InformationDanger: StoryObj<ToastProps> = (args: React.JSX.IntrinsicAttributes & ToastProps) => <Toast {...args} />;
// Define default arguments for the InformationSuccess StoryObj
InformationDanger.args = {
  type: 'information',
  variant: 'danger',
  size: 'medium',
  message: 'This message is for a danger message.',
};

// Second StoryObj for Information with Success Variant
export const InformationWarning: StoryObj<ToastProps> = (args: React.JSX.IntrinsicAttributes & ToastProps) => <Toast {...args} />;
// Define default arguments for the InformationSuccess StoryObj
InformationWarning.args = {
  type: 'information',
  variant: 'warning',
  size: 'medium',
  message: 'This message is for a warning message.',
};

// Third StoryObj for Notification with Warning Variant
export const Notification: StoryObj<ToastProps> = (args: React.JSX.IntrinsicAttributes & ToastProps) => <Toast {...args} />;
// Define default arguments for the NotificationExample StoryObj
Notification.args = {
  type: 'notification',
  size: 'medium',
  message: 'Hello, this is a notification message.',
};