'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        モーダルを開く
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="モーダルの例"
      >
        <div className="space-y-4">
          <p>これはモーダルダイアログのサンプルです。</p>
          <p>背景をクリックするか、×ボタンを押すとモーダルが閉じます。</p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            閉じる
          </button>
        </div>
      </Modal>
    </main>
  );
}
