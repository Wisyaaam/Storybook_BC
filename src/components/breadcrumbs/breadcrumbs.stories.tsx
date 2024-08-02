import { Breadcrumb, BreadcrumbProps } from './breadcrumbs';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Konfigurasi Storybook untuk Breadcrumb
export default {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the breadcrumb items.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
    },
    separator: {
      control: 'text',
      description: 'Character or element used to separate breadcrumb items.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/' },
      },
    },
    datas: {
      control: 'object',
      description: 'Array of breadcrumb items, each with a label and href.',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '[]' },
      },
    },
    autoStepIndex: {
      control: 'boolean',
      description: 'Automatically manage the active step index.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    showHomeIcon: {
      control: 'boolean',
      description: 'Display a home icon at the beginning of the breadcrumb.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Komponen \`Breadcrumb\` menampilkan jalur navigasi untuk menunjukkan lokasi pengguna dalam hierarki aplikasi. Anda dapat mengonfigurasi tampilan dan perilakunya dengan properti berikut:

- **variant**: Ukuran elemen breadcrumb. Opsi termasuk \`small\`, \`medium\`, dan \`large\`. Ini mengontrol ukuran teks dan jarak antar item breadcrumb.
- **separator**: Karakter atau elemen yang digunakan untuk memisahkan item breadcrumb. Secara default, menggunakan \`/\`.
- **datas**: Array item breadcrumb, masing-masing dengan \`label\` dan \`href\`. Label adalah teks yang ditampilkan, dan href adalah URL atau rute yang dituju.
- **autoStepIndex**: Boolean yang mengelola indeks langkah aktif secara otomatis. Jika diatur ke \`true\`, breadcrumb akan menandai item aktif berdasarkan posisi dalam array.
- **showHomeIcon**: Boolean yang menentukan apakah ikon rumah ditampilkan di awal breadcrumb. Jika diatur ke \`true\`, ikon rumah akan muncul sebelum item breadcrumb pertama.

**Contoh Penggunaan:**

\`\`\`jsx
import React from 'react';
import { Breadcrumb } from './breadcrumbs';

const Example = () => {
  return (
    <Breadcrumb
      variant="medium"
      separator=">"
      datas={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Electronics', href: '/electronics' },
        { label: 'Laptops', href: '/laptops' },
      ]}
      autoStepIndex={true}
      showHomeIcon={true}
    />
  );
};

export default Example;
\`\`\`
        `
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

// Definisi Default StoryObj
export const Default: StoryObj<BreadcrumbProps> = (args: React.JSX.IntrinsicAttributes & BreadcrumbProps ) => <Breadcrumb {...args} />;

// Pengaturan default untuk Default StoryObj
Default.args = {
  variant: 'small',
  datas: [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' }
  ],
  autoStepIndex: true,
};

// Definisi WithCustomSeparator StoryObj
export const Medium: StoryObj<BreadcrumbProps> = (args: React.JSX.IntrinsicAttributes & BreadcrumbProps) => <Breadcrumb {...args} />;

// Pengaturan default untuk WithCustomSeparator StoryObj
Medium.args = {
  ...Default.args,
  variant:'medium'
};

// Definisi WithLargeVariant StoryObj
export const Large: StoryObj<BreadcrumbProps> = (args: React.JSX.IntrinsicAttributes & BreadcrumbProps) => <Breadcrumb {...args} />;

// Pengaturan default untuk WithLargeVariant StoryObj
Large.args = {
  ...Default.args,
  variant: 'large',
};
export const Costum: StoryObj<BreadcrumbProps> = (args: React.JSX.IntrinsicAttributes & BreadcrumbProps) => <Breadcrumb {...args} />;

// Pengaturan default untuk WithLargeVariant StoryObj
Costum.args = {
  ...Default.args,
  separator: '/',
  showHomeIcon: false
};
