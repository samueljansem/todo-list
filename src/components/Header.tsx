import { Logo } from '../Logo';

export function Header() {
    return (
        <header className="w-full h-[200px] bg-gray-700 flex items-center justify-center">
            <Logo />
        </header>
    );
}
