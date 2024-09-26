import { useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError() as any;
    return (
        <div id="error-page">
            <h1>Error</h1>
            <p>何らかのエラーによってリクエストされたページを表示できません。</p>
            <p>
                <i>{error.statusText || error.message} {error.statusText === "Not Found" ? "- かの有名な404ですね。urlを確認してね〜" : ""}</i>
            </p>
        </div>
    );
}

export default Error;