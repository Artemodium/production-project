import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.sass";
import {AppLink} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink to={'/about'} className={cls.aboutLink}>About</AppLink>
            </div>
        </div>
    );
};
