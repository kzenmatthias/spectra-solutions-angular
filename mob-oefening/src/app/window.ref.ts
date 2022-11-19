import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class WindowRef {
    public get nativeWindow(): Window {
        return window;
    }
}