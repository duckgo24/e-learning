import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { SearchIcon } from '../icons/SearchIcon';
import BtnSignIn from '../BtnSignIn/BtnSignIn';
import BtnSignUp from '../BtnSignUp/BtnSignUp';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center py-4 px-6 bg-white border-b-2 border-b-gray-300 border-solid">
            <div className="flex justify-between items-center gap-2">
                <Link href="/">
                    <Image className="rounded-full" src="/image/pepe.jpg" alt="Logo" width={100} height={100} />
                    <p className="text-lg font-bold">Pepet Meme</p>
                </Link>
            </div>
            <div className="flex-1 flex justify-center">
                <div className="w-1/3">
                    <Input type="text" placeholder="Tim kiem noi dung..." leftIcon={<SearchIcon />} />
                </div>
            </div>
            <div className="flex gap-2">
                <BtnSignUp />
                <BtnSignIn />
            </div>
        </header>
    )
}