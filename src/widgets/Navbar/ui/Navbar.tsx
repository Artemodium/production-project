import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.sass";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'} className={cls.aboutLink}>About</AppLink>
            </div>
        </div>
    );
};
