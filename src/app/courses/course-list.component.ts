import { Component } from "@angular/core";

import { Course } from "./course";

@Component({
    selector: "app-course-list",
    templateUrl: "./course-list.component.html"
})

export class CourseListComponent {

    courses: Course[] = [];

    ngOnInit() {
        this.courses = [
            {
                id: 1,
                name: "AngularJS",
                imageUrl: "",
                price: 99.99,
                code: "XPS-8796",
                duration: 120,
                rating: 4.5,
                release_date: "December, 04, 2018"
            },
            {
                id: 2,
                name: " Angular HTTP",
                imageUrl: "",
                price: 45.99,
                code: "LKL-8796",
                duration: 80,
                rating: 3.5,
                release_date: "December, 10, 2018"
            },
        ];

    }

}
