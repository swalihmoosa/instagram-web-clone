import React, { useContext } from "react";
import { UserContext } from "../../App";

export default function ExploreSingleScreen() {
    const { userActions } = useContext(UserContext);
    console.log("$$$$$$$$$$$$$$$$$",userActions);
    return <div>ExploreSingleScreen</div>;
}
