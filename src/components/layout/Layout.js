import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props)
{
    return (
        <div>
        <MainNavigation/>
        <div className={classes.w95}>
            {props.children}
        </div>
    </div>
    );
}
export default Layout;