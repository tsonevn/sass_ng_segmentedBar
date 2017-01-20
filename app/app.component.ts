import { Component } from "@angular/core";
import {Page} from "ui/page";
import {SegmentedBar, SelectedIndexChangedEventData} from "ui/segmented-bar"

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    selectedIndex: number;
    items: Array<any>;

    constructor(private page:Page){
        this.selectedIndex = 0;
        this.items = [{title: 'Social'}, {title: 'Service'}];
        page.actionBarHidden = true;
        page.backgroundSpanUnderStatusBar = true;
    }
    indexChanged(args:SelectedIndexChangedEventData){
        console.log(args.newIndex);

    }
}
