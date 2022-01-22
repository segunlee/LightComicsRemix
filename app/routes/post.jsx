import { Outlet } from "remix";

export default function Post() {
    return (
        <div>
            <h1>POST</h1>
            <Outlet />
        </div>
    );
}