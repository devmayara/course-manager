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
                name: "Angular Forms",
                imageUrl: "./assets/images/forms.png",
                price: 99.99,
                code: "XPS-8796",
                duration: 120,
                rating: 5,
                releaseDate: "December, 04, 2022",
                description: "This course will help you to learn how to use Angular Forms"
            },
            {
                id: 2,
                name: " Angular HTTP",
                imageUrl: "./assets/images/http.png",
                price: 45.99,
                code: "LKL-1094",
                duration: 80,
                rating: 3,
                releaseDate: "December, 10, 2022",
                description: "This course will help you to learn how to use Angular HTTP"
            },
        ];

    }

}
