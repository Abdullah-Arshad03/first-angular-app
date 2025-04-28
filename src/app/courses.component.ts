import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "./courses.service";

@Component({
    selector : 'courses', 
    templateUrl :'./courses.component.html',
    imports : [CommonModule]
})
export class CoursesComponent{
    title = 'list of courses';
    getTitle(){
    return  this.title
    }
    courses;
    constructor(public service : CourseService){
        this.courses = service.getCourses()
    };

}