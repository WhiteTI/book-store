import {Route, Routes} from "react-router";

const AppRouter = () => {
    return (
        <Routes>
            <Route index />
            <Route path='category/:type'/>
            <Route path='/genres'/>
            <Route path='series/:title'/>
            <Route path='titles/:title'/>
        </Routes>
    );
};

export default AppRouter;