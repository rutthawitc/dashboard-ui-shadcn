import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';

interface BackButtonProps {
  text: string;
  link: string;
}

const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link
      className='text-slate-500 hover:text-slate-700 flex items-center gap-1 font-bold mb-5'
      href={link}
      aria-label='Back'>
      <ArrowLeftCircle size={14} />
      {text}
    </Link>
  );
};

export default BackButton;
