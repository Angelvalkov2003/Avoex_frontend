import React from 'react'
import { PlusIcon } from 'lucide-react';

const Navbar = () => {
  const scrollToCreateForm = () => {
    const createFormElement = document.getElementById('create-form');
    if (createFormElement) {
      createFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className="mx-auto max-w-6xl p-4">
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bald text-primary font-mono tracking-tighter'>Avoex</h1>
                <div className='flex items-center gap-4'>
                    <button onClick={scrollToCreateForm} className="btn btn-primary">
                        <PlusIcon className="size-5"/>
                        <span>Book Consultation</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar;
