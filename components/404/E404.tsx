import {E404Box, E404Margins, E404TextBox} from "../../styles/E404/e404";
import useTranslation from "next-translate/useTranslation";

const E404 = () => {

    return <>
        <E404Margins>
            <E404Box>
                <E404TextBox>
                    <p>404<br/>Not Found</p>
                </E404TextBox>
            </E404Box>
        </E404Margins>
    </>
}

export default E404;