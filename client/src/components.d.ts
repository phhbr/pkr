/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Session } from "./models/session";
import { User } from "./models/user";
export namespace Components {
    interface PkrHome {
    }
    interface PkrRoot {
    }
}
declare global {
    interface HTMLPkrHomeElement extends Components.PkrHome, HTMLStencilElement {
    }
    var HTMLPkrHomeElement: {
        prototype: HTMLPkrHomeElement;
        new (): HTMLPkrHomeElement;
    };
    interface HTMLPkrRootElement extends Components.PkrRoot, HTMLStencilElement {
    }
    var HTMLPkrRootElement: {
        prototype: HTMLPkrRootElement;
        new (): HTMLPkrRootElement;
    };
    interface HTMLElementTagNameMap {
        "pkr-home": HTMLPkrHomeElement;
        "pkr-root": HTMLPkrRootElement;
    }
}
declare namespace LocalJSX {
    interface PkrHome {
        "onPkr-join"?: (event: CustomEvent<Session & User>) => void;
    }
    interface PkrRoot {
    }
    interface IntrinsicElements {
        "pkr-home": PkrHome;
        "pkr-root": PkrRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pkr-home": LocalJSX.PkrHome & JSXBase.HTMLAttributes<HTMLPkrHomeElement>;
            "pkr-root": LocalJSX.PkrRoot & JSXBase.HTMLAttributes<HTMLPkrRootElement>;
        }
    }
}