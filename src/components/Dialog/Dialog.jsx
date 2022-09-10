import React from "react";

import "./Dialog.scss";

export const Dialog = ({setDialog}) => {
	return (
        <dialog className="nes-dialog" id="dialog-default">
            <p className="title">Dialog</p>
            <p>Alert: this is a dialog.</p>
            <menu className="dialog-menu">
                <button className="nes-btn">Cancel</button>
                <button className="nes-btn is-primary">Confirm</button>
            </menu>
        </dialog>
	);
};

export default Dialog;