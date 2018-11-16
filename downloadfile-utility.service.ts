// Angular Modules
import { Injectable } from '@angular/core';

@Injectable()
export class DownloadFileUtility {
    private readonly IS_EDGE = /Edge/.test(navigator.userAgent);
    private readonly IS_IE = (<any>document).documentMode;

    public download(url: string): void {
        if (this.IS_IE || this.IS_EDGE) {
            const blob = new Blob([url]);
            const name: string = url.split('/').pop();
            window.navigator.msSaveOrOpenBlob(blob, name);
        } else {
            let a = document.createElement('a');
            a.href = url;
            a.download = url;
            document.body.appendChild(a);
            a.click();
            a.parentNode.removeChild(a);
        }
    }
}
